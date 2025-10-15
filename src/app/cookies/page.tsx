import Link from "next/link"
import { ArrowLeft, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CookiePolicyPage() {
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
        <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-orange dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website or use a mobile application. They are widely used to make websites and apps work more efficiently and provide information to the owners of the site or app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AllIn uses cookies and similar tracking technologies to enhance your experience and improve our services. We use cookies for the following purposes:
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-foreground mb-3">Essential Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These cookies are necessary for the app to function properly. They enable core functionality such as:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>User authentication and account access</li>
              <li>Security and fraud prevention</li>
              <li>Remembering your preferences and settings</li>
              <li>Enabling payment processing</li>
              <li>Load balancing and performance optimization</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Note:</strong> Essential cookies cannot be disabled as they are required for the app to work properly.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-foreground mb-3">Performance and Analytics Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These cookies help us understand how you use our app, allowing us to improve its performance and functionality. They collect information about:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Pages or screens you visit</li>
              <li>Features you use most frequently</li>
              <li>Error messages you encounter</li>
              <li>Time spent on different sections</li>
              <li>Device and browser information</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We use services like Google Analytics to process this information. The data is aggregated and anonymized.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-foreground mb-3">Functional Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These cookies enable enhanced functionality and personalization, such as:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Remembering your language preference</li>
              <li>Saving your location for nearby provider searches</li>
              <li>Remembering your previous searches</li>
              <li>Personalizing content based on your interests</li>
              <li>Saving items to your favorites or wishlist</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-foreground mb-3">Advertising and Targeting Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These cookies are used to deliver relevant advertisements and measure the effectiveness of marketing campaigns. They may:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Track your browsing behavior across different websites</li>
              <li>Build a profile of your interests</li>
              <li>Deliver targeted advertisements</li>
              <li>Measure ad performance and conversion rates</li>
              <li>Prevent you from seeing the same ad repeatedly</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We work with third-party advertising partners like Google Ads and Facebook Ads for this purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use services from trusted third-party providers who may also place cookies on your device. These include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Google Analytics:</strong> For analytics and performance monitoring</li>
              <li><strong>Stripe:</strong> For secure payment processing</li>
              <li><strong>Firebase:</strong> For push notifications and app analytics</li>
              <li><strong>Social Media Platforms:</strong> For social sharing and login features</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              These third parties have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have control over cookies and can manage your preferences in several ways:
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">In the App</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can manage cookie preferences through the app settings:
            </p>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li>Open the AllIn app</li>
              <li>Go to Settings → Privacy</li>
              <li>Select "Cookie Preferences"</li>
              <li>Toggle cookie categories on or off</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Device Settings</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most mobile devices allow you to control app tracking:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>iOS:</strong> Settings → Privacy & Security → Tracking</li>
              <li><strong>Android:</strong> Settings → Privacy → Ads → Opt out of Ads Personalization</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Browser Settings</h3>
            <p className="text-muted-foreground leading-relaxed">
              If accessing AllIn through a web browser, you can control cookies through your browser settings. Note that disabling certain cookies may affect functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookie Duration</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cookies can be either:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close the app or browser</li>
              <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period or until you delete them</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We use both types depending on the purpose. Persistent cookies typically expire after 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Do Not Track</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some browsers have a "Do Not Track" feature that signals to websites that you don't want to be tracked. Currently, there is no uniform standard for how companies should respond to Do Not Track signals. We do not currently respond to Do Not Track signals, but you can manage your cookie preferences as described above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any material changes through the app or via email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">More Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For more information about how we process your personal data, please see our <Link href="/privacy" className="text-orange-600 hover:text-orange-700">Privacy Policy</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact us:
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
