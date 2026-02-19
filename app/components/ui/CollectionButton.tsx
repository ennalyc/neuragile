"use client"

import { useEffect, useState } from "react"
import { getCollections, addItemToCollection } from "@/app/lib/collections"
import { createCollection } from "@/app/actions/collections"
import CollectionButtonTrigger from "../CollectionButtonTrigger"

export type Collection = { id: number; name: string }

export default function CollectionButton({ curId }: { curId: string }) {
  const [collections, setCollections] = useState<Collection[]>([])
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const fetchCollections = async () => {
    try {
      const data = await getCollections()
      setCollections(data)
    } catch (err: any) {
      setError(err?.message || "Failed to fetch collections")
    }
  }

  useEffect(() => {
    fetchCollections()
  }, [])

  const handleCreateCollection = async (name: string) => {
    try {
      await createCollection(name)
      setMessage(`Collection "${name}" created!`)
      await fetchCollections() 
    } catch (err: any) {
      setError(err?.message || "Failed to create collection")
    }
  }

  const handleAddItem = async (collectionId: number) => {
    try {
      await addItemToCollection(collectionId, curId)
      setMessage("Card added to collection successfully!")
    } catch (err: any) {
      setError(err?.message || "Failed to add card")
    }
  }

  return (
    <CollectionButtonTrigger
      collections={collections}
      curCard={curId}
      message={message}
      error={error}
      onAddItem={handleAddItem}
      onCreateCollection={handleCreateCollection}
    />
  )
}
