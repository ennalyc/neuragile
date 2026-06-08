import KanBan from '@/app/assets/agilekanban.png';
import Speaker from '@/app/assets/communication.png';
import Building from '@/app/assets/companybuilding.png';
import { User } from "lucide-react";
import { useTranslations } from 'next-intl';
import { sizeConfigs } from '@/app/constants/cardSizeConfig';

const FrontCard = ({ cardData, size }: { cardData: any, size: 'small' | 'medium' | 'big' | 'large' | 'extraLarge'}) => {
    const t = useTranslations("HomePage")
    const s = sizeConfigs[size];

    const cardDetails = [
        {
            type: "Agile Practices",
            title: t("cardTypes.agile"),
            color: "bg-linear-to-br bg-linear-45 from-[#B3E56D] to-[#386B28]",
            illustration: KanBan, 
        },
        {
            type: "Communication and Social Interaction",
            title: t("cardTypes.communication"),
            color: "bg-linear-to-br bg-linear-45 from-[#0097FE] to-[#0D5AA8]",
            illustration: Speaker, 
        },
        {
            type: "Leadership and Organization",
            title: t("cardTypes.leadership"),
            color: "bg-linear-to-br bg-linear-45 from-[#E4509C] to-[#C91572]",
            illustration: Building,
        }
    ];

    const activeDetail = cardDetails.find(c => c.type === cardData.category);

    const getDynamicFontSize = (text: string, baseSize: string) => {
        if (text.length > 30) return "text-lg";
        if (text.length > 20) return "text-xl";
        return baseSize;
    };
    
  return (
    <div className={`${s.container } cursor-default flex flex-col items-center`}>
        <div className='relative w-full h-full'>
            <div className={`${activeDetail?.color} ${s.container} absolute inset-0 flex flex-col items-center backface-hidden`}>
                <div className={`px-8 pt-8 mb-2 cursor-default flex flex-row gap-2 text-white items-center justify-end w-full`}>
                    <p className={`${s.categoryText} font-medium`}>{activeDetail?.title}</p>
                    <User size={s.iconSize} />
                </div>

                <div className="relative w-full flex h-98">

                    <div className={`w-full ${s.contentBox} absolute bottom-0`}>
                        {cardData.front.map((dt: any, index: number) => (
                            <div key={index} className="flex flex-col items-center justify-center gap-1 px-8">
                                <div className="flex w-full flex-row ml-2 gap-3 font-bold text-white items-center">
                                    <p className={s.numberText}>{dt.cardNum}</p>
                                    <p className={`${getDynamicFontSize(dt.title, s.titleText)} w-1/2 leading-tight text-left`}>{dt.title}</p>
                                </div>
                                <p className={`${s.bodyText} ml-2 mt-2 font-medium text-white text-left`}>{dt.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FrontCard