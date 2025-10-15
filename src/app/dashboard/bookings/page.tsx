"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, DollarSign, MapPin, Search, User } from "lucide-react";

interface Booking {
  id: string;
  customer_id: string;
  provider_id: string;
  service_type: string;
  scheduled_date: string;
  scheduled_time: string;
  location: string;
  description: string | null;
  status: string;
  total_amount: number | null;
  created_at: string;
  customer?: {
    full_name: string | null;
    email: string;
    phone: string | null;
  };
  provider?: {
    full_name: string | null;
    email: string;
    phone: string | null;
  };
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, [activeTab]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const statusParam = activeTab === "all" ? "" : `?status=${activeTab}`;
      const response = await fetch(`/api/bookings${statusParam}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }
      
      const data = await response.json();
      setBookings(data.bookings || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBookings = bookings.filter(booking => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      booking.service_type.toLowerCase().includes(query) ||
      booking.location.toLowerCase().includes(query) ||
      booking.customer?.full_name?.toLowerCase().includes(query) ||
      booking.provider?.full_name?.toLowerCase().includes(query)
    );
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500';
      case 'confirmed':
        return 'bg-blue-500';
      case 'in_progress':
        return 'bg-purple-500';
      case 'completed':
        return 'bg-green-500';
      case 'cancelled':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => b.status === 'pending').length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    in_progress: bookings.filter(b => b.status === 'in_progress').length,
    completed: bookings.filter(b => b.status === 'completed').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length,
    totalRevenue: bookings
      .filter(b => b.status === 'completed')
      .reduce((sum, b) => sum + (b.total_amount || 0), 0),
  };

  const openDetailsDialog = (booking: Booking) => {
    setSelectedBooking(booking);
    setShowDetailsDialog(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Bookings Management</h1>
        <p className="text-muted-foreground">View and manage all service bookings</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.confirmed} confirmed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <Calendar className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completed}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.in_progress} in progress
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalRevenue.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              From completed bookings
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search Bar */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by service type, location, customer, or provider..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-sm"
            />
          </div>
        </CardHeader>
      </Card>

      {/* Bookings List */}
      <Card>
        <CardHeader>
          <CardTitle>All Bookings</CardTitle>
          <CardDescription>View booking details and status</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
              <TabsTrigger value="in_progress">In Progress</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              {loading ? (
                <div className="text-center py-8">Loading bookings...</div>
              ) : filteredBookings.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No bookings found
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredBookings.map((booking) => (
                    <Card key={booking.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 space-y-3">
                            {/* Header */}
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-lg">
                                {booking.service_type}
                              </h3>
                              <Badge className={getStatusColor(booking.status)}>
                                {booking.status.replace('_', ' ')}
                              </Badge>
                              {booking.total_amount && (
                                <Badge variant="outline" className="ml-auto">
                                  ${booking.total_amount.toFixed(2)}
                                </Badge>
                              )}
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>
                                  {new Date(booking.scheduled_date).toLocaleDateString()}
                                </span>
                              </div>

                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                <span>{booking.scheduled_time}</span>
                              </div>

                              <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span className="truncate">{booking.location}</span>
                              </div>

                              <div className="flex items-center gap-2 text-muted-foreground">
                                <User className="h-4 w-4" />
                                <span className="truncate">
                                  {booking.customer?.full_name || 'Unknown Customer'}
                                </span>
                              </div>
                            </div>

                            {/* Provider Info */}
                            {booking.provider && (
                              <div className="flex items-center gap-2 p-2 bg-muted/50 rounded text-sm">
                                <User className="h-4 w-4 text-muted-foreground" />
                                <span className="font-medium">Provider:</span>
                                <span>{booking.provider.full_name || 'Unknown Provider'}</span>
                              </div>
                            )}

                            {/* Description */}
                            {booking.description && (
                              <p className="text-sm text-muted-foreground">
                                {booking.description}
                              </p>
                            )}
                          </div>

                          {/* Action Button */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openDetailsDialog(booking)}
                          >
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Details Dialog */}
      <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Booking Details</DialogTitle>
            <DialogDescription>
              Complete information about this booking
            </DialogDescription>
          </DialogHeader>

          {selectedBooking && (
            <div className="space-y-4">
              {/* Status */}
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Status</h3>
                <Badge className={getStatusColor(selectedBooking.status)}>
                  {selectedBooking.status.replace('_', ' ')}
                </Badge>
              </div>

              {/* Service Info */}
              <div className="space-y-2">
                <h3 className="font-semibold">Service Information</h3>
                <div className="p-4 bg-muted rounded-lg space-y-2 text-sm">
                  <div><strong>Service Type:</strong> {selectedBooking.service_type}</div>
                  <div><strong>Date:</strong> {new Date(selectedBooking.scheduled_date).toLocaleDateString()}</div>
                  <div><strong>Time:</strong> {selectedBooking.scheduled_time}</div>
                  <div><strong>Location:</strong> {selectedBooking.location}</div>
                  {selectedBooking.total_amount && (
                    <div><strong>Amount:</strong> ${selectedBooking.total_amount.toFixed(2)}</div>
                  )}
                  {selectedBooking.description && (
                    <div><strong>Description:</strong> {selectedBooking.description}</div>
                  )}
                </div>
              </div>

              {/* Customer Info */}
              {selectedBooking.customer && (
                <div className="space-y-2">
                  <h3 className="font-semibold">Customer Details</h3>
                  <div className="p-4 bg-muted rounded-lg space-y-2 text-sm">
                    <div><strong>Name:</strong> {selectedBooking.customer.full_name || 'N/A'}</div>
                    <div><strong>Email:</strong> {selectedBooking.customer.email}</div>
                    {selectedBooking.customer.phone && (
                      <div><strong>Phone:</strong> {selectedBooking.customer.phone}</div>
                    )}
                  </div>
                </div>
              )}

              {/* Provider Info */}
              {selectedBooking.provider && (
                <div className="space-y-2">
                  <h3 className="font-semibold">Provider Details</h3>
                  <div className="p-4 bg-muted rounded-lg space-y-2 text-sm">
                    <div><strong>Name:</strong> {selectedBooking.provider.full_name || 'N/A'}</div>
                    <div><strong>Email:</strong> {selectedBooking.provider.email}</div>
                    {selectedBooking.provider.phone && (
                      <div><strong>Phone:</strong> {selectedBooking.provider.phone}</div>
                    )}
                  </div>
                </div>
              )}

              {/* Timestamps */}
              <div className="space-y-2">
                <h3 className="font-semibold">Booking History</h3>
                <div className="p-4 bg-muted rounded-lg space-y-2 text-sm">
                  <div><strong>Created:</strong> {new Date(selectedBooking.created_at).toLocaleString()}</div>
                  <div><strong>Booking ID:</strong> {selectedBooking.id}</div>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowDetailsDialog(false);
                setSelectedBooking(null);
              }}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
