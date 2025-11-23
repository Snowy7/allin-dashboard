"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCheck, Calendar, DollarSign, TrendingUp, TrendingDown, AlertCircle, RefreshCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"

// Theme colors matching global variables
const COLORS = ["#FF6B35", "#004E89", "#F7B801", "#10b981", "#8b5cf6"]

export default function DashboardPage() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any>(null)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  useEffect(() => {
    fetchDashboardData()
  }, [])

  async function fetchDashboardData() {
    setLoading(true)
    try {
      const response = await fetch('/api/dashboard/stats')
      const result = await response.json()
      setData(result)
      setLastUpdated(new Date())
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading && !data) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!data && !loading) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Failed to load dashboard data</p>
        <Button onClick={fetchDashboardData} className="mt-4">Try Again</Button>
      </div>
    )
  }

  const { stats, revenue, bookings, categories, activity } = data

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening with your platform.</p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={fetchDashboardData} 
          disabled={loading}
          className="gap-2"
        >
          <RefreshCcw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-card border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.totalUsers.toLocaleString()}</div>
            <p className={`text-xs flex items-center mt-1 ${stats.userGrowth >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {stats.userGrowth >= 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
              <span>{stats.userGrowth >= 0 ? '+' : ''}{stats.userGrowth.toFixed(1)}% from last month</span>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Providers</CardTitle>
            <UserCheck className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.totalProviders.toLocaleString()}</div>
            <p className={`text-xs flex items-center mt-1 ${stats.providerGrowth >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {stats.providerGrowth >= 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
              <span>{stats.providerGrowth >= 0 ? '+' : ''}{stats.providerGrowth.toFixed(1)}% from last month</span>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.totalBookings.toLocaleString()}</div>
            <p className={`text-xs flex items-center mt-1 ${stats.bookingGrowth >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {stats.bookingGrowth >= 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
              <span>{stats.bookingGrowth >= 0 ? '+' : ''}{stats.bookingGrowth.toFixed(1)}% from last month</span>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border/60 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">${stats.totalRevenue.toLocaleString()}</div>
            <p className={`text-xs flex items-center mt-1 ${stats.revenueGrowth >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {stats.revenueGrowth >= 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
              <span>{stats.revenueGrowth >= 0 ? '+' : ''}{stats.revenueGrowth.toFixed(1)}% from last month</span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Pending Verifications Alert */}
      {stats.pendingVerifications > 0 && (
        <Card className="bg-orange-50/50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <AlertCircle className="h-6 w-6 text-primary" />
              <div className="flex-1">
                <p className="font-medium text-foreground">
                  {stats.pendingVerifications} Provider Verification{stats.pendingVerifications > 1 ? 's' : ''} Pending
                </p>
                <p className="text-sm text-muted-foreground">
                  Review and approve provider applications to add them to the platform.
                </p>
              </div>
              <Link 
                href="/dashboard/verifications"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Review Now
              </Link>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card className="bg-card border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-foreground">Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenue}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
                <XAxis dataKey="month" className="text-muted-foreground text-xs" />
                <YAxis className="text-muted-foreground text-xs" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: 'var(--radius)' }}
                  itemStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bookings Chart */}
        <Card className="bg-card border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-foreground">Weekly Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={bookings}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
                <XAxis dataKey="day" className="text-muted-foreground text-xs" />
                <YAxis className="text-muted-foreground text-xs" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: 'var(--radius)' }}
                  itemStyle={{ color: 'hsl(var(--foreground))' }}
                  cursor={{ fill: 'hsl(var(--muted)/0.2)' }}
                />
                <Bar dataKey="bookings" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card className="bg-card border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-foreground">Service Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categories.map((_entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: 'var(--radius)' }}
                  itemStyle={{ color: 'hsl(var(--foreground))' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-card border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activity.map((item: any, index: number) => {
                const colorMap: any = {
                  booking: item.status === 'completed' ? 'bg-green-500' : 'bg-secondary',
                  verification: item.status === 'approved' ? 'bg-primary' : 'bg-accent',
                  user: 'bg-secondary',
                }
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-2 h-2 mt-2 rounded-full ${colorMap[item.type] || 'bg-gray-500'}`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{formatDistanceToNow(new Date(item.time), { addSuffix: true })}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
