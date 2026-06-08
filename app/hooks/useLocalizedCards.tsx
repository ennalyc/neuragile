import { useTranslations } from 'next-intl'
import { data } from '@/app/constants/cardData'
import { Card } from '@/app/types/card'

export function useLocalizedCards(): Card[] {
  const t = useTranslations('HomePage.cards')

  return data.map((card) => {
    const id = String(card.id)
    return {
      ...card,
      front: card.front.map((f) => ({
        ...f,
        title: t(`${id}.title`),
        text: t(`${id}.frontText`),
      })),
      back: t(`${id}.backText`),
    }
  })
}