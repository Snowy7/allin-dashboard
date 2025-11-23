'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Cake, Menu, X } from 'lucide-react'
import { usePathname, useRouter } from '@/i18n/routing'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { key: 'home', path: '' },
  { key: 'about', path: '/about' },
  { key: 'services', path: '/services' },
  { key: 'contact', path: '/contact' },
]

export default function Navbar() {
  const t = useTranslations('Navbar')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const switchLocale = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en'
    router.replace(pathname, { locale: newLocale })
  }

  const renderLink = (item: (typeof NAV_LINKS)[number]) => {
    const href = `/${locale}${item.path}`
    const isActive =
      pathname === href ||
      (href !== `/${locale}` && pathname.startsWith(`${href}/`))

    return (
      <Link
        key={item.key}
        href={href}
        className={cn(
          "relative text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-muted-foreground"
        )}
        onClick={() => setIsOpen(false)}
      >
        <span>{t(item.key)}</span>
        {isActive && (
          <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />
        )}
      </Link>
    )
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
              <Cake className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight hidden sm:block">
              Happy Sweet Cake
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(renderLink)}
            
            <div className="flex items-center gap-3 border-l border-border/50 pl-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs font-bold uppercase tracking-wider"
                onClick={switchLocale}
              >
                {locale === 'en' ? 'AR' : 'EN'}
              </Button>
              <ThemeToggle />
              <Button size="sm" className="rounded-full px-6" asChild>
                <Link href={`/${locale}/contact`}>{t('cta')}</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/50 shadow-lg animate-slide-up">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {NAV_LINKS.map((item) => (
              <div key={item.key} className="border-b border-border/30 pb-2 last:border-0">
                {renderLink(item)}
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="outline" onClick={switchLocale} className="w-full justify-between">
                <span>Language</span>
                <span>{locale === 'en' ? 'العربية' : 'English'}</span>
              </Button>
              <Button className="w-full rounded-full" asChild onClick={() => setIsOpen(false)}>
                <Link href={`/${locale}/contact`}>{t('cta')}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
