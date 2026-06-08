import SavedCardsSection from "@/app/components/sections/SavedCardsSection"
import CollectionsSection from "@/app/components/sections/CollectionsSection"
import { useTranslations } from "next-intl"

const ProfilePage = () => {
  const t = useTranslations("ProfilePage")
  return (
    <div className="flex md:px-24 px-4 justify-center mt-8">
      <div className="w-full max-w-7xl">
          <h3 className="font-bold text-3xl">{t("h1")}</h3>
          <div className="flex flex-col md:flex-row gap-x-6">
            <section className="w-full md:w-1/2">
              <SavedCardsSection/>
            </section>
            <section className="w-full md:w-1/2">
              <CollectionsSection/>
            </section>
          </div>
      </div>
    </div>
  )
}

export default ProfilePage