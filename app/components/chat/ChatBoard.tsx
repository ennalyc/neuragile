'use client'

import { useState, ChangeEvent, FormEvent, useEffect } from "react"
import { sizeConfigs } from "@/app/constants/cardSizeConfig"
import { ChatMessage } from "@/app/types/message"
import { data } from "@/app/constants/cardData"
import Message from "./Message"
import { sendMessage } from "@/app/actions/chat"
import { Send } from "lucide-react"
import { Card } from "@/app/types/card"
import LargeCard from "../cards/FlippableCard"
import { CardMatch } from "@/app/types/message"

export default function ChatBoard() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [selectedCard, setSelectedCard] = useState<Card | null>(null)
    const [activeJustification, setActiveJustification] = useState('')

     const [isMobile, setIsMobile] = useState(false)
    
      useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 600)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
      }, [])
    
    const m = sizeConfigs

    const isEmpty = messages.length === 0

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSelectCard = (cardId: number, justification: string) => {
        const cardMatch = data.find(c => c.id === cardId)
        if (cardMatch) {
            setSelectedCard(cardMatch)
            setActiveJustification(justification)
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return

        const userMsg: ChatMessage = { 
            role: 'user', 
            messageText: input, 
            id: Date.now() 
        }

        setMessages((prev) => [...prev, userMsg])
        const currentInput = input
        setInput('')
        setIsLoading(true)

        try {
            const matches: CardMatch[] = await sendMessage(currentInput)
            
            const aiMsg: ChatMessage = { 
                role: 'ai', 
                messageText: matches.length > 0 
                    ? `I found ${matches.length} card(s) that match your request.` 
                    : "I couldn't find any cards matching that description.",
                matches: matches,
                id: Date.now() + 1 
            }

            setMessages((prev) => [...prev, aiMsg])        

        } catch (error) {
            console.error("Erro ao enviar mensagem:", error)
        } finally {
            setIsLoading(false)
        }
    }
    
    return (
        <div className="md:px-24 mt-8 mb-8 w-full flex flex-col items-center">
            <div className="w-full px-4 md:px-0 max-w-7xl">
                <div className="flex gap-8 flex-col md:flex-row justify-center md:justify-between items-start">
                    <div className="flex w-full md:w-2/3 flex-col">
                        <h3 className="text-2xl mb-6 md:text-3xl font-bold text-left">Chat</h3>
                        <div className='h-126 w-full bg-neutral-100 border flex flex-col justify-between items-center border-neutral-200 rounded-xl p-4'>
                            <div className="w-full flex-1 overflow-y-auto flex flex-col gap-4">
                                {isEmpty ? (
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="w-64 h-10 cursor-default bg-neutral-200 rounded-md text-center text-neutral-400 flex items-center justify-center">
                                            <p>Send a message to start.</p>
                                        </div>
                                    </div>
                                ) : (
                                    messages.map((mes) => (
                                        <div key={mes.id} className={`flex flex-col ${mes.role === 'ai' ? 'items-start' : 'items-end'} w-full`}>
                                            <Message 
                                                messageText={mes.messageText}
                                                role={mes.role}
                                                justificativa=""
                                            />

                                            {mes.role === 'ai' && mes.matches && mes.matches.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mt-2 ml-2">
                                                    {mes.matches.map((match) => {
                                                        const cardName = data.find(c => c.id === match.id)?.front[0].title
                                                        return (
                                                            <div>
                                                                <button
                                                                key={match.id}
                                                                onClick={() => handleSelectCard(match.id, match.justificativa)}
                                                                className={`w-32 text-xs px-3 py-1 rounded-full border transition-all ${
                                                                    selectedCard?.id === match.id 
                                                                    ? "bg-black text-white border-black" 
                                                                    : "bg-white text-neutral-600 border-neutral-300 hover:border-black"
                                                                }`}
                                                            >
                                                                {cardName}
                                                                </button>
                                                        </div>
                                                        )
                                                        
                                                    })}
                                                    {
                                                        mes.matches.map((reason) => (
                                                            selectedCard?.id === reason.id && (
                                                            <Message
                                                            role="ai"
                                                            messageText="REASONING:"
                                                            justificativa={reason.justificativa}
                                                            />
                                                        )
                                                        ))
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    ))
                                )}
                                {isLoading && (
                                    <div className="text-xs text-neutral-400 animate-pulse ml-8">AI is thinking...</div>
                                )}
                            </div>

                            <form className="flex w-full items-center gap-3 mt-4" onSubmit={handleSubmit}>
                                <input 
                                    onChange={(e) => setInput(e.target.value)} 
                                    value={input} 
                                    placeholder="Search for cards..." 
                                    className="w-full h-10 bg-neutral-200 border rounded-sm text-neutral-600 text-sm px-4 border-neutral-200 focus:outline-none focus:ring-1 focus:ring-black"
                                />
                                <button 
                                    disabled={isLoading || !input.trim()}
                                    className="bg-black disabled:bg-neutral-400 w-10 h-10 flex items-center text-white justify-center rounded-md transition-colors"
                                >
                                    <Send size={16}/>
                                </button>
                            </form>
                        </div>
                    </div>
                    {
                        selectedCard ? (
                        <div className="flex flex-col w-1/3">
                        <h3 className="text-2xl mb-6 md:text-3xl font-bold text-left">Card</h3>
                        <LargeCard
                        cardData={selectedCard}
                        size={isMobile ? "large" : "extraLarge"}
                        />
                    </div>): (
                        <div className="flex flex-col w-1/3">
                            <h3 className="text-2xl mb-6 md:text-3xl font-bold text-left">Card</h3>
                            <div className={`${isMobile ? m.large.container : m.extraLarge.container} text-neutral-400 bg-neutral-200 rounded-4xl px-8 flex justify-center items-center text-center`}>
                                <p>No card selected.</p>
                            </div>
                        </div>
                    )
                }
                </div>                
            </div>
        </div>
    )
}