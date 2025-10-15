import Link from "next/link"
import { ArrowLeft, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-orange dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to AllIn ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground mb-3">Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Register for an account</li>
              <li>Book a service</li>
              <li>Apply to become a service provider</li>
              <li>Contact our support team</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This information may include: name, email address, phone number, physical address, payment information, profile picture, government-issued ID (for providers), professional licenses and certifications (for providers).
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Location Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              We collect location data to connect you with nearby service providers and to facilitate service delivery. You can control location permissions through your device settings.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Usage Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              We automatically collect information about your interactions with the app, including: device information, IP address, browser type, pages visited, features used, and timestamps.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Process bookings and transactions</li>
              <li>Verify provider credentials and ensure platform safety</li>
              <li>Send you service-related notifications and updates</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our services and develop new features</li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Service Providers:</strong> When you book a service, we share necessary information with the provider</li>
              <li><strong>Business Partners:</strong> Payment processors and other service providers who assist our operations</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, please contact us at privacy@allin.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. Significant changes will be communicated through the app or via email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-muted/50 border border-border rounded-lg p-6 space-y-2">
              <p className="text-foreground"><strong>Email:</strong> privacy@allin.com</p>
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
