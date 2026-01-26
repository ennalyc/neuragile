import { User, Users } from "lucide-react";
import KanBan from '@/app/assets/agilekanban.png';
import Speaker from '@/app/assets/communication.png';
import Building from '@/app/assets/companybuilding.png';

import Agile from '@/app/assets/agile.png';
import Speaker2 from '@/app/assets/speaker.png';
import Building2 from '@/app/assets/company.png';

import { sizeConfigs } from "./cardSizeConfig";

export const filterTags = [
    {
        id: 1,
        title: 'Planning'
    },
    {
        id: 2,
        title: 'Arrangement'
    },
    {
        id: 3,
        title: 'Self-regulation'
    },
    {
        id: 4,
        title: 'Communication'
    }
];

export const ndTags = [
    {
        id: 1,
        title: 'ASD'
    },
    {
        id: 2,
        title: 'ADHD'
    }
];

export const cardTypes = [
    {
        id: 1,
        title: 'Agile Practices',
        icon: <Users size={16} strokeWidth={2}/>,
        color: 'bg-gradient-to-br from-[#B3E56D] to-[#51983A]'
    },
    {
        id: 2,
        title: 'Communication and Social Interaction',
        icon: <Users size={16} strokeWidth={2}/>,
        color: 'bg-gradient-to-br from-[#0097FE] to-[#0D5AA8]'
    },
    {
        id: 3,
        title: 'Leadership and Organization',
        icon: <User size={16} strokeWidth={2}/>,
        color: 'bg-gradient-to-br from-[#E4509C] to-[#C91572]'
    }
]
