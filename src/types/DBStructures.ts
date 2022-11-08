export type ItemDB = {
    id: number,
    name: string,
    description: string,
    price: number,
    pk_user: string
};

export type Item = {
    id: number,
    name: string,
    description: string,
    price: number,
    groups: string[],
    renter: string,
    images: string[]
}

export type ImageDB = {
    url: string,
    fk_item: number
};

export type GroupDB = {
    title: string
}

export type ItemGroupDB = {
    fk_item: number,
    fk_group: string
}

export type UserDB = {
    name: string,
    password: string,
    role: string,
}

export type User = {
    name: string,
    role: string
}

export type ReviewDB = {
    id: number,
    fk_reviewer: string,
    fk_renter: string,
    review: string
}