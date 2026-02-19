"use client"

import { useState } from "react"
import CollectionModal from "./ui/CollectionModal"
import { BookMarked } from "lucide-react"
import { Collection } from "./ui/CollectionButton"

interface Props {
  collections: Collection[]
  curCard: string
  message?: string
  error?: string
  onAddItem: (collectionId: number) => Promise<void>
  onCreateCollection: (name: string) => Promise<void>
}

export default function CollectionButtonTrigger({
  collections,
  curCard,
  message,
  error,
  onAddItem,
  onCreateCollection,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex gap-2 cursor-pointer flex-row text-sm text-neutral-400 hover:text-neutral-500"
      >
        <BookMarked size={16} />
        <p>Add to a collection</p>
      </div>

      <CollectionModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        collections={collections}
        cardId={curCard}
        message={message}
        error={error}
        onAddItem={onAddItem}
        onCreateCollection={onCreateCollection}
      />
    </>
  )
}
