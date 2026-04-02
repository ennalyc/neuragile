`use client`
import { useState } from "react"
import { filterTags, ndTags, cardTypes } from "@/app/constants/filteringData"
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

    return (
        <section className='flex flex-wrap md:flex-col gap-2'>
            <div className="md:hidden hover:text-neutral-500 text-neutral-400 p-2">
                <Filter 
                    className="cursor-pointer" 
                    onClick={() => setIsOpen(!isOpen)} 
                    size={20}
                />
            </div>

            <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col gap-1`}>
                <div className="flex md:flex-row flex-wrap gap-3">
                    {filterTags.map((ft) => (
                        <div key={ft.id} onClick={() => setActiveFilterTagClicked(activeFilter === ft.title ? null : ft.title)}>
                            <Tag
                                type="rounded-md"
                                style='bg-neutral-500 text-white hover:bg-neutral-600'
                                text={ft.title}
                                state={activeFilter === ft.title}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex md:flex-row flex-wrap gap-3">
                    {ndTags.map((ft) => (
                        <div key={ft.id} onClick={() => setActiveNdTagClicked(activeNd === ft.title ? null : ft.title)}>
                            <Tag
                                type="rounded-4xl"
                                style='bg-neutral-500 text-white hover:bg-neutral-600'
                                text={ft.title}
                                state={activeNd === ft.title}
                            />
                        </div>
                    ))}
                </div>

                <div className={`${style} flex flex-wrap md:flex-row gap-3`}>
                    {cardTypes.map((ct) => (
                        <div className="max-w-56" key={ct.id} onClick={() => setActiveCardButton(activeCard === ct.title ? null : ct.title)}>
                            <CustomButton
                                state={ct.title === activeCard}
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