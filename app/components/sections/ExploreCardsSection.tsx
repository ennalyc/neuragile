'use client'

import { useState } from "react"
import { filterTags, ndTags, cardTypes } from "@/app/constants/filteringData"
import Tag from "../ui/Tag"
import CustomButton from "../ui/CustomButton"
import { data } from "@/app/constants/cardData"
import SmallCard from "../cards/SmallCard"
import { Card } from "@/app/types/card"
import LargeCard from "../cards/LargeCard"
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
    <section className="w-full flex justify-center">
      <div className="flex flex-col items-start justify-center h-180">
        <h3 className='text-3xl font-bold mb-8 w-full'>Explorar Cards</h3>
        <div className="flex flex-row gap-16 items-start justify-center w-full">
            <section className="w-180 flex-none">
            <section className="flex flex-col gap-3 justify-start w-4/5">
                <div className="flex flex-row gap-3">
                  {
                    filterTags.map((ft) => (
                      <div key={ft.id} onClick={() => setActiveFilterTagClicked(activeFilterTagClicked === ft.title ? null : ft.title)}>
                        <Tag
                        text={ft.title}
                        state={activeFilterTagClicked === ft.title}
                        />
                      </div>
                    ))
                  }
                </div>
                <div className="flex flex-row gap-3">
                  {
                    ndTags.map((ft) => (
                      <div key={ft.id} onClick={() => setActiveNdTagClicked(activeNdTagClicked === ft.title ? null : ft.title)}>
                        <Tag
                        text={ft.title}
                        state={activeNdTagClicked === ft.title}
                        />
                      </div>
                    ))
                  }
                  <div className="flex flex-row gap-3">
                    <div className="flex flex-row gap-2 items-center text-md text-neutral-400">
                      <input className="cursor-pointer h-3 w-3" type="checkbox" name="groupingType" id="Individual" />
                      <label htmlFor="Individual">Individual</label>
                    </div>
                    <div className="flex flex-row gap-2 items-center text-md text-neutral-400">
                      <input className="cursor-pointer h-3 w-3" type="checkbox" name="groupingType" id="Grupo" />
                      <label htmlFor="Grupo">Grupo</label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-3">
                  {
                    cardTypes.map((ct) => (
                      <div key={ct.id} onClick={() => setActiveCardButton(ct.title === activeCardButton ? null : ct.title)}>
                        <CustomButton
                        state={ct.title === activeCardButton}
                        text={ct.title}
                        icon={ct.icon}
                        color={ct.color}
                        />
                      </div>
                    ))
                  }
                </div>
              </section>
              <div className="w-145 mt-4">
                <section className={`flex flex-wrap gap-3 mt-8 ${visibleCards.length < 1 ? '' : 'overflow-y-scroll'} h-80`}>
                {visibleCards.map((card) => (
                    <div key={card.id} onClick={() => setClickedCard(card.id)}>
                      <SmallCard size="xs" state={clickedCard === card.id} cardData={card} />
                    </div>
                  ))}
                  {
                      visibleCards.length < 1 && (
                        <div className="h-4/5 w-3/4 bg-neutral-100 rounded-xl flex justify-center items-center">
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
        <div className="flex flex-wrap gap-x-8 gap-y-2 px-4 mt-4">
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
  )
}

export default ExploreCardsSection