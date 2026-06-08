import { useTranslations } from 'next-intl'
import { filterTags, ndTags, cardTypes } from '@/app/constants/filteringData'

export function useLocalizedFilters() {
  const t = useTranslations('HomePage')

  return {
    filterTags: filterTags.map((f) => ({
    ...f,
    title: t(`filtering.${f.key.toLowerCase().replace('-', '').replace(' ', '')}`),
    })),
    ndTags: ndTags.map((n) => ({
    ...n,
    title: t(`ndTags.${n.key.toLowerCase()}`),
    })),
    cardTypes: cardTypes.map((c) => ({
    ...c,
    title: t(`cardTypes.${
        c.key === 'Agile Practices' ? 'agile' :
        c.key === 'Communication and Social Interaction' ? 'communication' :
        'leadership'
    }`),
    })),
}
}