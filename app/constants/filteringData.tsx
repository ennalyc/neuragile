import { User, Users } from "lucide-react";

export const filterTags = [
  { id: 1, key: 'Planning' },
  { id: 2, key: 'Arrangement' },
  { id: 3, key: 'Self-regulation' },
  { id: 4, key: 'Communication' },
];

export const ndTags = [
  { id: 1, key: 'ASD' },
  { id: 2, key: 'ADHD' },
];

export const cardTypes = [
  { id: 1, key: 'Agile Practices', icon: <Users size={16} strokeWidth={2} />, color: 'bg-gradient-to-br from-[#B3E56D] to-[#51983A]' },
  { id: 2, key: 'Communication and Social Interaction', icon: <Users size={16} strokeWidth={2} />, color: 'bg-gradient-to-br from-[#0097FE] to-[#0D5AA8]' },
  { id: 3, key: 'Leadership and Organization', icon: <User size={16} strokeWidth={2} />, color: 'bg-gradient-to-br from-[#E4509C] to-[#C91572]' },
];