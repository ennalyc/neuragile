import { getAllCollectedCards } from "@/app/lib/collections"
import SmallCard from "../cards/SmallCard"
import { data } from "@/app/constants/cardData"
import Link from "next/link"

const SavedCardsSection = async () => {

    const cards = await getAllCollectedCards()
    console.log(cards)
    return (
        <section className="w-full">
            <h4 className="font-semibold text-xl my-4">Saved Cards</h4>
            <div className="w-full">
                {
                    cards.length === 0 ? (
                        <div className="h-100 w-full bg-neutral-100 rounded-xl flex justify-center items-center border border-dashed border-neutral-300">
                            <p className="text-neutral-400 text-sm text-center">No saved cards yet.</p>

                        </div>
                    ):(
                        <div className="flex flex-row md:flex-wrap overflow-x-auto gap-3 overflow-y-auto md:h-100 pr-2 content-start justify-start">
                            {
                                cards.map((card: any) => {
                                const myCard = data.find(c => c.id === card.id)
                                return (
                                    <div key={card.id}>
                                        {
                                            myCard && (
                                                <Link href={`/card/${myCard.front[0].cardNum}`}>
                                                    <SmallCard
                                                    cardData={myCard}
                                                    state={false}
                                                    size="small"
                                                    />
                                                </Link>
                                            )
                                        }
                                    </div>
                                )
                            })
                            }
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default SavedCardsSection