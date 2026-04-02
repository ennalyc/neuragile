export interface CardMatch {
    id: number;
    justificativa: string;
}

export interface ChatMessage {
    id: number;
    role: 'user' | 'ai';
    messageText: string;
    matches?: CardMatch[]; }