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
  <div className="mt-8 mb-8 w-full flex flex-col items-center px-4 md:px-0">
    <div className="w-full max-w-7xl">
      
      <div className="flex flex-col mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Explore Cards</h3>
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

      <div className="flex flex-col md:flex-row w-full gap-8 items-start">
        
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex overflow-x-scroll md:flex-wrap gap-3 md:h-125 overflow-y-auto pr-2 content-start no-scrollbar">
            {visibleCards.map((card) => (
              <div key={card.id} onClick={() => setClickedCard(card.id)} className="cursor-pointer shrink-0">
                <SmallCard size="xs" state={clickedCard === card.id} cardData={card} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <div className="flex justify-center md:justify-end">
            {currentCard ? (
              <LargeCard key={currentCard.id} size={isMobile ? "medium" : "extraLarge"} cardData={currentCard} />
            ) : (
              <div className={`${isMobile ? m.small.container : m.extraLarge.container} text-neutral-400 bg-neutral-200 rounded-4xl flex justify-center items-center text-center px-8`}>
                <p>Pick a card to see details.</p>
              </div>
            )}
          </div>
          
          {/* Related Cards Section */}
          <section className="flex flex-col items-center md:items-end">
             {/* ... your related cards code ... */}
          </section>
        </div>

      </div>
    </div>
  </div>
)}

export default ExploreCardsSection;