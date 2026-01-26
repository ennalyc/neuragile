`use client`
import { useState } from "react"
import { filterTags, ndTags } from "@/app/constants/filteringData"
import { cardTypes } from "@/app/constants/filteringData"
import CustomButton from "../ui/CustomButton"
import Tag from "../ui/Tag"

const FilterSection = ({activeFilter, activeNd, activeCard, setActiveFilterTagClicked, setActiveNdTagClicked, setActiveCardButton, style}: 
    { activeFilter: null | string, activeNd: null | string, activeCard: null | string, setActiveFilterTagClicked: (val: string | null) => void, setActiveNdTagClicked: (val: string | null) => void, setActiveCardButton: (val: string | null) => void, style: string}) => {
   return (
    <section className='flex justify-start flex-col gap-2'>
        <div className="flex-col flex gap-2">
            <div className="flex flex-row gap-3">
            {
            filterTags.map((ft) => (
                <div key={ft.id} onClick={() => setActiveFilterTagClicked(activeFilter === ft.title ? null : ft.title)}>
                <Tag
                style='bg-neutral-500 text-white hover:bg-neutral-600'
                text={ft.title}
                state={activeFilter === ft.title}
                />
                </div>
            ))
            }
        </div>
        <div className="flex flex-row gap-3">
            {
            ndTags.map((ft) => (
                <div key={ft.id} onClick={() => setActiveNdTagClicked(activeNd === ft.title ? null : ft.title)}>
                    <Tag
                    style='bg-neutral-500 text-white hover:bg-neutral-600'
                    text={ft.title}
                    state={activeNd === ft.title}
                    />
                </div>
            ))
            }
            <div className="flex flex-row gap-3">
            <div className="flex flex-row gap-2 items-center text-md text-neutral-400">
                <input className="cursor-pointer h-3 w-3" type="checkbox" name="groupingType" id="Individual" />
                <label htmlFor="Individual">Solo</label>
            </div>
            <div className="flex flex-row gap-2 items-center text-md text-neutral-400">
                <input className="cursor-pointer h-3 w-3" type="checkbox" name="groupingType" id="Grupo" />
                <label htmlFor="Grupo">Group</label>
            </div>
            </div>
        </div>
        </div>
        <div className={`flex flex-row gap-3 ${style}`}>
            {
            cardTypes.map((ct) => (
                <div key={ct.id} onClick={() => setActiveCardButton(activeCard === ct.title ? null : ct.title)}>
                    <CustomButton
                    state={ct.title === activeCard}
                    text={ct.title}
                    icon={ct.icon}
                    color={ct.color}
                    />
                </div>
            ))
            }
        </div>
    </section>
  )
}

export default FilterSection