import { Card } from "@/app/types/card"
import Tag from "./Tag"

const MultipleTags = ({currentCard}: {currentCard: Card}) => {
  return (
    <div className="flex flex-row gap-2 mt-2">
        <p className="text-neutral-500">N°{currentCard.id}</p>
        <Tag
        style='bg-neutral-500 text-white hover:bg-neutral-600'
        state={true}
        text={currentCard.relatedCP[0]}
        />
        {
        currentCard.relatedND.length > 1 ? (
            <div className="flex flex-row gap-2">
                <Tag
                style='bg-neutral-500 text-white hover:bg-neutral-600'
                state={true}
                text={currentCard.relatedND[0]}
                />
                <Tag
                style='bg-neutral-500 text-white hover:bg-neutral-600'
                state={true}
                text={currentCard.relatedND[1]}
                />
            </div>
        ): (
            <Tag
            style='bg-neutral-500 text-white hover:bg-neutral-600'
            state={true}
            text={currentCard.relatedND[0]}
            />
        )
        }
        <Tag
        state={true}
        text={currentCard.category}
        style={currentCard.category === "Agile Practices" ? 'bg-lime-500 text-white' : currentCard.category === 'Communication and Social Interaction' ? 'bg-sky-500 text-white' : 'bg-pink-500 text-white'}
        />
    </div>
  )
}

export default MultipleTags