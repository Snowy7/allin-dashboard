import { useTranslations } from 'next-intl'
import {
  Award,
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  const t = useTranslations()

  const pillars = [
    {
      key: 'craft',
      icon: <Sparkles className="h-6 w-6" />,
      title: t('About.pillars.craft.title'),
      description: t('About.pillars.craft.description'),
    },
    {
      key: 'innovation',
      icon: <Leaf className="h-6 w-6" />,
      title: t('About.pillars.innovation.title'),
      description: t('About.pillars.innovation.description'),
    },
    {
      key: 'community',
      icon: <Users className="h-6 w-6" />,
      title: t('About.pillars.community.title'),
      description: t('About.pillars.community.description'),
    },
  ]

  const values = [
    { key: 'quality', icon: <Award className="h-5 w-5" /> },
    { key: 'trust', icon: <ShieldCheck className="h-5 w-5" /> },
    { key: 'care', icon: <Heart className="h-5 w-5" /> },
  ]

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
              {t('About.title')}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {t('About.description')}
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((pillar) => (
                <Card
                  key={pillar.key}
                  className="glass-card border border-border/70 p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    {pillar.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{pillar.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-b border-border/60 bg-secondary/40 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <Card key={value.key} className="border border-border/70 bg-card/90">
                  <CardContent className="flex flex-col gap-3 pt-6">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {value.icon}
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      {t(`About.values.${value.key}`)}
                    </p>
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
