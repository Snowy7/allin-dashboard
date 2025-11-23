import { useTranslations } from 'next-intl'
import { Mail, MapPin, Phone } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function ContactPage() {
  const t = useTranslations('ContactPage')

  const methods = [
    { key: 'email', icon: <Mail className="h-5 w-5" /> },
    { key: 'phone', icon: <Phone className="h-5 w-5" /> },
    { key: 'studio', icon: <MapPin className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="section-gradient border-b border-border/60 py-20">
          <div className="container mx-auto px-4 text-center md:max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {t('title')}
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
              {t('subtitle')}
            </h1>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {methods.map((method) => (
                <Card key={method.key} className="border border-border/70 bg-card/90">
                  <CardContent className="flex gap-4 pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        {t(`methods.${method.key}.label`)}
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {t(`methods.${method.key}.value`)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <Card className="border border-border/70 bg-card/90">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold text-foreground">
                    {t('form.submit')}
                  </h2>
                  <form className="mt-6 space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        {t('form.name')}
                      </label>
                      <input
                        type="text"
                        className="mt-1 w-full rounded-lg border border-border/70 bg-background px-4 py-2 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        {t('form.email')}
                      </label>
                      <input
                        type="email"
                        className="mt-1 w-full rounded-lg border border-border/70 bg-background px-4 py-2 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        {t('form.phone')}
                      </label>
                      <input
                        type="text"
                        className="mt-1 w-full rounded-lg border border-border/70 bg-background px-4 py-2 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        {t('form.message')}
                      </label>
                      <textarea
                        rows={5}
                        className="mt-1 w-full rounded-lg border border-border/70 bg-background px-4 py-2 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <Button className="w-full">{t('form.submit')}</Button>
                  </form>
                  <p className="mt-4 text-xs text-muted-foreground">{t('response')}</p>
                </CardContent>
              </Card>

              <Card className="border border-border/70 bg-secondary/40">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {t('hoursTitle')}
                  </h3>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between rounded-lg border border-border/70 bg-card/80 px-4 py-3">
                      <p className="font-medium text-foreground">{t('hours.weekday')}</p>
                      <p className="text-muted-foreground">{t('hours.weekdayHours')}</p>
                    </div>
                    <div className="flex justify-between rounded-lg border border-border/70 bg-card/80 px-4 py-3">
                      <p className="font-medium text-foreground">{t('hours.weekend')}</p>
                      <p className="text-muted-foreground">{t('hours.weekendHours')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
