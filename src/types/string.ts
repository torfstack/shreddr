import {Note, Tuning} from "@/types/music";

export type TunedGuitarStringSet = {
    strings: GuitarStringSet,
    tuning: Tuning
}

export type TunedGuitarString = {
    gauge: Gauge,
    note: Note
}

export type GuitarStringSet = GuitarString[]

export type GuitarString = {
    gauge: Gauge
}

export type Gauge = number

export const EBRegularSlinky: GuitarStringSet =
   [
        {gauge: 10},
        {gauge: 13},
        {gauge: 17},
        {gauge: 26},
        {gauge: 36},
        {gauge: 46},
    ]

export const EBSuperSlinky: GuitarStringSet =
    [
        {gauge: 9},
        {gauge: 11},
        {gauge: 16},
        {gauge: 24},
        {gauge: 32},
        {gauge: 42},
    ]
