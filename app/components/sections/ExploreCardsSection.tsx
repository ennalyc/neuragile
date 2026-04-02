'use client'

import { useState, useEffect } from "react"
import { data } from "@/app/constants/cardData"
import SmallCard from "../cards/SmallCard"
import LargeCard from "../cards/FlippableCard"
import FilterSection from "./FilterSection"
import { sizeConfigs } from "@/app/constants/cardSizeConfig"

const ExploreCardsSection = () => {
  const [activeFilterTagClicked, setActiveFilterTagClicked] = useState<null | string>(null)
  const [activeNdTagClicked, setActiveNdTagClicked] = useState<null | string>(null)
  const [activeCardButton, setActiveCardButton] = useState<null | string>(null)
  const [clickedCard, setClickedCard] = useState<null | number>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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

  const m = sizeConfigs

  return (
    <div className="mt-8 mb-4 md:mb-8 w-full flex flex-col items-center md:px-0">
      <div className="w-full px-4 max-w-7xl">        
       <div className="flex flex-col gap-3 md:justify-between w-full md:gap-0 md:flex-row">
         <div className="flex flex-col md:max-w-2xl gap-8 items-start">
          <div className="flex flex-row w-full md:flex-col md:gap-3">
            <h3 className='text-2xl md:mb-6 md:text-3xl font-bold text-left w-full'>Explore Cards</h3>
            <FilterSection
          activeCard={activeCardButton}
          activeFilter={activeFilterTagClicked}
          activeNd={activeNdTagClicked}
          setActiveCardButton={setActiveCardButton}
          setActiveFilterTagClicked={setActiveFilterTagClicked}
          setActiveNdTagClicked={setActiveNdTagClicked}
          style=""
        />
          </div>
          <div className="w-full md:pr-0 md:max-w-4xl flex flex-col">
            <div className="flex overflow-x-scroll md:overflow-x-hidden md:flex-wrap gap-3 overflow-y-auto md:h-108 content-start no-scrollbar">
              {visibleCards.map((card) => (
                <div key={card.id} onClick={() => setClickedCard(card.id)} className="cursor-pointer shrink-0">
                  <SmallCard size="xs" state={clickedCard === card.id} cardData={card} />
                </div>
              ))}
              {visibleCards.length < 1 && (
                <div className="h-40 w-full bg-neutral-100 rounded-xl flex justify-center items-center border border-dashed border-neutral-300">
                  <p className="text-neutral-400">No cards in this category.</p>
                </div>
              )}
            </div>
          </div>
       </div>

          <div className="w-full mt-4 md:mt-0 lg:w-1/2 flex flex-col gap-y-6">
            
            <div className="flex justify-center lg:justify-end">
              {currentCard ? (
                <LargeCard
                  key={currentCard.id}
                  size={isMobile ? "large" : "extraLarge"}
                  cardData={currentCard}
                />
              ) : (
                <div className={`${isMobile ? m.large.container : m.extraLarge.container} text-neutral-400 bg-neutral-200 rounded-4xl px-8 flex justify-center items-center text-center`}>
                  <p>Pick a card to see details.</p>
                </div>
              )}
            </div>

            <section className="flex flex-col items-center lg:items-end">
              <div className={`${isMobile ? 'w-full max-w-sm' : 'w-88'} justify-end`}>
                <h4 className="text-md font-bold mb-4">Related Cards</h4>
                <div className="flex flex-row gap-3 pb-4 no-scrollbar">
                  {relatedCards.length > 0 ? (
                    relatedCards.map((rc) => (
                      <div onClick={() => setClickedCard(rc.id)} className="grayscale hover:grayscale-0 transition-all shrink-0 cursor-pointer" key={rc.id}>
                        <SmallCard state={false} cardData={rc} size="xxs" />
                      </div>
                    ))
                  ) : (
                    <p className="text-neutral-400 text-sm">No related cards found.</p>
                  )}
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ExploreCardsSection