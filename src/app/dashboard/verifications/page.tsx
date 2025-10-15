"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, XCircle, Eye, Clock, User, MapPin, Briefcase, DollarSign, ExternalLink, Maximize2 } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface ProviderVerification {
  id: string
  user_id: string
  phone: string | null
  address: string | null
  city: string | null
  years_experience: number | null
  government_id_image_url: string | null
  professional_license_image_url: string | null
  field_of_work: string | null
  categories: string[]
  hourly_rate: number | null
  availability: any
  verification_status: 'pending' | 'under_review' | 'approved' | 'rejected'
  admin_notes: string | null
  reviewed_by: string | null
  reviewed_at: string | null
  created_at: string
  updated_at: string
  profile?: {
    id: string
    name: string | null
    phone: string | null
    rating: number | null
    created_at: string
  }
}

export default function VerificationsPage() {
  const [verifications, setVerifications] = useState<ProviderVerification[]>([])
  const [filteredVerifications, setFilteredVerifications] = useState<ProviderVerification[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('pending')
  const [selectedVerification, setSelectedVerification] = useState<ProviderVerification | null>(null)
  const [showDialog, setShowDialog] = useState(false)
  const [showDetailsDialog, setShowDetailsDialog] = useState(false)
  const [actionType, setActionType] = useState<'approve' | 'reject'>('approve')
  const [adminNotes, setAdminNotes] = useState('')
  const [processing, setProcessing] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  useEffect(() => {
    fetchVerifications()
  }, [])

  useEffect(() => {
    filterVerifications()
  }, [activeTab, verifications])

  async function fetchVerifications() {
    try {
      setLoading(true)
      const response = await fetch('/api/verifications')
      const data = await response.json()
      setVerifications(data)
    } catch (error) {
      console.error('Error fetching verifications:', error)
    } finally {
      setLoading(false)
    }
  }

  function filterVerifications() {
    const filtered = verifications.filter(v => {
      if (activeTab === 'all') return true
      return v.verification_status === activeTab
    })
    setFilteredVerifications(filtered)
  }

  function openReviewDialog(verification: ProviderVerification, action: 'approve' | 'reject') {
    setSelectedVerification(verification)
    setActionType(action)
    setAdminNotes('')
    setShowDialog(true)
  }

  function openDetailsDialog(verification: ProviderVerification) {
    setSelectedVerification(verification)
    setShowDetailsDialog(true)
  }

  async function handleReview() {
    if (!selectedVerification) return

    try {
      setProcessing(true)
      const response = await fetch(`/api/verifications/${selectedVerification.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: actionType === 'approve' ? 'approved' : 'rejected',
          adminId: 'admin-user-id', // TODO: Get from auth session
          adminNotes: adminNotes || undefined,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to update verification')
      }

      // Refresh verifications list
      await fetchVerifications()
      setShowDialog(false)
      setSelectedVerification(null)
    } catch (error) {
      console.error('Error updating verification:', error)
      alert('Failed to update verification. Please try again.')
    } finally {
      setProcessing(false)
    }
  }

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    under_review: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    approved: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    rejected: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  }

  const statusCounts = {
    all: verifications.length,
    pending: verifications.filter(v => v.verification_status === 'pending').length,
    under_review: verifications.filter(v => v.verification_status === 'under_review').length,
    approved: verifications.filter(v => v.verification_status === 'approved').length,
    rejected: verifications.filter(v => v.verification_status === 'rejected').length,
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Provider Verifications</h1>
        <p className="text-muted-foreground mt-1">Review and manage provider verification requests.</p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">
            All ({statusCounts.all})
          </TabsTrigger>
          <TabsTrigger value="pending">
            Pending ({statusCounts.pending})
          </TabsTrigger>
          <TabsTrigger value="under_review">
            Under Review ({statusCounts.under_review})
          </TabsTrigger>
          <TabsTrigger value="approved">
            Approved ({statusCounts.approved})
          </TabsTrigger>
          <TabsTrigger value="rejected">
            Rejected ({statusCounts.rejected})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {filteredVerifications.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No verifications found.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {filteredVerifications.map((verification) => (
                <Card key={verification.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                            <User className="h-6 w-6 text-orange-600 dark:text-orange-300" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground">
                              {verification.profile?.name || 'Unknown Provider'}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {verification.field_of_work || 'General Handyman'}
                            </p>
                          </div>
                          <Badge className={statusColors[verification.verification_status]}>
                            {verification.verification_status.replace('_', ' ')}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{verification.city || 'N/A'}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                            <span>{verification.years_experience || 0} years exp</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <span>${verification.hourly_rate || 0}/hr</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{formatDistanceToNow(new Date(verification.created_at), { addSuffix: true })}</span>
                          </div>
                        </div>

                        <div className="mt-4">
                          <p className="text-sm font-medium text-muted-foreground mb-2">Services:</p>
                          <div className="flex flex-wrap gap-2">
                            {verification.categories.map((category, index) => (
                              <Badge key={index} variant="outline">
                                {category}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {verification.admin_notes && (
                          <div className="mt-4 p-3 bg-muted rounded-lg">
                            <p className="text-sm font-medium mb-1">Admin Notes:</p>
                            <p className="text-sm text-muted-foreground">{verification.admin_notes}</p>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-2 ml-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openDetailsDialog(verification)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        {verification.verification_status === 'pending' && (
                          <>
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => openReviewDialog(verification, 'approve')}
                            >
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => openReviewDialog(verification, 'reject')}
                            >
                              <XCircle className="h-4 w-4 mr-2" />
                              Reject
                            </Button>
                          </>
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

      {/* Review Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {actionType === 'approve' ? 'Approve' : 'Reject'} Provider Verification
            </DialogTitle>
            <DialogDescription>
              {actionType === 'approve'
                ? 'Approving this verification will create a provider account and allow them to receive bookings.'
                : 'Rejecting this verification will prevent the user from becoming a provider.'}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <Label>Provider Name</Label>
              <p className="text-sm font-medium mt-1">{selectedVerification?.profile?.name || 'Unknown'}</p>
            </div>
            <div>
              <Label htmlFor="admin-notes">Admin Notes (Optional)</Label>
              <Textarea
                id="admin-notes"
                placeholder="Add any notes about this decision..."
                value={adminNotes}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAdminNotes(e.target.value)}
                rows={4}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDialog(false)} disabled={processing}>
              Cancel
            </Button>
            <Button
              onClick={handleReview}
              disabled={processing}
              className={actionType === 'approve' ? 'bg-green-600 hover:bg-green-700' : ''}
              variant={actionType === 'reject' ? 'destructive' : 'default'}
            >
              {processing ? 'Processing...' : actionType === 'approve' ? 'Approve' : 'Reject'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Details Dialog */}
      <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Provider Verification Details</DialogTitle>
            <DialogDescription>
              Complete information about this provider verification request
            </DialogDescription>
          </DialogHeader>

          {selectedVerification && (
            <div className="space-y-6 py-4">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Name</p>
                    <p className="text-sm">{selectedVerification.profile?.name || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone</p>
                    <p className="text-sm">{selectedVerification.phone || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">City</p>
                    <p className="text-sm">{selectedVerification.city || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                    <p className="text-sm">{selectedVerification.address || 'N/A'}</p>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Professional Information</h3>
                <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Field of Work</p>
                    <p className="text-sm">{selectedVerification.field_of_work || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Years of Experience</p>
                    <p className="text-sm">{selectedVerification.years_experience || 0} years</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Hourly Rate</p>
                    <p className="text-sm">${selectedVerification.hourly_rate || 0}/hour</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <Badge className={statusColors[selectedVerification.verification_status]}>
                      {selectedVerification.verification_status.replace('_', ' ')}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Services/Categories */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Service Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedVerification.categories.map((category, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Verification Documents</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Government ID</p>
                    {selectedVerification.government_id_image_url ? (
                      <div className="space-y-2">
                        <div className="relative group">
                          <img 
                            src={selectedVerification.government_id_image_url}
                            alt="Government ID"
                            className="w-full h-32 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setImagePreview(selectedVerification.government_id_image_url)}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-colors flex items-center justify-center">
                            <Maximize2 className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                        <a 
                          href={selectedVerification.government_id_image_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Open in new tab
                        </a>
                      </div>
                    ) : (
                      <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">Not uploaded</p>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Professional License</p>
                    {selectedVerification.professional_license_image_url ? (
                      <div className="space-y-2">
                        <div className="relative group">
                          <img 
                            src={selectedVerification.professional_license_image_url}
                            alt="Professional License"
                            className="w-full h-32 object-cover rounded-lg border cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setImagePreview(selectedVerification.professional_license_image_url)}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-colors flex items-center justify-center">
                            <Maximize2 className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                        <a 
                          href={selectedVerification.professional_license_image_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <ExternalLink className="h-3 w-3" />
                          Open in new tab
                        </a>
                      </div>
                    ) : (
                      <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
                        <p className="text-sm text-muted-foreground">Not uploaded</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Availability */}
              {selectedVerification.availability && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Availability</h3>
                  <div className="grid gap-2">
                    {Object.entries(selectedVerification.availability).map(([day, schedule]: [string, any]) => (
                      <div 
                        key={day} 
                        className={`flex items-center justify-between p-3 rounded-lg border ${
                          schedule.enabled 
                            ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900' 
                            : 'bg-muted border-muted'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${schedule.enabled ? 'bg-green-500' : 'bg-gray-400'}`} />
                          <span className="font-medium capitalize">{day}</span>
                        </div>
                        {schedule.enabled ? (
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{schedule.start} - {schedule.end}</span>
                          </div>
                        ) : (
                          <Badge variant="outline" className="text-xs">Unavailable</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Admin Notes */}
              {selectedVerification.admin_notes && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Admin Notes</h3>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm">{selectedVerification.admin_notes}</p>
                  </div>
                </div>
              )}

              {/* Review Information */}
              {selectedVerification.reviewed_at && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Review Information</h3>
                  <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Reviewed At</p>
                      <p className="text-sm">{new Date(selectedVerification.reviewed_at).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Submitted</p>
                      <p className="text-sm">{formatDistanceToNow(new Date(selectedVerification.created_at), { addSuffix: true })}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDetailsDialog(false)}>
              Close
            </Button>
            {selectedVerification?.verification_status === 'pending' && (
              <>
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    setShowDetailsDialog(false)
                    openReviewDialog(selectedVerification, 'approve')
                  }}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Approve
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    setShowDetailsDialog(false)
                    openReviewDialog(selectedVerification, 'reject')
                  }}
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Reject
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Image Preview Dialog */}
      <Dialog open={!!imagePreview} onOpenChange={() => setImagePreview(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] p-0">
          <div className="relative bg-black">
            <button
              onClick={() => setImagePreview(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <XCircle className="h-6 w-6" />
            </button>
            {imagePreview && (
              <img 
                src={imagePreview}
                alt="Document Preview"
                className="w-full h-full object-contain max-h-[90vh]"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
