'use client'
import { useState } from "react"
import { useLocalizedFilters } from "@/app/hooks/useLocalizedFilters"
import CustomButton from "../ui/CustomButton"
import Tag from "../ui/Tag"
import { Filter } from "lucide-react"

const FilterSection = ({
  activeFilter,
  activeNd,
  activeCard,
  setActiveFilterTagClicked,
  setActiveNdTagClicked,
  setActiveCardButton,
  style
}: {
  activeFilter: null | string,
  activeNd: null | string,
  activeCard: null | string,
  setActiveFilterTagClicked: (val: string | null) => void,
  setActiveNdTagClicked: (val: string | null) => void,
  setActiveCardButton: (val: string | null) => void,
  style: string
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const { filterTags, ndTags, cardTypes } = useLocalizedFilters()

  return (
    <section className='flex relative flex-wrap md:flex-col gap-2'>
      <div className="md:hidden hover:text-neutral-500 text-neutral-400 p-2">
        <Filter
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          size={20}
        />
      </div>

      <div className={`${isOpen ? 'flex flex-col absolute top-10 right-0 z-50 bg-white p-4 shadow-xl border border-neutral-100 rounded-xl w-[90vw]' : 'hidden'} md:flex flex-col gap-1`}>
        <div className="flex md:flex-row flex-wrap gap-3">
          {filterTags.map((ft: any) => (
            <div key={ft.id} onClick={() => setActiveFilterTagClicked(activeFilter === ft.key ? null : ft.key)}>
              <Tag
                type="rounded-md"
                style='bg-neutral-500 text-white hover:bg-neutral-600'
                text={ft.title}
                state={activeFilter === ft.key}
              />
            </div>
          ))}
        </div>

        <div className="flex md:flex-row flex-wrap gap-3">
          {ndTags.map((ft: any) => (
            <div key={ft.id} onClick={() => setActiveNdTagClicked(activeNd === ft.key ? null : ft.key)}>
              <Tag
                type="rounded-4xl"
                style='bg-neutral-500 text-white hover:bg-neutral-600'
                text={ft.title}
                state={activeNd === ft.key}
              />
            </div>
          ))}
        </div>

        <div className={`${style} flex flex-wrap md:flex-row gap-3`}>
          {cardTypes.map((ct: any) => (
            <div className="max-w-56" key={ct.id} onClick={() => setActiveCardButton(activeCard === ct.key ? null : ct.key)}>
              <CustomButton
                state={ct.key === activeCard}
                text={ct.title}
                icon={ct.icon}
                color={ct.color}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FilterSection