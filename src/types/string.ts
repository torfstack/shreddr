import {Note, Tuning} from "@/types/music";

export type TunedGuitarStringSet = {
    strings: GuitarStringSet,
    tuning: Tuning
}

export type TunedGuitarString = {
    gauge: Gauge,
    note: Note
}

export type GuitarString = {
    gauge: Gauge
}

export type Gauge = number

export const EBRegularSlinky = "Regular Slinky (10 - 46)"
export const EBSuperSlinky = "Super Slinky (9 - 42)"
export const EBPowerSlinky = "Power Slinky (11 - 48)"
export const EBSkinnyTopHeavyBottom = "Skinny Top Heavy Bottom (10 - 52)"

export type GuitarStringSet =
    typeof EBRegularSlinky |
    typeof EBSuperSlinky |
    typeof EBPowerSlinky |
    typeof EBSkinnyTopHeavyBottom

export function Gauges(stringSet: GuitarStringSet): GuitarString[] {
    switch (stringSet) {
        case EBRegularSlinky:
            return [
                {gauge: 10},
                {gauge: 13},
                {gauge: 17},
                {gauge: 26},
                {gauge: 36},
                {gauge: 46}
            ]
        case EBSuperSlinky:
            return [
                {gauge: 9},
                {gauge: 11},
                {gauge: 16},
                {gauge: 24},
                {gauge: 32},
                {gauge: 42}
            ]
        case EBPowerSlinky:
            return [
                {gauge: 11},
                {gauge: 14},
                {gauge: 18},
                {gauge: 28},
                {gauge: 38},
                {gauge: 48}
            ]
        case EBSkinnyTopHeavyBottom:
            return [
                {gauge: 10},
                {gauge: 13},
                {gauge: 17},
                {gauge: 30},
                {gauge: 42},
                {gauge: 52}
            ]
    }
}
