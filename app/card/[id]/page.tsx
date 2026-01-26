import { data } from "@/app/constants/cardData";
import Tag from "@/app/components/ui/Tag";
import ChecklistSection from "@/app/components/sections/ChecklistSection";
import SmallCard from "@/app/components/cards/SmallCard";
import Link from "next/link";
import MultipleTags from "@/app/components/ui/MultipleTags";
import FrontCard from "@/app/components/cards/FrontCard";
import BackCard from "@/app/components/cards/BackCard";
import { BookMarked, CircleCheck, CircleX } from "lucide-react";

// TO-DO: add feedback functionality

interface CardPageProps {
  params: Promise<{id: string}>;
}

const CardPage = async ({params}: {params: CardPageProps}) => {
  const { id } = await params

  const currentCard = data.find(card => card.front[0].cardNum === id)
  const relatedCards = currentCard ? data.filter(rc => 
    rc.relatedCP.includes(currentCard.relatedCP[0]) && rc.id !== currentCard.id
  ).slice(0, 8) : [];

  const feedbackOptions = [
    {
      id: 1,
      icon: <BookMarked size={16}/>,
      text: 'Save to my profile'
    },
    {
      id: 2,
      icon: <BookMarked size={16}/>,
      text: 'Add to a collection'
    }
  ]

  const checkData = [
    {
      id: 1,
      text: 'Worked for me',
      icon: <CircleCheck size={16}/>
    },
    {
      id: 2,
      text: 'Struggled applying',
      icon: <CircleX size={16}/>
    },
    {
      id: 3,
      text: 'More context needed',
      icon: <CircleCheck size={16}/>
    }
  ]
  return (
    <div className="mt-8 px-30 flex justify-center items-center mb-16">
      {
        currentCard && (
          <div className="max-w-7xl w-full">
            <h3 className="text-3xl font-bold mb-4">{currentCard.front[0].title}</h3>
            <div className="flex flex-row justify-between">
              <div>
                <MultipleTags
                currentCard={currentCard}
                />
                <ChecklistSection/>
                <section className="w-130 my-4">
                    <h4 className="text-xl font-bold mb-4">Related Cards</h4>
                    <div className="flex flex-wrap gap-3">
                      {
                      relatedCards.length > 0 ?
                      (
                        relatedCards.map((rc) => (
                          <div className="grayscale hover:grayscale-0" key={rc.id}>
                            <Link href={`/card/${rc.front[0].cardNum}`}>
                              <SmallCard
                              cardData={rc}
                              size="xs"
                              state={false}
                              />
                            </Link>
                          </div>
                        ))
                      ) : (
                        <p className="text-neutral-400 text-sm">No card selected.</p>
                      )
                    }
                    </div>
                </section>
              </div>
              <section className="flex flex-row gap-6">
                <div className="flex flex-col items-start">
                  <div className="transition-transform duration-300 hover:scale-[1.02]">
                  <FrontCard
                  cardData={currentCard}
                  size="large"
                  />
                </div>
                <div className="px-3 mt-4 flex flex-col items-start gap-3">
                    {
                      feedbackOptions.map((fd) => (
                        <div className="flex gap-2 cursor-pointer flex-row text-sm text-neutral-400 hover:text-neutral-500" key={fd.id}>
                          {fd.icon}
                          <p>{fd.text}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="transition-transform duration-300 hover:scale-[1.02]">
                    <BackCard
                    cardData={currentCard}
                    size="large"
                    />
                  </div>
                  <div className="flex w-80 flex-wrap gap-x-8 gap-y-3 px-4 mt-4">
                      {
                        checkData.map((check) => (
                          <div className="flex gap-2 cursor-pointer items-center flex-row text-sm text-neutral-400 hover:text-neutral-500" key={check.id}>
                              {check.icon}
                              <p>{check.text}</p>
                          </div>
                        ))
                      }
                  </div>
                </div>
              </section>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CardPage