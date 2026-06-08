import { X, Plus, Bookmark } from "lucide-react"
import { useState, ChangeEvent, FormEvent } from "react"
import { Collection } from "./CollectionButton"
import { useTranslations } from "next-intl"

interface Props {
  collections: Collection[]
  isOpen: boolean
  onClose: () => void
  cardId: string
  message?: string
  error?: string
  onAddItem: (collectionId: number) => Promise<void>
  onCreateCollection: (name: string) => Promise<void>
}

export default function CollectionModal({
  collections,
  isOpen,
  onClose,
  cardId,
  message,
  error,
  onAddItem,
  onCreateCollection,
}: Props) {
  const [showCreate, setShowCreate] = useState(false)
  const [typing, setTyping] = useState("")
  const t = useTranslations("auth.modal")
  if (!isOpen) return null

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTyping(e.target.value)

  const handleCreateSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!typing.trim()) return
    await onCreateCollection(typing)
    setTyping("")
    setShowCreate(false)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-96  relative gap-2">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-black"
        >
          <X size={16} />
        </button>

        <h4 className="text-md font-bold mb-4">{t("select")}</h4>

        {collections.length === 0 && <p>{t("noSelect")}</p>}

        <div className="flex flex-col gap-2 max-h-100 overflow-y-scroll">
            {collections.map((collection) => (
                <div key={collection.id} className="flex flex-col gap-2">
                    <div
                    onClick={() => onAddItem(collection.id)}
                    className="cursor-pointer flex items-center gap-2 text-neutral-500 w-full h-10 px-3 bg-neutral-200 border-neutral-300 rounded-md"
                    >
                    <Bookmark size={16} />
                    <span>{collection.name}</span>
                    </div>
                </div>
                ))}
        </div>

        {message && <p className="text-green-500 text-sm text-center mt-2">{message}</p>}
        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

        <div
          onClick={() => setShowCreate(!showCreate)}
          className="cursor-pointer hover:text-neutral-500 flex flex-row items-center text-sm mt-4 gap-3 text-neutral-400"
        >
          <Plus size={16} />
          <p>{t("create")}</p>
        </div>

        {showCreate && (
          <form onSubmit={handleCreateSubmit} className="w-full flex flex-row gap-2 mt-2">
            <input
              value={typing}
              onChange={handleChange}
              placeholder="Choose a name"
              className="flex-1 px-3 py-2 border rounded text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-3 py-2 rounded hover:bg-neutral-700 flex items-center gap-2"
            >
              <Bookmark size={16} />
              <span>{t("button")}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
