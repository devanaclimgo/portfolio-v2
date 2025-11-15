"use client"

import * as React from "react"
import Image from "next/image"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/routing"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "pt" : "en"
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 rounded-full shadow-lg"
    >
      {locale === "en" ? (
        <Image
          src="/united-kingdom.png"
          alt="English"
          width={20}
          height={20}
          className="h-[1.2rem] w-[1.2rem] transition-all"
        />
      ) : (
        <Image
          src="/brazil-.png"
          alt="Português"
          width={20}
          height={20}
          className="h-[1.2rem] w-[1.2rem] transition-all"
        />
      )}
      <span className="sr-only">Toggle language</span>
    </Button>
  )
}

