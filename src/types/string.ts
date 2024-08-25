import _ from "lodash-es";

export type GuitarString = {
    gauge: number
    plain: boolean
    unitWeight: number
}

export type GuitarStringSet = {
    name: string
    strings: GuitarString[]
}

export const EBRegularSlinky: GuitarStringSet = {
    name: "Regular Slinky (10 - 46)",
    strings: [
        {gauge: 46, plain: false, unitWeight: 0.00038216},
        {gauge: 36, plain: false, unitWeight: 0.00023964},
        {gauge: 26, plain: false, unitWeight: 0.00012671},
        {gauge: 17, plain: true, unitWeight: 0.00006402},
        {gauge: 13, plain: true, unitWeight: 0.00003629},
        {gauge: 10, plain: true, unitWeight: 0.00002215},
    ]
}

export const EBSuperSlinky: GuitarStringSet = {
    name: "Super Slinky (9 - 42)",
    strings: [
        {gauge: 42, plain: false, unitWeight: 0.00033789},
        {gauge: 32, plain: false, unitWeight: 0.00019347},
        {gauge: 24, plain: false, unitWeight: 0.00010857},
        {gauge: 16, plain: true, unitWeight: 0.00005671},
        {gauge: 11, plain: true, unitWeight: 0.00002680},
        {gauge: 9, plain: true, unitWeight: 0.00001794},
    ]
}

export const EBPowerSlinky: GuitarStringSet = {
    name: "Power Slinky (11 - 48)",
    strings: [
        {gauge: 48, plain: false, unitWeight: 0.00041382},
        {gauge: 38, plain: false, unitWeight: 0.00026471},
        {gauge: 28, plain: false, unitWeight: 0.00014666},
        {gauge: 18, plain: true, unitWeight: 0.00007177},
        {gauge: 14, plain: true, unitWeight: 0.00004342},
        {gauge: 11, plain: true, unitWeight: 0.00002680},
    ]
}

export const EBSkinnyTopHeavyBottom: GuitarStringSet = {
    name: "Skinny Top Heavy Bottom (10 - 52)",
    strings: [
        {gauge: 52, plain: false, unitWeight: 0.00048109},
        {gauge: 42, plain: false, unitWeight: 0.00033789},
        {gauge: 30, plain: false, unitWeight: 0.00017236},
        {gauge: 17, plain: true, unitWeight: 0.00006402},
        {gauge: 13, plain: true, unitWeight: 0.00003629},
        {gauge: 10, plain: true, unitWeight: 0.00002215},
    ]
}

export const EB7RegularSlinky: GuitarStringSet = {
    name: "Regular Slinky 7 (10 - 56)",
    strings: [
        {gauge: 56, plain: false, unitWeight: 0.00057598},
        {gauge: 46, plain: false, unitWeight: 0.00038216},
        {gauge: 36, plain: false, unitWeight: 0.00023964},
        {gauge: 26, plain: false, unitWeight: 0.00012671},
        {gauge: 17, plain: true, unitWeight: 0.00006402},
        {gauge: 13, plain: true, unitWeight: 0.00003629},
        {gauge: 10, plain: true, unitWeight: 0.00002215},
    ]
}

export const EB8RegularSlinky: GuitarStringSet = {
    name: "Regular Slinky 8 (10 - 74)",
    strings: [
        {gauge: 74, plain: false, unitWeight: 0.00098869},
        {gauge: 58, plain: false, unitWeight: 0.00062000},
        {gauge: 44, plain: false, unitWeight: 0.00035182},
        {gauge: 32, plain: false, unitWeight: 0.00019347},
        {gauge: 24, plain: false, unitWeight: 0.00010857},
        {gauge: 16.5, plain: true, unitWeight: 0.00006150}, // check again
        {gauge: 13, plain: true, unitWeight: 0.00003629},
        {gauge: 10, plain: true, unitWeight: 0.00002215},
    ]
}

export const AllSixStringSets = [
    EBRegularSlinky,
    EBSuperSlinky,
    EBPowerSlinky,
    EBSkinnyTopHeavyBottom,
]

export const AllSevenStringSets = [
    EB7RegularSlinky,
]

export const AllEightStringSets = [
    EB8RegularSlinky,
]

export const AllStringSets = _.concat(AllSixStringSets, AllSevenStringSets, AllEightStringSets)

export function guitarStringSetFrom(name: string): GuitarStringSet {
    return AllStringSets.find((set) => set.name === name) || EBRegularSlinky
}

export const CustomStringSetName = "Custom Set"

export function defaultStringSetOfLength(length: number): GuitarStringSet {
    switch (length) {
        case 6:
            return EBRegularSlinky
        case 7:
            return EB7RegularSlinky
        case 8:
            return EB8RegularSlinky
        default:
            return EBRegularSlinky
    }
}