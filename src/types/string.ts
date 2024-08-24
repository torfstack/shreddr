export type GuitarString = {
    gauge: number
    plain: boolean
}

export type GuitarStringSet = {
    name: string
    strings: GuitarString[]
}

export const EBRegularSlinky: GuitarStringSet = {
    name: "Regular Slinky (10 - 46)",
    strings: [
        {gauge: 46, plain: false},
        {gauge: 36, plain: false},
        {gauge: 26, plain: false},
        {gauge: 17, plain: true},
        {gauge: 13, plain: true},
        {gauge: 10, plain: true},
    ]
}

export const EBSuperSlinky: GuitarStringSet = {
    name: "Super Slinky (9 - 42)",
    strings: [
        {gauge: 42, plain: false},
        {gauge: 32, plain: false},
        {gauge: 24, plain: false},
        {gauge: 16, plain: true},
        {gauge: 11, plain: true},
        {gauge: 9, plain: true},
    ]
}

export const EBPowerSlinky: GuitarStringSet = {
    name: "Power Slinky (11 - 48)",
    strings: [
        {gauge: 48, plain: false},
        {gauge: 38, plain: false},
        {gauge: 28, plain: false},
        {gauge: 18, plain: true},
        {gauge: 14, plain: true},
        {gauge: 11, plain: true},
    ]
}

export const EBSkinnyTopHeavyBottom: GuitarStringSet = {
    name: "Skinny Top Heavy Bottom (10 - 52)",
    strings: [
        {gauge: 52, plain: false},
        {gauge: 38, plain: false},
        {gauge: 28, plain: false},
        {gauge: 17, plain: true},
        {gauge: 13, plain: true},
        {gauge: 10, plain: true},
    ]
}

export function guitarStringSetFrom(name: string): GuitarStringSet {
    switch (name) {
        case EBRegularSlinky.name:
            return EBRegularSlinky
        case EBSuperSlinky.name:
            return EBSuperSlinky
        case EBPowerSlinky.name:
            return EBPowerSlinky
        case EBSkinnyTopHeavyBottom.name:
            return EBSkinnyTopHeavyBottom
        default:
            return EBRegularSlinky
    }
}
