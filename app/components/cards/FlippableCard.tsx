'use client'
import { useState } from "react";

import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import { sizeConfigs } from "@/app/constants/cardSizeConfig";

const LargeCard = ({ cardData, size }: { cardData: any, size: 'small' | 'medium' | 'big' | 'large' | 'extraLarge'}) => {
    
    const s = sizeConfigs[size];

    const cardDetails = [
        {
            type: "Agile Practices",
            color: "bg-gradient-to-br from-[#B3E56D] to-[#51983A]",
           
        },
        {
            type: "Communication and Social Interaction",
            color: "bg-gradient-to-br from-[#0097FE] to-[#0D5AA8]",
            
        },
        {
            type: "Leadership and Organization",
            color: "bg-gradient-to-br from-[#E4509C] to-[#C91572]",
           
        }
    ];

    const [isFlipped, setIsFlipped] = useState(false);


    return (
        <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`${s.container} group perspective-1000 cursor-pointer transition-transform duration-300 hover:scale-[1.02]`}
        >
            <div className={`relative w-full h-full transition-transform duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                
                <div className="absolute inset-0 backface-hidden">
                    <FrontCard
                    cardData={cardData}
                    size={size}
                    />
                </div>    

                <div className={`backface-hidden absolute inset-0 rotate-y-180`}>
                    <BackCard
                    cardData={cardData}
                    size={size}
                    />
                </div>
            </div>
        </div>
    );
};

export default LargeCard;