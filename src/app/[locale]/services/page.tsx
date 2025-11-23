'use client'
import { useTranslations } from 'next-intl'
import { Calendar, Flower2, Gift, Smartphone } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useRouter } from '@/i18n/routing'

export default function ServicesPage() {
  const t = useTranslations()

  const services = [
    { key: 'sweets', icon: Gift, bullets: ['1', '2', '3', '4'] },
    { key: 'flowers', icon: Flower2, bullets: ['1', '2', '3', '4'] },
    { key: 'events', icon: Calendar, bullets: ['1', '2', '3', '4'] },
    { key: 'commerce', icon: Smartphone, bullets: ['1', '2', '3', '4'] },
  ] as const

  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="section-gradient border-b border-border/60 py-20">
          <div className="container mx-auto px-4 text-center md:max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {t('Landing.tagline')}
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
              {t('Services.title')}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {t('Services.description')}
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service) => (
                <Card
                  key={service.key}
                  className="flex flex-col border border-border/70 bg-card/90 shadow-sm"
                >
                  <CardContent className="flex flex-1 flex-col gap-4 pt-6">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-foreground">
                        {t(`Services.cards.${service.key}.title`)}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {t(`Services.cards.${service.key}.description`)}
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>
                            {t(`Services.cards.${service.key}.bullets.${bullet}`)}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="mt-4 self-start"
                      variant="outline"
                      asChild
                      onClick={() => {
                        router.push('/contact')
                      }}
                    >
                      <a href="#contact">{t('Landing.ctaSecondary')}</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
