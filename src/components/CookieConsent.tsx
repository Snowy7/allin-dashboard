'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const t = useTranslations('Cookie')
  const locale = useLocale()

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const setConsent = (value: 'accepted' | 'declined') => {
    localStorage.setItem('cookieConsent', value)
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 text-sm text-foreground">
            <p>
              {t('title')}{' '}
              <span className="text-muted-foreground">{t('description')}</span>
              <Link
                href={`/${locale}/cookies`}
                className="ml-2 font-semibold text-primary underline-offset-4 hover:underline"
              >
                {t('policy')}
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setConsent('declined')}>
              {t('decline')}
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-[#be4f75] via-[#cf6d74] to-[#f2d3a0] text-white shadow-md hover:opacity-90"
              onClick={() => setConsent('accepted')}
            >
              {t('accept')}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setConsent('declined')}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
