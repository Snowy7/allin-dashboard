import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Users, Wrench, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                AllIn
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-500/20">
            <Star className="w-4 h-4" />
            <span>Coming Soon - Be the First to Experience AllIn</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your All-in-One
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent"> Handyman </span>
            Service App
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find trusted handyman professionals instantly. Book services, track progress, and manage everything from your phone.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8">
              Download App
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Become a Provider
            </Button>
          </div>
        </div>

        {/* Coming Soon Banner */}
        <div className="max-w-3xl mx-auto mt-16">
          <Card className="border-2 border-orange-500/20 shadow-xl bg-gradient-to-br from-orange-500/5 to-transparent">
            <CardContent className="pt-8 pb-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-4">
                  <Wrench className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Join the Waitlist
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Be among the first to experience the future of handyman services. Get early access when we launch.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose AllIn?
            </h2>
            <p className="text-xl text-muted-foreground">
              Whether you need help or want to offer your services, AllIn makes it simple and secure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-orange-500/50 transition-colors bg-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
            {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Join our waitlist and be the first to experience the future of handyman services
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 shadow-lg">
              Join Waitlist
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                  AllIn
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                The complete platform for managing handyman services. Connect with verified professionals and grow your business.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-orange-500/10 flex items-center justify-center transition-colors group">
                  <span className="text-muted-foreground group-hover:text-orange-600">𝕏</span>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-orange-500/10 flex items-center justify-center transition-colors group">
                  <span className="text-muted-foreground group-hover:text-orange-600">in</span>
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-orange-500/10 flex items-center justify-center transition-colors group">
                  <span className="text-muted-foreground group-hover:text-orange-600">f</span>
                </Link>
              </div>
            </div>
            
            {/* Product */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#features" className="text-muted-foreground hover:text-orange-600 transition-colors">Features</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-orange-600 transition-colors">Download App</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-orange-600 transition-colors">Become a Provider</Link></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-orange-600 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-orange-600 transition-colors">Contact</Link></li>
                <li><Link href="/careers" className="text-muted-foreground hover:text-orange-600 transition-colors">Careers</Link></li>
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/privacy" className="text-muted-foreground hover:text-orange-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-orange-600 transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-muted-foreground hover:text-orange-600 transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} AllIn. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>All Systems Operational</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: Shield,
    title: "Verified Professionals",
    description: "All service providers are thoroughly vetted and verified for your safety.",
  },
  {
    icon: CheckCircle,
    title: "Easy Booking",
    description: "Book services in seconds with our intuitive mobile interface.",
  },
  {
    icon: Star,
    title: "Real Reviews",
    description: "Read authentic reviews from real customers to make informed decisions.",
  },
  {
    icon: Wrench,
    title: "Multiple Services",
    description: "Plumbing, electrical, carpentry, painting, and more - all in one app.",
  },
  {
    icon: Users,
    title: "Become a Provider",
    description: "Join our network and grow your handyman business with AllIn.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Safe and secure payment processing with buyer protection.",
  },
]
