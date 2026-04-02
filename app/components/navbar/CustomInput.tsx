'use client'
import { useState, ChangeEvent, FormEvent } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Send } from "lucide-react"

const CustomInput = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [typing, setTyping] = useState('');

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
        
        router.push(`/search?${params.toString()}`);
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <input 
                onChange={handleChange} 
                value={typing} 
                type="text" 
                placeholder="Search for cards..." 
                className="w-3xl h-10 bg-neutral-100 border rounded-sm text-neutral-400 text-sm px-4 border-neutral-200"
            />
        </form>
    )
}

export default CustomInput