"use client"

import { useState, useEffect } from "react"
import CollectionModal from "./ui/CollectionModal"
import { BookMarked } from "lucide-react"
import { Collection } from "./ui/CollectionButton"
import { useTranslations } from "next-intl"

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
  const [err, setErr] = useState(error);
  const [msg, setMsg] = useState(message);
  
  useEffect(() => {
  setMsg(message)
  setErr(error)
}, [message, error])

  const handleClose = () => {
    setIsOpen(false);
    setMsg(""); 
    setErr(""); 
  }

  const t = useTranslations()

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex gap-2 cursor-pointer flex-row text-md items-center text-neutral-400 hover:text-neutral-500"
      >
        <BookMarked size={16} />
        <p>{t("auth.add")}</p>
      </div>

      {isOpen && (
        <CollectionModal
          isOpen={isOpen}
          onClose={handleClose}
          collections={collections}
          cardId={curCard}
          message={msg}
          error={err}
          onAddItem={onAddItem}
          onCreateCollection={onCreateCollection}
        />
      )}
    </>
  )
}
