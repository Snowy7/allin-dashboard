import { useTranslations } from 'next-intl'
import { MessageSquare, ShieldCheck, Sparkles, Smartphone, Truck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const FEATURE_ICONS = {
  catalog: Sparkles,
  tracking: Truck,
  chat: MessageSquare,
  payments: ShieldCheck,
}

export default function AppPage() {
  const t = useTranslations('App')
  const featureKeys = ['catalog', 'tracking', 'chat', 'payments'] as const

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="section-gradient border-b border-border/60 py-20">
          <div className="container mx-auto px-4 text-center md:max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              {t('badge')}
            </div>
            <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">{t('description')}</p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button>{t('primaryCta')}</Button>
              <Button variant="outline">{t('secondaryCta')}</Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{t('comingSoon')}</p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {featureKeys.map((key) => {
                const Icon = FEATURE_ICONS[key]
                return (
                  <Card key={key} className="border border-border/70 bg-card/90">
                    <CardContent className="flex gap-4 pt-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {t(`features.${key}.title`)}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {t(`features.${key}.description`)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
