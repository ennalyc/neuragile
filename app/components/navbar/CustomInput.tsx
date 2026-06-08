'use client'
import { useState, ChangeEvent, FormEvent } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { useTranslations } from "next-intl"
import { useLocale } from "next-intl"

const CustomInput = () => {
    const t = useTranslations("auth")
    const searchParams = useSearchParams();
    const router = useRouter();
    const [typing, setTyping] = useState('');
     const locale = useLocale();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTyping(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); 
        
        const params = new URLSearchParams(searchParams.toString());
        
        if (typing) {
            params.set('q', typing);
        } else {
            params.delete('q');
        }
        
        router.push(`/${locale}/search?${params.toString()}`);
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <input 
                onChange={handleChange} 
                value={typing} 
                type="text" 
                placeholder={t("navbar")} 
                className="w-3xl h-10 bg-neutral-100 border rounded-sm text-neutral-400 text-sm px-4 border-neutral-200"
            />
            <button className="bg-black rounded-md h-10 w-14 flex justify-center items-center" type="submit">
                <Search size={16} className="text-neutral-100 cursor-pointer transition-colors"/>
            </button>
        </form>
    )
}

export default CustomInput