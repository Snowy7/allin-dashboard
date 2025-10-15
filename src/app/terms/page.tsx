import Link from "next/link"
import { ArrowLeft, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                AllIn
              </span>
            </Link>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-orange dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using the AllIn mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              AllIn is a platform that connects customers with verified handyman service providers. We facilitate bookings, payments, and communication between customers and providers, but we are not a party to the actual service agreement between them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">User Accounts</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Registration</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To use certain features of the App, you must register for an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Account Termination</h3>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to suspend or terminate your account at any time for violations of these Terms or for any other reason at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">For Customers</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Booking Services</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you book a service through AllIn:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>You enter into a direct agreement with the service provider</li>
              <li>You agree to pay the agreed-upon price for services</li>
              <li>You must provide accurate service location and requirements</li>
              <li>You agree to be present or available during the scheduled service</li>
              <li>You must treat providers with respect and professionalism</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Cancellations and Refunds</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cancellation policies vary by service and provider. Please review the specific cancellation policy before booking. Refunds are subject to our refund policy and provider agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">For Service Providers</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Provider Requirements</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To become a service provider on AllIn, you must:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Be at least 18 years old</li>
              <li>Provide valid government-issued identification</li>
              <li>Submit relevant professional licenses and certifications</li>
              <li>Pass our background check and verification process</li>
              <li>Maintain appropriate insurance coverage</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Service Standards</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a provider, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide services professionally and competently</li>
              <li>Arrive on time for scheduled appointments</li>
              <li>Communicate clearly with customers</li>
              <li>Complete services as described</li>
              <li>Maintain a professional appearance and conduct</li>
              <li>Report any issues or concerns immediately</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Fees and Payments</h3>
            <p className="text-muted-foreground leading-relaxed">
              AllIn charges a service fee for each completed booking. Fees are deducted from your earnings and paid to you according to our payment schedule. You are responsible for all taxes on your earnings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Payments and Fees</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All payments are processed securely through our payment partners. By using the App, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Pay all fees and charges associated with your bookings</li>
              <li>Provide valid payment information</li>
              <li>Authorize us to charge your payment method</li>
              <li>Pay any applicable taxes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Prohibited Conduct</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Attempt to circumvent our payment system</li>
              <li>Post false or misleading information</li>
              <li>Use the App for any illegal purpose</li>
              <li>Attempt to gain unauthorized access to the App</li>
              <li>Interfere with the proper functioning of the App</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Liability and Disclaimers</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Platform Role</h3>
            <p className="text-muted-foreground leading-relaxed">
              AllIn is a platform that connects customers with service providers. We do not employ providers and are not responsible for their actions, services, or the quality of work performed. We do not guarantee the availability, reliability, or quality of any services.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Limitation of Liability</h3>
            <p className="text-muted-foreground leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, ALLIN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising from these Terms or your use of the App will be resolved through binding arbitration, except where prohibited by law. You waive your right to participate in class action lawsuits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material changes through the App or via email. Your continued use of the App after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content, features, and functionality of the App are owned by AllIn and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <div className="bg-muted/50 border border-border rounded-lg p-6 space-y-2">
              <p className="text-foreground"><strong>Email:</strong> legal@allin.com</p>
              <p className="text-foreground"><strong>Address:</strong> AllIn Inc., 123 Service Street, Tech City, TC 12345</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AllIn. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
