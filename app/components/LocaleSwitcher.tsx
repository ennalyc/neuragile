'use client'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'

const locales = [
  { code: 'en', label: 'EN', country: 'us' },
  { code: 'pt', label: 'PT', country: 'br' },
  { code: 'es', label: 'ES', country: 'es' },
]

export default function LocaleSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()
  const current = locales.find(l => l.code === currentLocale) ?? locales[0]
  const [open, setOpen] = useState(false)

  function switchLocale(code: string) {
    const newPath = pathname.replace(`/${currentLocale}`, `/${code}`)
    router.push(newPath)
    setOpen(false)
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 h-8 px-2.5 text-sm text-neutral-400 font-medium border border-neutral-400 rounded-md bg-transparent hover:bg-accent transition-colors"
      >
        <img
          src={`https://flagcdn.com/w40/${current.country}.png`}
          alt={current.code}
          className="w-4 h-3 rounded-sm object-cover"
        />
        {current.label}
        <svg
          width="12" height="12" viewBox="0 0 12 12" fill="none"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-[calc(100%+4px)] z-20 min-w-22.5 bg-white overflow-hidden rounded-md border border-neutral-400 bg-popover shadow-md">
            {locales.map(({ code, label, country }) => (
              <button
                key={code}
                onClick={() => switchLocale(code)}
                className={`flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-accent
                  ${code === currentLocale ? 'bg-accent text-accent-foreground font-medium' : 'text-foreground'}`}
              >
                <img
                  src={`https://flagcdn.com/w40/${country}.png`}
                  alt={code}
                  className="w-4 h-3 rounded-sm object-cover"
                />
                {label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}