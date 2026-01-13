import { User, Users } from "lucide-react";

export const filterTags = [
    {
        id: 1,
        title: 'Planejamento'
    },
    {
        id: 2,
        title: 'Organização'
    },
    {
        id: 3,
        title: 'Auto-regulação'
    },
    {
        id: 4,
        title: 'Comunicação'
    }
];

export const ndTags = [
    {
        id: 1,
        title: 'TEA'
    },
    {
        id: 2,
        title: 'TDAH'
    }
];

export const cardTypes = [
    {
        id: 1,
        title: 'Práticas Ágeis',
        icon: <Users size={16} strokeWidth={2}/>,
        color: 'bg-gradient-to-br from-lime-300 to-lime-700'
    },
    {
        id: 2,
        title: 'Comunicação e Socialização',
        icon: <Users size={16} strokeWidth={2}/>,
        color: 'bg-gradient-to-br from-sky-500 to-sky-800'
    },
    {
        id: 3,
        title: 'Liderança e Empresa',
        icon: <User size={16} strokeWidth={2}/>,
        color: 'bg-gradient-to-br from-pink-500 to-pink-800'
    }
]

