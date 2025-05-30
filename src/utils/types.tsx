export type Item = {
    id: string,
    name: string,
    logoName?: string,
    urlImg?: string,
    knowledge: number,
}

export type Category = {
    id: string,
    name: string,
    selected: boolean
}