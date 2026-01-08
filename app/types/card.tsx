export type CardFront = {
    cardNum: string,
    title: string,
    text: string,
}

export type Card = {
    id: number,
    category: string,
    relatedND: string[],
    relatedCP: string[],
    front: CardFront[],
    back: string,
}