'use client'

import { useState } from "react"
import { filterTags, ndTags, cardTypes } from "@/app/constants/filteringData"
import Tag from "../ui/Tag"
import CustomButton from "../ui/CustomButton"
import { data } from "@/app/constants/cardData"
import SmallCard from "../cards/SmallCard"
import { Card } from "@/app/types/card"
import LargeCard from "../cards/FlippableCard"
import FilterSection from "./FilterSection"
import { CircleCheck, CircleX, CirclePlus } from "lucide-react"

const ExploreCardsSection = () => {
  const [activeFilterTagClicked, setActiveFilterTagClicked] = useState<null | string>(null)
  const [activeNdTagClicked, setActiveNdTagClicked] = useState<null | string>(null)
  const [activeCardButton, setActiveCardButton] = useState<null | string>(null)
  const [clickedCard, setClickedCard] = useState<null | number>(1)

  const visibleCards = data.filter((card) => {
    const matchesFilter = !activeFilterTagClicked || card.relatedCP.includes(activeFilterTagClicked);
    const matchesNd = !activeNdTagClicked || card.relatedND.includes(activeNdTagClicked);
    const matchesType = !activeCardButton || card.category === activeCardButton;
    return matchesFilter && matchesNd && matchesType;
  })

  const currentCard = data.find(cd => cd.id === clickedCard)
  const relatedCards = currentCard ? data.filter(rc => 
    rc.relatedCP.includes(currentCard.relatedCP[0]) && rc.id !== currentCard.id
  ).slice(0, 4) : [];

  const checkData = [
    { id: 1, text: 'Worked for me', icon: <CircleCheck size={16}/> },
    { id: 2, text: 'Struggled applying', icon: <CircleX size={16}/> },
    { id: 3, text: 'More context needed', icon: <CircleCheck size={16}/> }
  ]

  return (
    <div className="mt-8 w-full flex flex-col items-center">
      <div className="w-full justify-center max-w-7xl">
        <h3 className='text-3xl font-bold mb-8'>Explore Cards</h3>
        
        <div className="flex flex-col lg:flex-row items-start justify-between xl:gap-20">
          
          <div className="w-full lg:w-auto lg:max-w-145 flex flex-col items-center lg:items-start">
            <FilterSection
              activeCard={activeCardButton}
              activeFilter={activeFilterTagClicked}
              activeNd={activeNdTagClicked}
              setActiveCardButton={setActiveCardButton}
              setActiveFilterTagClicked={setActiveFilterTagClicked}
              setActiveNdTagClicked={setActiveNdTagClicked}
              style=""
            />
            
            <div className="mt-8 w-full">
              <div className="flex flex-wrap gap-3 overflow-y-auto h-80 pr-2 content-start justify-center lg:justify-start">
                {visibleCards.map((card) => (
                  <div key={card.id} onClick={() => setClickedCard(card.id)} className="cursor-pointer">
                    <SmallCard size="xs" state={clickedCard === card.id} cardData={card} />
                  </div>
                ))}
                {visibleCards.length < 1 && (
                  <div className="h-72 w-full bg-neutral-100 rounded-xl flex justify-center items-center border border-dashed border-neutral-300">
                    <p className="text-neutral-400">No cards in this category.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto flex flex-col items-end shrink-0">
            {currentCard && (
              <LargeCard
                key={currentCard.id}
                size="large"
                cardData={currentCard}
              />
            )}
            
            <div className="flex flex-wrap pl-24 items-end gap-x-6 gap-y-3 mt-6 max-w-100">
              {checkData.map((check) => (
                <div className="flex gap-2 items-center cursor-pointer text-sm text-neutral-400 hover:text-neutral-600 transition-colors" key={check.id}>
                  {check.icon}
                  <p className="whitespace-nowrap">{check.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <section className="w-full max-w-7xl mt-8 mb-16 px-6">
        <h4 className="text-2xl font-bold mb-8">Related Cards</h4>
        <div className="flex flex-row overflow-x-auto gap-6 pb-6 no-scrollbar">
          {relatedCards.length > 0 ? (
            relatedCards.map((rc) => (
              <div className="grayscale hover:grayscale-0 transition-all shrink-0" key={rc.id}>
                <LargeCard cardData={rc} size="big" />
              </div>
            ))
          ) : (
            <p className="text-neutral-400 text-center mt-2 w-full text-sm">There's no related card.</p>
          )}
        </div>
      </section>
    </div>
  )
}

export default ExploreCardsSection