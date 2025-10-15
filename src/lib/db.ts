import { supabase, supabaseAdmin } from './supabase';

// Types
export interface Profile {
  id: string;
  role: 'customer' | 'provider' | 'admin';
  name: string | null;
  phone: string | null;
  rating: number | null;
  status: string | null;
  created_at: string;
}

export interface ProviderVerification {
  id: string;
  user_id: string;
  phone: string | null;
  address: string | null;
  city: string | null;
  years_experience: number | null;
  government_id_image_url: string | null;
  professional_license_image_url: string | null;
  field_of_work: string | null;
  categories: string[];
  hourly_rate: number | null;
  availability: any;
  verification_status: 'pending' | 'under_review' | 'approved' | 'rejected';
  admin_notes: string | null;
  reviewed_by: string | null;
  reviewed_at: string | null;
  created_at: string;
  updated_at: string;
  profile?: Profile;
}

export interface Booking {
  id: string;
  customer_id: string | null;
  provider_id: string | null;
  service_category: string | null;
  status: 'pending' | 'accepted' | 'in_progress' | 'completed' | 'canceled';
  scheduled_time: string | null;
  notes: string | null;
  price: number | null;
  created_at: string;
  customer?: Profile;
  provider?: Profile;
}

export interface DashboardStats {
  totalUsers: number;
  totalProviders: number;
  totalBookings: number;
  totalRevenue: number;
  pendingVerifications: number;
  activeBookings: number;
  userGrowth: number;
  providerGrowth: number;
  bookingGrowth: number;
  revenueGrowth: number;
}

// Dashboard Analytics
export async function getDashboardStats(): Promise<DashboardStats> {
  try {
    // Get current month stats
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const firstDayOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const lastDayOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    // Total users
    const { count: totalUsers } = await supabaseAdmin
      .from('profiles')
      .select('*', { count: 'exact', head: true });

    // Total providers (approved)
    const { count: totalProviders } = await supabaseAdmin
      .from('provider_verifications')
      .select('*', { count: 'exact', head: true })
      .eq('verification_status', 'approved');

    // Total bookings
    const { count: totalBookings } = await supabaseAdmin
      .from('bookings')
      .select('*', { count: 'exact', head: true });

    // Total revenue (completed bookings)
    const { data: revenueData } = await supabaseAdmin
      .from('bookings')
      .select('price')
      .eq('status', 'completed');

    const totalRevenue = revenueData?.reduce((sum, booking) => sum + (booking.price || 0), 0) || 0;

    // Pending verifications
    const { count: pendingVerifications } = await supabaseAdmin
      .from('provider_verifications')
      .select('*', { count: 'exact', head: true })
      .eq('verification_status', 'pending');

    // Active bookings
    const { count: activeBookings } = await supabaseAdmin
      .from('bookings')
      .select('*', { count: 'exact', head: true })
      .in('status', ['pending', 'accepted', 'in_progress']);

    // Growth calculations
    // Users this month vs last month
    const { count: usersThisMonth } = await supabaseAdmin
      .from('profiles')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', firstDayOfMonth.toISOString());

    const { count: usersLastMonth } = await supabaseAdmin
      .from('profiles')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', firstDayOfLastMonth.toISOString())
      .lte('created_at', lastDayOfLastMonth.toISOString());

    const userGrowth = usersLastMonth ? ((usersThisMonth || 0) - usersLastMonth) / usersLastMonth * 100 : 0;

    // Providers this month vs last month
    const { count: providersThisMonth } = await supabaseAdmin
      .from('provider_verifications')
      .select('*', { count: 'exact', head: true })
      .eq('verification_status', 'approved')
      .gte('reviewed_at', firstDayOfMonth.toISOString());

    const { count: providersLastMonth } = await supabaseAdmin
      .from('provider_verifications')
      .select('*', { count: 'exact', head: true })
      .eq('verification_status', 'approved')
      .gte('reviewed_at', firstDayOfLastMonth.toISOString())
      .lte('reviewed_at', lastDayOfLastMonth.toISOString());

    const providerGrowth = providersLastMonth ? ((providersThisMonth || 0) - providersLastMonth) / providersLastMonth * 100 : 0;

    // Bookings this month vs last month
    const { count: bookingsThisMonth } = await supabaseAdmin
      .from('bookings')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', firstDayOfMonth.toISOString());

    const { count: bookingsLastMonth } = await supabaseAdmin
      .from('bookings')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', firstDayOfLastMonth.toISOString())
      .lte('created_at', lastDayOfLastMonth.toISOString());

    const bookingGrowth = bookingsLastMonth ? ((bookingsThisMonth || 0) - bookingsLastMonth) / bookingsLastMonth * 100 : 0;

    // Revenue growth
    const { data: revenueThisMonth } = await supabaseAdmin
      .from('bookings')
      .select('price')
      .eq('status', 'completed')
      .gte('created_at', firstDayOfMonth.toISOString());

    const { data: revenueLastMonth } = await supabaseAdmin
      .from('bookings')
      .select('price')
      .eq('status', 'completed')
      .gte('created_at', firstDayOfLastMonth.toISOString())
      .lte('created_at', lastDayOfLastMonth.toISOString());

    const thisMonthRevenue = revenueThisMonth?.reduce((sum, booking) => sum + (booking.price || 0), 0) || 0;
    const lastMonthRevenue = revenueLastMonth?.reduce((sum, booking) => sum + (booking.price || 0), 0) || 0;

    const revenueGrowth = lastMonthRevenue ? (thisMonthRevenue - lastMonthRevenue) / lastMonthRevenue * 100 : 0;

    return {
      totalUsers: totalUsers || 0,
      totalProviders: totalProviders || 0,
      totalBookings: totalBookings || 0,
      totalRevenue,
      pendingVerifications: pendingVerifications || 0,
      activeBookings: activeBookings || 0,
      userGrowth,
      providerGrowth,
      bookingGrowth,
      revenueGrowth,
    };
  } catch (error) {
    console.error('Error getting dashboard stats:', error);
    throw error;
  }
}

// Provider Verifications
export async function getProviderVerifications(status?: string) {
  const query = supabaseAdmin
    .from('provider_verifications')
    .select(`
      *,
      profile:profiles!provider_verifications_user_id_fkey(
        id,
        name,
        phone,
        rating,
        created_at
      )
    `)
    .order('created_at', { ascending: false });

  if (status) {
    query.eq('verification_status', status);
  }

  const { data, error } = await query;

  if (error) throw error;
  return data as ProviderVerification[];
}

export async function getProviderVerificationById(id: string) {
  const { data, error } = await supabaseAdmin
    .from('provider_verifications')
    .select(`
      *,
      profile:profiles!provider_verifications_user_id_fkey(
        id,
        name,
        phone,
        rating,
        created_at
      )
    `)
    .eq('id', id)
    .single();

  if (error) throw error;
  return data as ProviderVerification;
}

export async function updateVerificationStatus(
  id: string,
  status: 'approved' | 'rejected',
  adminId: string,
  adminNotes?: string
) {
  const verification = await getProviderVerificationById(id);
  
  // Update verification status
  const { error: updateError } = await supabaseAdmin
    .from('provider_verifications')
    .update({
      verification_status: status,
      reviewed_by: adminId,
      reviewed_at: new Date().toISOString(),
      admin_notes: adminNotes,
    })
    .eq('id', id);

  if (updateError) throw updateError;

  // If approved, create provider entry and update profile
  if (status === 'approved') {
    // Create provider entry
    const { error: providerError } = await supabaseAdmin
      .from('providers')
      .upsert({
        id: verification.user_id,
        user_id: verification.user_id,
        categories: verification.categories,
        hourly_rate: verification.hourly_rate,
        availability: verification.availability,
        documents: [
          verification.government_id_image_url,
          verification.professional_license_image_url,
        ].filter(Boolean),
      });

    if (providerError) throw providerError;

    // Update profile role to provider
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .update({ role: 'provider', status: 'approved' })
      .eq('id', verification.user_id);

    if (profileError) throw profileError;
  }

  // If rejected, update profile status
  if (status === 'rejected') {
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .update({ status: 'rejected' })
      .eq('id', verification.user_id);

    if (profileError) throw profileError;
  }

  return { success: true };
}

// Users Management
export async function getUsers(role?: string, limit = 50, offset = 0) {
  let query = supabaseAdmin
    .from('profiles')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (role) {
    query = query.eq('role', role);
  }

  const { data, error, count } = await query;

  if (error) throw error;
  return { data: data as Profile[], count: count || 0 };
}

export async function getUserById(id: string) {
  const { data, error } = await supabaseAdmin
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data as Profile;
}

export async function updateUserStatus(id: string, status: string) {
  const { error } = await supabaseAdmin
    .from('profiles')
    .update({ status })
    .eq('id', id);

  if (error) throw error;
  return { success: true };
}

// Bookings Management
export async function getBookings(status?: string, limit = 50, offset = 0) {
  let query = supabaseAdmin
    .from('bookings')
    .select(`
      *,
      customer:profiles!bookings_customer_id_fkey(name, phone),
      provider:profiles!bookings_provider_id_fkey(name, phone)
    `, { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (status) {
    query = query.eq('status', status);
  }

  const { data, error, count } = await query;

  if (error) throw error;
  return { data: data as Booking[], count: count || 0 };
}

// Analytics
export async function getRevenueByMonth(months = 6) {
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - months);

  const { data, error } = await supabaseAdmin
    .from('bookings')
    .select('price, created_at')
    .eq('status', 'completed')
    .gte('created_at', startDate.toISOString())
    .order('created_at', { ascending: true });

  if (error) throw error;

  // Group by month
  const monthlyRevenue: { [key: string]: number } = {};
  data?.forEach((booking) => {
    const month = new Date(booking.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    monthlyRevenue[month] = (monthlyRevenue[month] || 0) + (booking.price || 0);
  });

  return Object.entries(monthlyRevenue).map(([month, revenue]) => ({
    month,
    revenue,
  }));
}

export async function getBookingsByDay(days = 7) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const { data, error } = await supabaseAdmin
    .from('bookings')
    .select('created_at')
    .gte('created_at', startDate.toISOString())
    .order('created_at', { ascending: true });

  if (error) throw error;

  // Group by day
  const dailyBookings: { [key: string]: number } = {};
  data?.forEach((booking) => {
    const day = new Date(booking.created_at).toLocaleDateString('en-US', { weekday: 'short' });
    dailyBookings[day] = (dailyBookings[day] || 0) + 1;
  });

  return Object.entries(dailyBookings).map(([day, bookings]) => ({
    day,
    bookings,
  }));
}

export async function getCategoryDistribution() {
  const { data, error } = await supabaseAdmin
    .from('bookings')
    .select('service_category');

  if (error) throw error;

  // Count by category
  const categoryCounts: { [key: string]: number } = {};
  data?.forEach((booking) => {
    const category = booking.service_category || 'Other';
    categoryCounts[category] = (categoryCounts[category] || 0) + 1;
  });

  return Object.entries(categoryCounts).map(([name, value]) => ({
    name,
    value,
  }));
}

export async function getRecentActivity(limit = 10) {
  // Get recent bookings
  const { data: bookings } = await supabaseAdmin
    .from('bookings')
    .select('created_at, status, customer:profiles!bookings_customer_id_fkey(name)')
    .order('created_at', { ascending: false })
    .limit(limit);

  // Get recent verifications
  const { data: verifications } = await supabaseAdmin
    .from('provider_verifications')
    .select('created_at, verification_status, profile:profiles!provider_verifications_user_id_fkey(name)')
    .order('created_at', { ascending: false })
    .limit(limit);

  // Get recent users
  const { data: users } = await supabaseAdmin
    .from('profiles')
    .select('created_at, name, role')
    .order('created_at', { ascending: false })
    .limit(limit);

  // Combine and sort
  const activities = [
    ...(bookings || []).map((b: any) => ({
      title: `Booking ${b.status} by ${b.customer?.name || 'Unknown'}`,
      time: b.created_at,
      type: 'booking',
      status: b.status,
    })),
    ...(verifications || []).map((v: any) => ({
      title: `Provider verification ${v.verification_status}: ${v.profile?.name || 'Unknown'}`,
      time: v.created_at,
      type: 'verification',
      status: v.verification_status,
    })),
    ...(users || []).map((u: any) => ({
      title: `New ${u.role} signup: ${u.name || 'Unknown'}`,
      time: u.created_at,
      type: 'user',
      status: 'new',
    })),
  ]
    .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
    .slice(0, limit);

  return activities;
}
