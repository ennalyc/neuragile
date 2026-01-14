'use client'
import { useState } from "react";

import KanBan from '@/app/assets/agilekanban.png';
import Speaker from '@/app/assets/communication.png';
import Building from '@/app/assets/companybuilding.png';

import Agile from '@/app/assets/agile.png';
import Speaker2 from '@/app/assets/speaker.png';
import Building2 from '@/app/assets/company.png';

import { Card, CardSize } from "../../types/card";
import { User } from "lucide-react";
import Image from "next/image";

const LargeCard = ({ cardData, size }: { cardData: any, size: 'small' | 'medium' | 'big' | 'large' }) => {
    const sizeConfigs = {
        small: {
            container: "h-55 w-40 rounded-2xl",
            padding: "px-4 pt-4 mb-2",
            iconSize: 10,
            categoryText: "text-[8px]",
            illusContainer: "h-45 bottom-1",
            kanbanImg: "h-40 bottom-6 w-full left-1/2 -translate-x-1/2",
            speakerImg: "h-58 bottom-6 w-full left-1/2 -translate-x-1/2",
            buildingImg: "h-62 bottom-8 w-full left-1/2 -translate-x-1/2",
            contentBox: "h-27 bottom-1",
            numberText: "text-3xl",
            titleText: "text-sm",
            bodyText: "text-[6px] leading-tight",
            backHeader: "mb-2",
            backIllustration: "h-8",
            backTitle: "text-sm",
            backContent: "text-[7px]"
        },
        medium: {
            container: "h-82.5 w-60.5 rounded-3xl",
            padding: "px-6 pt-6 mb-4",
            iconSize: 12,
            categoryText: "text-xs",
            illusContainer: "h-67.5 bottom-1.5",
            kanbanImg: "h-63.75 bottom-9 w-full left-1/2 -translate-x-1/2",
            speakerImg: "h-92 bottom-9 w-full left-1/2 -translate-x-1/2",
            buildingImg: "h-98 bottom-12 w-full left-1/2 -translate-x-1/2",
            contentBox: "h-40.5 bottom-1.5",
            numberText: "text-4xl",
            titleText: "text-xl",
            bodyText: "text-[9px]",
            backHeader: "mb-3",
            backIllustration: "h-12",
            backTitle: "text-lg",
            backContent: "text-[9px]"
        },
        big: {
            container: "h-99 w-72.5 rounded-[36px] overflow-hidden",
            padding: "px-7 pt-7 mb-4",
            iconSize: 14,
            categoryText: "text-sm",
            illusContainer: "h-60 bottom-1.8",
            kanbanImg: "h-60 bottom-4 w-full left-8 -translate-x-2",
            speakerImg: "h-112 bottom-10.8 w-full left-1/2 -translate-x-1/2",
            buildingImg: "h-118 bottom-14.4 w-full left-1/2 -translate-x-1/2",
            contentBox: "h-50 bottom-1.8",
            numberText: "text-5xl",
            titleText: "text-xl",
            bodyText: "text-[10px]",
            backHeader: "mb-3.5",
            backIllustration: "h-14",
            backTitle: "text-xl",
            backContent: "text-[10px]"
        },
        large: {
            container: "h-110.25 w-80.75 rounded-4xl overflow-hidden",
            padding: "px-8 pt-8 mb-3",
            iconSize: 16,
            categoryText: "text-sm",
            illusContainer: "h-90 bottom-2",
            kanbanImg: "h-90 bottom-24 w-full left-9 -translate-x-2",
            speakerImg: "h-80 bottom-12 w-full left-10 -translate-x-2",
            buildingImg: "h-90 bottom-10 w-full left-10 -translate-x-2",
            contentBox: "h-54 bottom-2",
            numberText: "text-6xl",
            titleText: "text-2xl",
            bodyText: "text-xs",
            backHeader: "mb-2",
            backIllustration: "h-16",
            backTitle: "text-xl",
            backContent: "text-[11px]"
        }
    };

    const s = sizeConfigs[size];

    const cardDetails = [
        {
            type: "Práticas Ágeis",
            color: "bg-gradient-to-br from-lime-300 to-lime-700",
            illustration: KanBan, 
            backIllustration: Agile,
            imgClass: s.kanbanImg
        },
        {
            type: "Comunicação e Socialização",
            color: "bg-gradient-to-br from-sky-500 to-sky-800",
            illustration: Speaker, 
            backIllustration: Speaker2,
            imgClass: s.speakerImg
        },
        {
            type: "Liderança e Empresa",
            color: "bg-gradient-to-br from-pink-500 to-pink-800",
            illustration: Building,
            backIllustration: Building2,
            imgClass: s.buildingImg
        }
    ];

    const activeDetail = cardDetails.find(c => c.type === cardData.category);
    const [isFlipped, setIsFlipped] = useState(false);

    const getDynamicFontSize = (text: string, baseSize: string) => {
        if (text.length > 30) return "text-lg";
        if (text.length > 20) return "text-xl";
        return baseSize;
    };

    return (
        <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`${s.container} perspective cursor-pointer flex flex-col items-center transition-transform duration-300 hover:scale-[1.02]`}
        >
            <div className={`relative w-full h-full duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                <div className={`${activeDetail?.color} ${s.container} absolute inset-0 flex flex-col items-center backface-hidden`}>
                    <div className={`px-8 pt-8 mb-2 cursor-default flex flex-row gap-2 text-white items-center justify-end w-full`}>
                        <p className={`${s.categoryText} font-medium`}>{cardData.category}</p>
                        <User size={s.iconSize} />
                    </div>

                    <div className="relative w-full flex-1">
                        <div className={`w-full ${s.illusContainer} absolute top-0 left-0`}>
                            {activeDetail?.illustration && (
                                <Image
                                    src={activeDetail.illustration}
                                    alt="illustration"
                                    className={`absolute object-contain object-bottom ${activeDetail.imgClass}`}
                                />
                            )}
                        </div>

                        <div className={`w-full ${s.contentBox} absolute bottom-0`}>
                            {cardData.front.map((dt: any, index: number) => (
                                <div key={index} className="flex flex-col items-center justify-center gap-1 px-8">
                                    <div className="flex flex-row ml-2 gap-3 font-bold text-white items-center justify-center">
                                        <p className={s.numberText}>{dt.cardNum}</p>
                                        <p className={`${getDynamicFontSize(dt.title, s.titleText)} w-1/2 leading-tight text-left`}>{dt.title}</p>
                                    </div>
                                    <p className={`${s.bodyText} ml-2 mt-2 font-medium text-white text-left`}>{dt.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className={`backface-hidden inset-0 ${s.container} absolute bg-neutral-100 flex flex-col items-center rotate-y-180`}>
                    <div className={`${s.padding} ${s.backHeader} cursor-default flex flex-row gap-2 text-black items-center justify-start w-full`}>
                        <User size={s.iconSize} />
                        <p className={`${s.categoryText} font-medium`}>{cardData.category}</p>
                    </div>

                    <div className="flex flex-col items-center px-8 gap-2 mt-1">
                        <div className="w-full flex justify-center">
                            {activeDetail?.backIllustration && (
                                <Image 
                                    className={`${s.backIllustration} w-auto object-contain`} 
                                    src={activeDetail.backIllustration} 
                                    alt="category-icon" 
                                />
                            )}
                        </div>

                        <p className={`font-bold ${s.backTitle}`}>Contexto:</p>
                        <p className={`${s.backContent} text-left leading-relaxed`}>{cardData.back}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LargeCard;