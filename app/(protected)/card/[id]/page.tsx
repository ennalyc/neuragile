import { data } from "@/app/constants/cardData";

import ChecklistSection from "@/app/components/sections/ChecklistSection";
import SmallCard from "@/app/components/cards/SmallCard";
import Link from "next/link";
import MultipleTags from "@/app/components/ui/MultipleTags";
import FrontCard from "@/app/components/cards/FrontCard";
import BackCard from "@/app/components/cards/BackCard";
import CollectionButton from "@/app/components/ui/CollectionButton";

interface CardPageProps {
  params: Promise<{id: string}>;
}

const CardPage = async ({params}: {params: CardPageProps}) => {
  const { id } = await params

  const currentCard = data.find(card => card.front[0].cardNum === id)
  const relatedCards = currentCard ? data.filter(rc => 
    rc.relatedCP.includes(currentCard.relatedCP[0]) && rc.id !== currentCard.id
  ).slice(0, 8) : [];

  
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
                <section className="w-130 my-4 flex flex-col items-start gap-3">
                    <h4 className="text-xl font-bold mb-4">Related Cards</h4>
                    <div className="flex flex-wrap gap-3 mb-4">
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
                    <CollectionButton
                    curId={id}
                    />
                </section>
              </div>
              <section className="flex flex-col items-end gap-6">
                <div className="flex flex-row gap-2">
                  <div className="flex flex-col gap-3 items-start">
                  <div className="transition-transform duration-300 hover:scale-[1.02] mb-4">
                    <FrontCard
                    cardData={currentCard}
                    size="large"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-end">
                    <div className="transition-transform duration-300 hover:scale-[1.02]">
                    <BackCard
                    cardData={currentCard}
                    size="large"
                    />
                  </div>
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