import Link from "next/link"
import { ArrowLeft, Wrench, Mail, MapPin, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function ContactPage() {
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have questions or feedback? We'd love to hear from you. Our team is here to help!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-card hover:border-orange-500/50 transition-colors">
            <CardContent className="pt-8 text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <a href="mailto:support@allin.com" className="text-sm text-orange-600 hover:text-orange-700">
                support@allin.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card hover:border-orange-500/50 transition-colors">
            <CardContent className="pt-8 text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <a href="tel:+15551234567" className="text-sm text-orange-600 hover:text-orange-700">
                +1 (555) 123-4567
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card hover:border-orange-500/50 transition-colors">
            <CardContent className="pt-8 text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground">
                123 Service St<br />Tech City, TC 12345
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:border-orange-500/50 transition-colors">
            <CardContent className="pt-8 text-center">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MessageSquare className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground">
                Coming Soon
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-2">
              <CardContent className="pt-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Quick Answers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-2">For Customers</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• How to book a service</li>
                  <li>• Payment and pricing</li>
                  <li>• Cancellation policy</li>
                  <li>• Safety and verification</li>
                </ul>
                <Button variant="link" className="text-orange-600 p-0 mt-3">
                  View Customer FAQ →
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-2">For Providers</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• How to apply</li>
                  <li>• Verification process</li>
                  <li>• Earnings and fees</li>
                  <li>• Managing bookings</li>
                </ul>
                <Button variant="link" className="text-orange-600 p-0 mt-3">
                  View Provider FAQ →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Support Hours</h3>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-right text-muted-foreground">Monday - Friday:</div>
                <div className="text-left text-foreground font-medium">9:00 AM - 6:00 PM</div>
                <div className="text-right text-muted-foreground">Saturday:</div>
                <div className="text-left text-foreground font-medium">10:00 AM - 4:00 PM</div>
                <div className="text-right text-muted-foreground">Sunday:</div>
                <div className="text-left text-foreground font-medium">Closed</div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                All times in Eastern Time (ET). Response times may vary.
              </p>
            </div>
          </div>
        </div>
      </section>

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
