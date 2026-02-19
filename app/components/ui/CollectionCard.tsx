import { Bookmark } from "lucide-react"
import Link from "next/link"

const CollectionCard = ({title, id}: {title: string, id: number}) => {
  return (
    <Link href={`/collection/${id}`} className='w-full py-5 flex flex-row gap-3 items-center px-4 rounded-lg bg-neutral-100 border-neutral-100 border text-neutral-400'>
        <Bookmark
        size={16}
        />
        {title}
    </Link>
  )
}

export default CollectionCard