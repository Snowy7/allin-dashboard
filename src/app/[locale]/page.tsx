import Link from 'next/link'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Flower2,
  Gift,
  Leaf,
  Palette,
  ShieldCheck,
  Sparkles,
  Truck,
  MessageSquare,
  Smartphone,
  Cake,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

type PageProps = {
  params: { locale: string }
}

const FEATURE_ICONS = {
  catalog: Sparkles,
  tracking: Truck,
  chat: MessageSquare,
  payments: ShieldCheck,
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'ar' ? 'ar_QA' : 'en_US',
      url: `https://www.happycakesweet.com/${locale}`,
      siteName: 'Happy Sweet Cake',
      images: [
        {
          url: 'https://www.happycakesweet.com/og-image.jpg', // Placeholder, user should add this
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['https://www.happycakesweet.com/og-image.jpg'],
    },
  }
}

export default function HomePage({ params }: PageProps) {
  const t = useTranslations()
  const locale = params?.locale ?? 'en'

  const stats = [
    { value: '120+', label: t('Landing.stats.vendors') },
    { value: '3h', label: t('Landing.stats.deliveries') },
    { value: '4500+', label: t('Landing.stats.events') },
  ]

  const storyCards = [
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: t('Landing.immersiveCards.desserts.title'),
      description: t('Landing.immersiveCards.desserts.description'),
    },
    {
      icon: <Leaf className="h-5 w-5" />,
      title: t('Landing.immersiveCards.flowers.title'),
      description: t('Landing.immersiveCards.flowers.description'),
    },
    {
      icon: <Gift className="h-5 w-5" />,
      title: t('Landing.immersiveCards.events.title'),
      description: t('Landing.immersiveCards.events.description'),
    },
  ]

  const collections = [
    {
      title: t('Landing.collections.majlis.title'),
      description: t('Landing.collections.majlis.description'),
    },
    {
      title: t('Landing.collections.garden.title'),
      description: t('Landing.collections.garden.description'),
    },
    {
      title: t('Landing.collections.corporate.title'),
      description: t('Landing.collections.corporate.description'),
    },
  ]

  const serviceCards = [
    { key: 'sweets', icon: Gift, bullets: ['1', '2', '3', '4'] },
    { key: 'flowers', icon: Flower2, bullets: ['1', '2', '3', '4'] },
    { key: 'events', icon: Calendar, bullets: ['1', '2', '3', '4'] },
    { key: 'commerce', icon: ArrowUpRight, bullets: ['1', '2', '3', '4'] },
  ] as const

  const appFeatures = ['catalog', 'tracking', 'chat', 'payments'] as const

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Happy Sweet Cake',
    url: 'https://www.happycakesweet.com',
    logo: 'https://www.happycakesweet.com/icon.png',
    description: t('Metadata.description'),
    sameAs: [
      'https://www.instagram.com/happysweetcake',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+974 5555 1234',
      contactType: 'customer service',
      areaServed: 'QA',
      availableLanguage: ['en', 'ar']
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main>
        <section className="section-gradient relative overflow-hidden py-28 md:py-36 h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground shadow-sm animate-fade-in">
                <Sparkles className="h-4 w-4 text-primary" />
                {t('Landing.tagline')}
              </div>
              <h1 className="mt-8 text-5xl font-extrabold leading-tight text-foreground sm:text-6xl md:text-7xl animate-slide-up">
                {t('Landing.title')}
              </h1>
              <p className="mt-6 text-xl text-muted-foreground sm:text-2xl max-w-2xl mx-auto animate-slide-up delay-100">
                {t('Landing.subtitle')}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center animate-slide-up delay-200">
                <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1" asChild>
                  <Link href={`/${locale}/services`}>
                    {t('Landing.ctaPrimary')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base rounded-full border-2 hover:bg-muted/50"
                  asChild
                >
                  <Link href={`/${locale}/contact`}>{t('Landing.ctaSecondary')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4 text-center md:mx-auto mb-16">
              <p className="text-sm font-bold uppercase tracking-wider text-primary">
                {t('Landing.immersiveTitle')}
              </p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                {t('Landing.immersiveSubtitle')}
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {storyCards.map((item) => (
                <Card key={item.title} className="glass-card border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="space-y-6 pt-8">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 sm:py-28 bg-muted/5 border-y border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-center md:mx-auto mb-16">
              <p className="text-sm font-bold uppercase tracking-wider text-primary">
                {t('Services.title')}
              </p>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                {t('Services.description')}
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {serviceCards.map((service) => (
                <Card
                  key={service.key}
                  className="flex flex-col border border-border/50 bg-background shadow-sm hover:shadow-md transition-all"
                >
                  <CardContent className="flex flex-1 flex-col gap-6 pt-8">
                    <div className="flex items-start justify-between">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                        <ArrowUpRight className="h-5 w-5" />
                      </Button>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">
                        {t(`Services.cards.${service.key}.title`)}
                      </h3>
                      <p className="mt-3 text-muted-foreground">
                        {t(`Services.cards.${service.key}.description`)}
                      </p>
                    </div>
                    <ul className="space-y-3 mt-auto">
                      {service.bullets.map((bulletKey) => (
                        <li key={bulletKey} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>
                            {t(
                              `Services.cards.${service.key}.bullets.${bulletKey}`,
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-center md:mx-auto mb-16">
              <p className="text-sm font-bold uppercase tracking-wider text-primary">
                {t('Landing.collectionsTitle')}
              </p>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                {t('Landing.collectionsSubtitle')}
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {collections.map((item) => (
                <Card
                  key={item.title}
                  className="group overflow-hidden border border-border/50 bg-background hover:border-primary/50 transition-all"
                >
                  <div className="h-2 bg-gradient-to-r from-primary to-accent" />
                  <CardContent className="space-y-4 pt-8">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <div className="pt-4">
                      <Button variant="link" className="p-0 text-primary group-hover:translate-x-1 transition-transform" asChild>
                        <Link href={`/${locale}/services`}>
                          {t('Landing.ctaPrimary')}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t-2 border-border py-20 sm:py-28 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary mb-6">
                    {t('App.badge')}
                  </div>
                  <h2 className="text-4xl font-bold text-foreground sm:text-5xl mb-6">
                    {t('App.title')}
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {t('App.description')}
                  </p>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2">
                  {appFeatures.map((feature) => {
                    const Icon = FEATURE_ICONS[feature]
                    return (
                      <div key={feature} className="flex gap-4 p-4 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card transition-colors">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-bold text-foreground">
                            {t(`App.features.${feature}.title`)}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {t(`App.features.${feature}.description`)}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row pt-4">
                  <Button size="lg" className="rounded-full px-8 shadow-lg" asChild>
                    <Link href={`/${locale}/app`}>{t('App.primaryCta')}</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-2" asChild>
                    <Link href={`/${locale}/app`}>{t('App.learnMore')}</Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-4">
                  {t('App.comingSoon')}
                </p>
              </div>

              <div className="relative lg:h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl rounded-full" />
                <div className="relative w-full max-w-md aspect-[9/19] bg-foreground rounded-[3rem] border-[8px] border-foreground shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-foreground rounded-b-3xl z-20" />
                  <div className="w-full h-full bg-background flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                    <div className="relative z-10">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-3xl mx-auto mb-8 shadow-xl flex items-center justify-center">
                        <Cake className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">All In</h3>
                      <p className="text-muted-foreground">Your concierge for celebrations</p>
                      
                      <div className="mt-12 space-y-4 w-full max-w-[200px] mx-auto opacity-50">
                        <div className="h-2 bg-muted rounded-full w-full" />
                        <div className="h-2 bg-muted rounded-full w-2/3 mx-auto" />
                        <div className="h-2 bg-muted rounded-full w-3/4 mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 bg-card py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <Cake className="h-4 w-4" />
            </div>
            <span className="text-lg font-bold">Happy Sweet Cake</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            {t('Footer.tagline')}
          </p>
          <p className="text-xs text-muted-foreground/60">
            {t('Footer.rights')}
          </p>
        </div>
      </footer>
    </div>
  )
}
