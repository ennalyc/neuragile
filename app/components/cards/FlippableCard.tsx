'use client'
import { useState } from "react";

import KanBan from '@/app/assets/agilekanban.png';
import Speaker from '@/app/assets/communication.png';
import Building from '@/app/assets/companybuilding.png';

import Agile from '@/app/assets/agile.png';
import Speaker2 from '@/app/assets/speaker.png';
import Building2 from '@/app/assets/company.png';

import { User } from "lucide-react";
import Image from "next/image";

import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import { sizeConfigs } from "@/app/constants/cardSizeConfig";

const LargeCard = ({ cardData, size }: { cardData: any, size: 'small' | 'medium' | 'big' | 'large' }) => {
    
    const s = sizeConfigs[size];

    const cardDetails = [
        {
            type: "Agile Practices",
            color: "bg-gradient-to-br from-[#B3E56D] to-[#51983A]",
            illustration: KanBan, 
            backIllustration: Agile,
            imgClass: s.kanbanImg
        },
        {
            type: "Communication and Social Interaction",
            color: "bg-gradient-to-br from-[#0097FE] to-[#0D5AA8]",
            illustration: Speaker, 
            backIllustration: Speaker2,
            imgClass: s.speakerImg
        },
        {
            type: "Leadership and Organization",
            color: "bg-gradient-to-br from-[#E4509C] to-[#C91572]",
            illustration: Building,
            backIllustration: Building2,
            imgClass: s.buildingImg
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