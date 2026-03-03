import { User } from "lucide-react";
import Image from "next/image";

import Agile from '@/app/assets/agile.png';
import Speaker2 from '@/app/assets/speaker.png';
import Building2 from '@/app/assets/company.png';

import { sizeConfigs } from "@/app/constants/cardSizeConfig";

const BackCard = ({ cardData, size }: { cardData: any, size: 'small' | 'medium' | 'big' | 'large' }) => {

    const s = sizeConfigs[size];

    const cardDetails = [
        {
            type: "Agile Practices",
            color: "bg-gradient-to-br from-[#B3E56D] to-[#51983A]",
            backIllustration: Agile,
            imgClass: s.kanbanImg
        },
        {
            type: "Communication and Social Interaction",
            color: "bg-gradient-to-br from-[#0097FE] to-[#0D5AA8]",
            backIllustration: Speaker2,
            imgClass: s.speakerImg
        },
        {
            type: "Leadership and Organization",
            color: "bg-gradient-to-br from-[#E4509C] to-[#C91572]",
            backIllustration: Building2,
            imgClass: s.buildingImg
        }
    ];


    const activeDetail = cardDetails.find(c => c.type === cardData.category);

  return (
    <div className={`${s.container } cursor-default flex flex-col items-center`}>
        <div className='relative w-full h-full'>
            <div className={`${s.container} absolute bg-neutral-100 flex flex-col items-center`}>
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

                    <p className={`font-bold ${s.backTitle}`}>Context:</p>
                    <p className={`${s.backContent} text-left leading-relaxed`}>{cardData.back}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BackCard