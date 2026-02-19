'use client'
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const BackButton = () => {
    const router = useRouter()
    return (
        <div className="h-2 cursor-pointer">
            <ChevronLeft
            size={16}
            onClick={() => router.back()}
            />
        </div>
    )
}

export default BackButton