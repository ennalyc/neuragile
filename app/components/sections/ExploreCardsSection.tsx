'use client'

import { useState } from "react"
import { filterTags, ndTags, cardTypes } from "@/app/constants/filteringData"
import Tag from "../ui/Tag"
import CustomButton from "../ui/CustomButton"
import { data } from "@/app/constants/cardData"
import SmallCard from "../cards/SmallCard"
import { Card } from "@/app/types/card"
import LargeCard from "../cards/LargeCard"
import FilterSection from "./FilterSection"
import { CircleCheck, CircleX, CirclePlus } from "lucide-react"

// TO-DO: add checkbutton state

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
    {
      id: 1,
      text: 'Funcionou pra mim',
      icon: <CircleCheck size={16}/>
    },
    {
      id: 2,
      text: 'Difícil aplicar',
      icon: <CircleX size={16}/>
    },
    {
      id: 3,
      text: 'Precisa de mais contexto',
      icon: <CircleCheck size={16}/>
    }
  ]

  return (
    <div className="mt-8 flex flex-col justify-center items-center">
      <section className="w-full flex justify-center">
      <div className="flex flex-col justify-start w-full h-160">
        <h3 className='text-3xl font-bold mb-8 w-full'>Explorar Cards</h3>
        <div className="flex flex-row justify-between w-full">
            <section className="w-180 flex-none">
              <FilterSection
              activeCard={activeCardButton}
              activeFilter={activeFilterTagClicked}
              activeNd={activeNdTagClicked}
              setActiveCardButton={setActiveCardButton}
              setActiveFilterTagClicked={setActiveFilterTagClicked}
              setActiveNdTagClicked={setActiveNdTagClicked}
              />
              <div className="w-145 mt-4">
                <section className={`flex flex-wrap gap-3 mt-8 ${visibleCards.length < 1 ? '' : 'overflow-y-scroll'} h-80`}>
                {visibleCards.map((card) => (
                    <div key={card.id} onClick={() => setClickedCard(card.id)}>
                      <SmallCard size="xs" state={clickedCard === card.id} cardData={card} />
                    </div>
                  ))}
                  {
                      visibleCards.length < 1 && (
                        <div className="h-78 w-full bg-neutral-100 rounded-xl flex justify-center items-center">
                          <p className="text-neutral-400">Não existem cards nessa categoria.</p>
                        </div>
                      )
                  }
              </section>
              </div>
        </section>
        <div className="flex flex-col items-center">
          <section className="shrink">
            {
              currentCard && (
                <LargeCard
                key={currentCard.id}
                size="large"
                cardData={currentCard}
                />
              )
            }
        </section>
        <div className="flex w-80 flex-wrap gap-x-8 gap-y-2 px-4 mt-4">
            {
              checkData.map((check) => (
                <div className="flex gap-2 cursor-pointer flew-row text-sm text-neutral-400 hover:text-neutral-500" key={check.id}>
                    {check.icon}
                    <p>{check.text}</p>
                </div>
              ))
            }
        </div>
        </div>
        </div>
      </div>
      </section>
      <section className="flex w-full overflow-y-auto xl:overflow-auto flex-col justify-start h-140">
        <h4 className="text-2xl font-bold">Cards Relacionados</h4>
        <div className="h-110 flex flex-row overflow-x-scroll items-center mt-10 gap-x-4 justify-start">
          {
          relatedCards.length > 0 ?
          (
            relatedCards.map((rc) => (
              <div className="grayscale hover:grayscale-0" key={rc.id}>
                <LargeCard
                cardData={rc}
                size="big"
                />
              </div>
            ))
          ) : (
            <p className="text-neutral-400 text-sm">Não há cards relacionados.</p>
          )
        }
        </div>
      </section>
    </div>
  )
}

export default ExploreCardsSection