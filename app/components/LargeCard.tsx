'use client'
import { useState } from "react";

import KanBan from '@/app/assets/agilekanban.png';
import Speaker from '@/app/assets/communication.png';
import Building from '@/app/assets/companybuilding.png';

import Agile from '@/app/assets/agile.png';
import Speaker2 from '@/app/assets/speaker.png';
import Building2 from '@/app/assets/company.png';


import { Card } from "../types/card";
import { User } from "lucide-react";
import Image from "next/image";

const LargeCard = ({cardData}: {cardData: Card}) => {
    const cardDetails = [
        {
            id: 1,
            type: "Práticas Ágeis",
            color: "bg-gradient-to-br from-lime-300 to-lime-700",
            illustration: KanBan
        },
        {
            id: 2,
            type: "Comunicação e Socialização",
            color: "bg-gradient-to-br from-sky-500 to-sky-800",
            illustration: Speaker
        },
        {
            id: 3,
            type: "Liderança e Empresa",
            color: "bg-gradient-to-br from-pink-500 to-pink-800",
            illustration: Building
        }
    ]
    const cardColor = cardDetails.find(c => c.type === cardData.category)?.color
    const cardIllustration = cardDetails.find(c => c.type === cardData.category)?.illustration

    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div onClick={() => setIsFlipped(!isFlipped)} className={`h-170.25 w-120.75 perspective cursor-pointer rounded-4xl flex flex-col items-center`}>
           <div className={`relative w-full h-full duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                <div id="front" className={`${cardColor && cardColor} rounded-4xl absolute inset-0 flex flex-col items-center backface-hidden`}>
                    <div className="p-8 cursor-default flex flex-row gap-2 text-white items-center justify-end w-full">
                        <p className="text-xl font-medium">{cardData.category}</p>
                        <User size={24}/>
                    </div>
                    <div className="relative w-full bottom-2">
                        <div className="w-full h-135 flex justify-center overflow-hidden">
                        {
                        cardIllustration && (
                            <Image src={cardIllustration} alt="illustration" className={`object-cover ${cardIllustration === KanBan ? 'h-115 object-left bottom-10' : cardIllustration === Speaker ? 'h-130 object-top-left left-17 bottom-12' : 'h-135 left-17 bottom-16'} relative w-full`}/>
                        )
                        }
                        </div>
                        <div className="w-full h-72 absolute bottom-2">
                            {
                                cardData.front.map((dt, index) => (
                                    <div key={index} className="flex flex-col items-center gap-3">
                                        <div className="flex flex-row gap-3 font-bold w-full text-white items-center justify-center">
                                        <p className="text-8xl">{dt.cardNum}</p>
                                        <p className="text-5xl w-1/2">{dt.title}</p>
                                        </div>
                                        <p className="text-lg text-left font-medium px-8 text-white">{dt.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div id="back" className="backface-hidden inset-0 rounded-4xl  absolute bg-linear-to-br from-neutral-50 to-neutral-200 flex flex-col items-center rotate-y-180">
                    <div className="p-8 cursor-default flex flex-row gap-2 text-black items-center justify-start w-full">
                        <User size={24}/>
                        <p className="text-xl font-medium">{cardData.category}</p>
                    </div> 
                    <div>
                        {
                            cardIllustration && (
                                <Image className="h-24 w-full object-cover" src={cardIllustration === KanBan ? Agile : cardIllustration === Speaker ? Speaker2 : Building2} alt="image"/>
                            )
                        }
                    </div> 
                    <div className="flex flex-col items-center px-8 gap-3">
                        <p className="font-bold text-3xl">Contexto:</p>
                        <p>{cardData.back}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LargeCard;