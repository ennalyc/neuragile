import { getCollection } from '@/app/lib/collections'
import Link from 'next/link'
import SmallCard from '@/app/components/cards/SmallCard'
import { data } from '@/app/constants/cardData'
import BackButton from '@/app/components/ui/BackButton'

type CollectionProps = {
    id: string
}

const CollectionPage =  async ({params}: {params: CollectionProps}) => {
    
    const collectionId = await params
    const myCollection = await getCollection(Number(collectionId.id))
    const collectionCardIds = myCollection.items.map((item: { cardId: any }) => Number(item.cardId))
    const allCollectionCards = data.filter(card => collectionCardIds.includes(card.id))
    return (
    <div className='mt-8 w-full flex flex-col items-center'>
        <div className='w-full justify-center max-w-7xl'>
            <div className='flex  mb-8 flex-row gap-x-2 items-center'>
                <BackButton/>
                <h3 className='text-3xl font-bold'>{myCollection.name}</h3>
            </div>
            <div className='flex flex-wrap w-full'>
                {
                    allCollectionCards.length === 0 ?
                    <p className='text-sm text-neutral-400 text-center w-full mt-8'>No cards yet.</p>
                    :
                    allCollectionCards.map((my) => (
                        <Link key={my.id} href={`/card/${my.front[0].cardNum}`}>
                            <SmallCard size="small" state={false} cardData={my} />
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default CollectionPage