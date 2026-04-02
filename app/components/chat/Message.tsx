interface MessageProps {
    role: 'user' | 'ai';
    messageText: any;
    justificativa?: string;
}

const Message = ({ role, messageText, justificativa }: MessageProps) => {
    if (role === 'user') {
        return (
            <div className="bg-neutral-300 text-neutral-500 px-4 py-2 rounded-2xl rounded-tr-none max-w-[85%] text-sm">
                {messageText}
            </div>
        );
    }

    const items = Array.isArray(messageText) ? messageText : [];
    
    return (
        <div className="bg-white border border-neutral-200 px-4 py-2 rounded-2xl rounded-tl-none max-w-[90%]">
            <p className="text-xs font-bold text-neutral-500 mb-3 tracking-wider">{messageText}</p>
            <p className="text-xs font-bold text-neutral-500 mb-3 tracking-wider">{justificativa}</p>
        </div>
    );
};

export default Message;