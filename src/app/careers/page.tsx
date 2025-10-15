import Link from "next/link"
import { ArrowLeft, Wrench, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent } from "@/components/ui/card"

export default function CareersPage() {
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
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-500/10 mb-8">
            <Briefcase className="w-10 h-10 text-orange-600" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">Careers at AllIn</h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            We're building something special in the home services industry. While we don't have any open positions at the moment, we're always interested in connecting with talented individuals.
          </p>

          <Card className="border-2 border-border bg-card shadow-lg">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                No Open Positions Currently
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                We're not actively hiring right now, but we're always building our network of talented professionals. If you're interested in future opportunities, we'd love to hear from you.
              </p>
              <div className="bg-muted/50 border border-border rounded-lg p-6 max-w-md mx-auto">
                <p className="text-foreground mb-2">
                  <strong>Get in Touch</strong>
                </p>
                <a href="mailto:careers@allin.com" className="text-orange-600 hover:text-orange-700 font-medium">
                  careers@allin.com
                </a>
                <p className="text-sm text-muted-foreground mt-4">
                  Send us your resume and tell us about yourself. We'll keep you in mind for future openings.
                </p>
              </div>
            </CardContent>
          </Card>
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
