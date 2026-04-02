import { Card, SmallCardSize } from '@/app/types/card';
import KanBan from '@/app/assets/agilekanban.png';
import Speaker from '@/app/assets/communication.png';
import Building from '@/app/assets/companybuilding.png';
import Image from "next/image";
import { User } from "lucide-react";

function SmallCard({cardData, state, size}: {cardData: Card, state: boolean, size: SmallCardSize}) {
    
    const sizeConfigs = {
        xxs: {
            container: "h-28.75 w-19.5 rounded-xl",
            padding: "px-3 pt-3 mb-1",
            iconSize: 9,
            categoryText: "text-[6px]",
            size: 'h-18'
        },
        xs: {
            container: "h-33.75 w-24.5 rounded-xl",
            padding: "px-3 pt-3 mb-1",
            iconSize: 9,
            categoryText: "text-[6px]",
            size: 'h-22',
        },
        small: {
            container: "h-45 w-32.5 rounded-2xl",
            padding: "px-4 pt-4 mb-2",
            iconSize: 12,
            categoryText: "text-[8px]",
            size: 'h-24',
        },
        medium: {
            container: "h-48 w-35.5 rounded-2xl",
            padding: "px-2 pt-4 mb-2",
            iconSize: 12,
            categoryText: "text-[8px]",
            size: 'h-28',
        }
    };

    const s = sizeConfigs[size];

    const cardDetails = [
        {
            type: "Agile Practices",
            color: "bg-gradient-to-br from-[#B3E56D] to-[#51983A]",
            illustration: KanBan,
        },
        {
            type: "Communication and Social Interaction",
            color: "bg-gradient-to-br from-[#0097FE] to-[#0D5AA8]",
            illustration: Speaker,
        },
        {
            type: "Leadership and Organization",
            color: "bg-gradient-to-br from-[#E4509C] to-[#C91572]",
            illustration: Building,
        }
    ];

    const activeDetail = cardDetails.find(c => c.type === cardData.category);

    return (
       <div className={`${s.container} cursor-pointer ${activeDetail?.color} ${state ? '' : 'hover:grayscale-50 grayscale'} overflow-hidden transition-all duration-200`}>
            
            <div className={`${s.padding} cursor-default flex flex-row gap-1 text-white items-center justify-end w-full`}>
                <p className={`${s.categoryText} font-medium`}>{cardData.category}</p>
                <User size={s.iconSize} />
            </div>

            <div className="flex w-full">
                <div className={`w-full ${s.size} flex flex-col justify-end`}>
                    {cardData.front.map((dt: any, index: number) => (
                        <div key={index} className={`flex flex-col font-bold w-full px-2.5 text-white items-start justify-center`}>
                            <p className={`${size === 'xxs' ? 'text-xl': 'text-2xl'}`}>{dt.cardNum}</p>
                            <p className={`${size === 'xxs' ? 'text-[8px]' : 'text-xs'} max-w-22 leading-tight`}>{dt.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SmallCard