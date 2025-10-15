"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Users, UserCheck, UserX, Shield, Search } from "lucide-react";

interface User {
  id: string;
  full_name: string | null;
  email: string;
  phone: string | null;
  role: string;
  status: string;
  address: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [actionType, setActionType] = useState<'activate' | 'suspend' | null>(null);
  const [adminNotes, setAdminNotes] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [activeTab]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const roleParam = activeTab === "all" ? "" : `?role=${activeTab}`;
      const response = await fetch(`/api/users${roleParam}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      
      const data = await response.json();
      setUsers(data.users || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUserAction = async () => {
    if (!selectedUser || !actionType) return;

    try {
      setProcessing(true);
      const newStatus = actionType === 'activate' ? 'active' : 'suspended';
      
      const response = await fetch(`/api/users/${selectedUser.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: newStatus,
          admin_notes: adminNotes,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      // Refresh users list
      await fetchUsers();
      
      // Close dialog
      setShowDialog(false);
      setSelectedUser(null);
      setAdminNotes("");
      setActionType(null);
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user status");
    } finally {
      setProcessing(false);
    }
  };

  const openActionDialog = (user: User, action: 'activate' | 'suspend') => {
    setSelectedUser(user);
    setActionType(action);
    setShowDialog(true);
  };

  const filteredUsers = users.filter(user => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      user.full_name?.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.phone?.toLowerCase().includes(query)
    );
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'suspended':
        return 'bg-red-500';
      case 'pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return <Badge className="bg-purple-500"><Shield className="w-3 h-3 mr-1" />Admin</Badge>;
      case 'provider':
        return <Badge className="bg-blue-500"><UserCheck className="w-3 h-3 mr-1" />Provider</Badge>;
      default:
        return <Badge variant="outline">Customer</Badge>;
    }
  };

  const stats = {
    total: users.length,
    customers: users.filter(u => u.role === 'customer').length,
    providers: users.filter(u => u.role === 'provider').length,
    admins: users.filter(u => u.role === 'admin').length,
    active: users.filter(u => u.status === 'active').length,
    suspended: users.filter(u => u.status === 'suspended').length,
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Users Management</h1>
        <p className="text-muted-foreground">Manage platform users and their accounts</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Customers</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.customers}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Providers</CardTitle>
            <UserCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.providers}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active</CardTitle>
            <UserCheck className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.active}</div>
            {stats.suspended > 0 && (
              <p className="text-xs text-red-500 mt-1">{stats.suspended} suspended</p>
            )}
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
              placeholder="Search by name, email, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-sm"
            />
          </div>
        </CardHeader>
      </Card>

      {/* Users List */}
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>View and manage user accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
              <TabsTrigger value="customer">Customers ({stats.customers})</TabsTrigger>
              <TabsTrigger value="provider">Providers ({stats.providers})</TabsTrigger>
              <TabsTrigger value="admin">Admins ({stats.admins})</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-6">
              {loading ? (
                <div className="text-center py-8">Loading users...</div>
              ) : filteredUsers.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No users found
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredUsers.map((user) => (
                    <Card key={user.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            {/* Avatar */}
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-semibold">
                              {user.full_name?.charAt(0) || user.email.charAt(0).toUpperCase()}
                            </div>

                            {/* User Info */}
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">
                                  {user.full_name || 'Unnamed User'}
                                </h3>
                                {getRoleBadge(user.role)}
                                <Badge className={getStatusColor(user.status)}>
                                  {user.status}
                                </Badge>
                              </div>

                              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <div>
                                  <span className="font-medium">Email:</span> {user.email}
                                </div>
                                {user.phone && (
                                  <div>
                                    <span className="font-medium">Phone:</span> {user.phone}
                                  </div>
                                )}
                                {user.address && (
                                  <div className="col-span-2">
                                    <span className="font-medium">Address:</span> {user.address}
                                  </div>
                                )}
                                <div>
                                  <span className="font-medium">Joined:</span>{' '}
                                  {new Date(user.created_at).toLocaleDateString()}
                                </div>
                                <div>
                                  <span className="font-medium">Last Updated:</span>{' '}
                                  {new Date(user.updated_at).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex gap-2">
                            {user.status === 'active' ? (
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => openActionDialog(user, 'suspend')}
                              >
                                <UserX className="w-4 h-4 mr-1" />
                                Suspend
                              </Button>
                            ) : (
                              <Button
                                variant="default"
                                size="sm"
                                onClick={() => openActionDialog(user, 'activate')}
                              >
                                <UserCheck className="w-4 h-4 mr-1" />
                                Activate
                              </Button>
                            )}
                          </div>
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

      {/* Action Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {actionType === 'activate' ? 'Activate User' : 'Suspend User'}
            </DialogTitle>
            <DialogDescription>
              {actionType === 'activate' 
                ? 'This will restore the user\'s access to the platform.'
                : 'This will temporarily disable the user\'s access to the platform.'}
            </DialogDescription>
          </DialogHeader>

          {selectedUser && (
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg space-y-2">
                <div><strong>Name:</strong> {selectedUser.full_name || 'N/A'}</div>
                <div><strong>Email:</strong> {selectedUser.email}</div>
                <div><strong>Role:</strong> {selectedUser.role}</div>
                <div><strong>Current Status:</strong> {selectedUser.status}</div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Admin Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Add a note about this action..."
                  value={adminNotes}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAdminNotes(e.target.value)}
                  rows={3}
                />
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowDialog(false);
                setSelectedUser(null);
                setAdminNotes("");
                setActionType(null);
              }}
            >
              Cancel
            </Button>
            <Button
              variant={actionType === 'activate' ? 'default' : 'destructive'}
              onClick={handleUserAction}
              disabled={processing}
            >
              {processing ? 'Processing...' : (actionType === 'activate' ? 'Activate' : 'Suspend')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
