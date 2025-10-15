"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Palette, 
  Database,
  Mail,
  DollarSign,
  Users,
  Save,
  RefreshCw
} from "lucide-react";

export default function SettingsPage() {
  const [saving, setSaving] = useState(false);

  // Platform Settings
  const [platformName, setPlatformName] = useState("AllIn Handyman");
  const [platformEmail, setPlatformEmail] = useState("admin@allin.com");
  const [supportEmail, setSupportEmail] = useState("support@allin.com");
  const [platformDescription, setPlatformDescription] = useState(
    "Your trusted platform for finding skilled handyman services."
  );

  // Commission Settings
  const [commissionRate, setCommissionRate] = useState("15");
  const [minBookingAmount, setMinBookingAmount] = useState("25");
  const [cancellationFee, setCancellationFee] = useState("10");

  // Notification Settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  const handleSaveSettings = async (section: string) => {
    setSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    alert(`${section} settings saved successfully!`);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage platform configuration and preferences</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">
            <SettingsIcon className="h-4 w-4 mr-2" />
            General
          </TabsTrigger>
          <TabsTrigger value="financial">
            <DollarSign className="h-4 w-4 mr-2" />
            Financial
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <Palette className="h-4 w-4 mr-2" />
            Appearance
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Basic platform configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="platform-name">Platform Name</Label>
                <Input
                  id="platform-name"
                  value={platformName}
                  onChange={(e) => setPlatformName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="platform-email">Platform Email</Label>
                <Input
                  id="platform-email"
                  type="email"
                  value={platformEmail}
                  onChange={(e) => setPlatformEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="support-email">Support Email</Label>
                <Input
                  id="support-email"
                  type="email"
                  value={supportEmail}
                  onChange={(e) => setSupportEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Platform Description</Label>
                <Textarea
                  id="description"
                  value={platformDescription}
                  onChange={(e) => setPlatformDescription(e.target.value)}
                  rows={4}
                />
              </div>

              <Button onClick={() => handleSaveSettings("General")} disabled={saving}>
                <Save className="h-4 w-4 mr-2" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Financial Settings */}
        <TabsContent value="financial">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Commission & Fees</CardTitle>
                <CardDescription>Configure platform revenue settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="commission">Platform Commission Rate (%)</Label>
                  <Input
                    id="commission"
                    type="number"
                    value={commissionRate}
                    onChange={(e) => setCommissionRate(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Percentage taken from each completed booking
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="min-booking">Minimum Booking Amount ($)</Label>
                  <Input
                    id="min-booking"
                    type="number"
                    value={minBookingAmount}
                    onChange={(e) => setMinBookingAmount(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Minimum amount required to create a booking
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cancellation-fee">Cancellation Fee ($)</Label>
                  <Input
                    id="cancellation-fee"
                    type="number"
                    value={cancellationFee}
                    onChange={(e) => setCancellationFee(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Fee charged for late cancellations
                  </p>
                </div>

                <Button onClick={() => handleSaveSettings("Financial")} disabled={saving}>
                  <Save className="h-4 w-4 mr-2" />
                  {saving ? "Saving..." : "Save Changes"}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Available payment options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                      </div>
                      <div>
                        <p className="font-medium">Credit/Debit Cards</p>
                        <p className="text-sm text-muted-foreground">Visa, Mastercard, Amex</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                      </div>
                      <div>
                        <p className="font-medium">Digital Wallets</p>
                        <p className="text-sm text-muted-foreground">PayPal, Apple Pay, Google Pay</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                      </div>
                      <div>
                        <p className="font-medium">Cash Payment</p>
                        <p className="text-sm text-muted-foreground">Pay on service completion</p>
                      </div>
                    </div>
                    <Badge variant="outline">Inactive</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                </div>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    emailNotifications ? "bg-orange-600" : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      emailNotifications ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive browser notifications</p>
                  </div>
                </div>
                <button
                  onClick={() => setPushNotifications(!pushNotifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    pushNotifications ? "bg-orange-600" : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      pushNotifications ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg opacity-50">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive text messages (Coming soon)</p>
                  </div>
                </div>
                <Badge variant="outline">Coming Soon</Badge>
              </div>

              <Button onClick={() => handleSaveSettings("Notification")} disabled={saving}>
                <Save className="h-4 w-4 mr-2" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Admin Account</CardTitle>
                <CardDescription>Manage administrator credentials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>

                <Button onClick={() => handleSaveSettings("Password")} disabled={saving}>
                  <Shield className="h-4 w-4 mr-2" />
                  Update Password
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>Add an extra layer of security</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg bg-muted/50">
                    <p className="text-sm">
                      Two-factor authentication adds an extra layer of security to your account. 
                      When enabled, you'll need to enter a code from your phone in addition to your password.
                    </p>
                  </div>
                  <Badge variant="outline">Coming Soon</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize the dashboard look and feel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Theme</Label>
                <div className="grid grid-cols-3 gap-4">
                  <button className="p-4 border-2 border-orange-600 rounded-lg bg-white dark:bg-gray-900">
                    <div className="space-y-2">
                      <div className="h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded"></div>
                      <p className="text-sm font-medium">Light</p>
                    </div>
                  </button>
                  <button className="p-4 border rounded-lg">
                    <div className="space-y-2">
                      <div className="h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded"></div>
                      <p className="text-sm font-medium">Dark</p>
                    </div>
                  </button>
                  <button className="p-4 border rounded-lg">
                    <div className="space-y-2">
                      <div className="h-20 bg-gradient-to-br from-gray-100 via-gray-800 to-gray-900 rounded"></div>
                      <p className="text-sm font-medium">System</p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Accent Color</Label>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-orange-600 border-2 border-white dark:border-gray-800 shadow-lg"></button>
                  <button className="w-10 h-10 rounded-full bg-blue-600"></button>
                  <button className="w-10 h-10 rounded-full bg-green-600"></button>
                  <button className="w-10 h-10 rounded-full bg-purple-600"></button>
                  <button className="w-10 h-10 rounded-full bg-red-600"></button>
                </div>
              </div>

              <Button onClick={() => handleSaveSettings("Appearance")} disabled={saving}>
                <Save className="h-4 w-4 mr-2" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Database Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Database Statistics
          </CardTitle>
          <CardDescription>Current database usage and health</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Total Records</p>
              <p className="text-2xl font-bold">12,458</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Storage Used</p>
              <p className="text-2xl font-bold">2.4 GB</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Active Connections</p>
              <p className="text-2xl font-bold">47</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Health Status</p>
              <Badge className="bg-green-500 mt-2">Healthy</Badge>
            </div>
          </div>
          <Button variant="outline" className="mt-4">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Stats
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
