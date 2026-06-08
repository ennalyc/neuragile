import CollectionCard from "../ui/CollectionCard"
import { getCollections } from "@/app/lib/collections"
import { logout } from "@/app/actions/logout"
import { LogOut } from "lucide-react"
import { getTranslations } from 'next-intl/server'

const CollectionsSection = async () => {
    const collections = await getCollections()
    const t = await getTranslations("Collections")
    return (
        <div className="w-full">
            <h4 className="font-semibold text-xl my-4">{t("h1")}</h4>
            <div className="w-full flex flex-col h-100 pr-2 overflow-y-scroll gap-y-3">
                {
                collections.length === 0 ? (
                   <div className="h-100 w-full bg-neutral-100 rounded-xl flex justify-center items-center border border-dashed border-neutral-300">
                            <p className="text-neutral-400 text-sm text-center">{t("text")}</p>

                    </div>
                ):(
                    
                    collections.map((coll: any) => (
                    <div key={coll.id}>
                        <CollectionCard
                        title={coll.name}
                        id={coll.id}
                        />
                    </div>
                    
                ))
                )
            }
            </div>
            <form action={logout} className="mt-2 flex justify-end self-end">
                <button type="submit" className="flex gap-3 flex-row items-center rounded-lg cursor-pointer hover:bg-neutral-100 px-6 py-5 w-32 text-neutral-400 border-2 border-neutral-400">
                    <LogOut size={16}/>
                    Logout
                </button>
            </form>
        </div>
    )
}

export default CollectionsSection