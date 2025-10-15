import Link from "next/link"
import { ArrowLeft, Wrench, Target, Users, Heart, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
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
          <h1 className="text-5xl font-bold text-foreground mb-6">About AllIn</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're on a mission to revolutionize how people connect with trusted handyman professionals. Making home services simple, reliable, and accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border-2">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To create a seamless platform that connects homeowners with skilled, verified handyman professionals, making home maintenance and repairs stress-free and reliable.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted and convenient platform for home services across the country, empowering both customers and service providers to thrive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Our Story</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              AllIn was born from a simple frustration: finding reliable handyman services shouldn't be so difficult. In 2024, our founders experienced firsthand the challenges of connecting with trustworthy professionals for home repairs and maintenance.
            </p>
            <p>
              We realized that both homeowners and skilled handymen were struggling with the same problem from different sides. Homeowners couldn't easily find verified professionals they could trust, while talented handymen lacked a platform to showcase their skills and grow their business.
            </p>
            <p>
              That's when we decided to build AllIn - a platform that puts trust, quality, and convenience at its core. By implementing thorough verification processes, transparent pricing, and real customer reviews, we're creating a community where both customers and service providers can thrive.
            </p>
            <p>
              Today, we're proud to be building a platform that's helping thousands of people maintain their homes while supporting skilled professionals in growing their businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Trust & Safety</h3>
                <p className="text-muted-foreground">
                  Every provider is thoroughly verified to ensure the highest standards of quality and security.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Community First</h3>
                <p className="text-muted-foreground">
                  We believe in building strong relationships between customers and service providers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We're committed to providing exceptional service quality and customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Community</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you need help or want to offer your services, AllIn is here for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              Download App
            </Button>
            <Button size="lg" variant="outline">
              Become a Provider
            </Button>
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
