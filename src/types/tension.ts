import {MusicalNote} from "@/types/music";

export type Tension = {
    unit: TensionUnit
    value: number
}

const TensionUnitNewton = 'Newton'
const TensionUnitPound = 'Pound'
type TensionUnit = typeof TensionUnitNewton | typeof TensionUnitPound

function Tension(unit: TensionUnit, value: number): Tension {
    return {unit, value}
}

function toNewton(tension: Tension): Tension {
    if (tension.unit === TensionUnitNewton) {
        return tension
    }
    return Tension(TensionUnitNewton, tension.value * 4.44822)
}

function toPound(tension: Tension): Tension {
    if (tension.unit === TensionUnitPound) {
        return tension
    }
    return Tension(TensionUnitPound, tension.value / 4.44822)
}

function to(tension: Tension, unit: TensionUnit): Tension {
    if (unit === TensionUnitNewton) {
        return toNewton(tension)
    }
    return toPound(tension)
}

export function tensionOf(gauge: number, note: MusicalNote, scaleLength: number): Tension {
    const frequency = note.frequency
    const mass = Math.pow(gauge / 1000, 2) * scaleLength
    const length = scaleLength
    const tension = Math.pow(frequency, 2) * mass
    return Tension('Newton', tension)
}

export {Tension, TensionUnitNewton, TensionUnitPound, toNewton, toPound, to}