import { User } from "lucide-react";
import { useTranslations } from "next-intl";
import Agile from '@/app/assets/agile.png';
import Speaker2 from '@/app/assets/speaker.png';
import Building2 from '@/app/assets/company.png';

import { sizeConfigs } from "@/app/constants/cardSizeConfig";

const BackCard = ({ cardData, size }: { cardData: any, size: 'small' | 'medium' | 'big' | 'large' | 'extraLarge' }) => {
    const t = useTranslations("HomePage")
    const s = sizeConfigs[size];

    const cardDetails = [
        {
            type: "Agile Practices",
            title: t("cardTypes.agile"),
            color: "bg-linear-to-br bg-linear-45 from-[#B3E56D] to-[#386B28]",
        },
        {
            type: "Communication and Social Interaction",
            title: t("cardTypes.communication"),
            color: "bg-linear-to-br bg-linear-45 from-[#0097FE] to-[#0D5AA8]",
        },
        {
            type: "Leadership and Organization",
            title: t("cardTypes.leadership"),
            color: "bg-linear-to-br bg-linear-45 from-[#E4509C] to-[#C91572]",
        }
    ];


    const activeDetail = cardDetails.find(c => c.type === cardData.category);

  return (
    <div className={`${s.container } cursor-default flex flex-col items-center`}>
        <div className='relative w-full h-full'>
            <div className={`${s.container} absolute bg-neutral-100 flex flex-col items-center`}>
                <div className={`${s.padding} ${s.backHeader} cursor-default flex flex-row gap-2 text-black items-center justify-start w-full`}>
                    <User size={s.iconSize} />
                    <p className={`${s.categoryText} font-medium`}>{activeDetail?.title}</p>
                </div>

                <div className="flex flex-col items-center px-8 gap-2 mt-8">
                    <p className={`font-bold ${s.backTitle}`}>{t("context")}</p>
                    <p className={`${s.backContent} text-left leading-relaxed`}>{cardData.back}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BackCard