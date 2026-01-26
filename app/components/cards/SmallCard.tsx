import { Card, SmallCardSize } from '@/app/types/card';
import KanBan from '@/app/assets/agilekanban.png';
import Speaker from '@/app/assets/communication.png';
import Building from '@/app/assets/companybuilding.png';
import Image from "next/image";
import { User } from "lucide-react";

function SmallCard({cardData, state, size}: {cardData: Card, state: boolean, size: SmallCardSize}) {
    
    const sizeConfigs = {
        xs: {
            container: "h-33.75 w-24.5 rounded-xl",
            padding: "px-3 pt-3 mb-1",
            iconSize: 9,
            categoryText: "text-[6px]",
            illusHeight: "h-24",
            kanbanImg: "h-24 bottom-1.5",
            speakerImg: "h-25.5 left-3 bottom-2.5",
            buildingImg: "h-24 left-3.5 bottom-0",
            contentBox: "h-7.5 bottom-3",
            numberText: "text-2xl",
            titleText: "text-[7.7px] w-18",
            gap: "gap-2"
        },
        small: {
            container: "h-45 w-32.5 rounded-2xl",
            padding: "px-4 pt-4 mb-2",
            iconSize: 12,
            categoryText: "text-[8px]",
            illusHeight: "h-32",
            kanbanImg: "h-32 bottom-2",
            speakerImg: "h-34 left-4 bottom-3.5",
            buildingImg: "h-32 left-5 bottom-0",
            contentBox: "h-10 bottom-4",
            numberText: "text-3xl",
            titleText: "text-[11px] w-28",
            gap: "gap-3"
        }
    };

    const s = sizeConfigs[size];

    const cardDetails = [
        {
            type: "Agile Practices",
            color: "bg-gradient-to-br from-[#B3E56D] to-[#51983A]",
            illustration: KanBan,
            imgClass: s.kanbanImg + " object-left"
        },
        {
            type: "Communication and Social Interaction",
            color: "bg-gradient-to-br from-[#0097FE] to-[#0D5AA8]",
            illustration: Speaker,
            imgClass: s.speakerImg + " object-top-left"
        },
        {
            type: "Leadership and Organization",
            color: "bg-gradient-to-br from-[#E4509C] to-[#C91572]",
            illustration: Building,
            imgClass: s.buildingImg
        }
    ];

    const activeDetail = cardDetails.find(c => c.type === cardData.category);

    return (
       <div className={`${s.container} cursor-pointer ${activeDetail?.color} ${state ? '' : 'hover:grayscale-50 grayscale'} overflow-hidden transition-all duration-200`}>
            
            <div className={`${s.padding} cursor-default flex flex-row gap-1 text-white items-center justify-end w-full`}>
                <p className={`${s.categoryText} font-medium`}>{cardData.category}</p>
                <User size={s.iconSize} />
            </div>

            <div className="relative w-full">
                {activeDetail?.illustration && (
                    <div className={`w-full ${s.illusHeight} flex justify-center`}>
                        <Image 
                            src={activeDetail.illustration} 
                            alt="illustration" 
                            className={`relative w-full object-cover ${activeDetail.imgClass}`}
                        />
                    </div>
                )}

                <div className={`w-full ${s.contentBox} absolute`}>
                    {cardData.front.map((dt: any, index: number) => (
                        <div key={index} className={`flex flex-row ${s.gap} font-bold w-full px-5 text-white items-center justify-center`}>
                            <p className={s.numberText}>{dt.cardNum}</p>
                            <p className={`${s.titleText} leading-tight`}>{dt.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SmallCard