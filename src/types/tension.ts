import {MusicalNote} from "@/types/music";
import {GuitarString} from "@/types/string";

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

export function tensionOf(string: GuitarString, note: MusicalNote, scaleLength: number): Tension {
    const frequency = note.frequency
    const weight = string.unitWeight
    const tension = (weight * Math.pow(frequency * scaleLength * 2, 2)) / 386.4
    return Tension(TensionUnitPound, tension)
}

export function tensionOfStrings(strings: GuitarString[], notes: MusicalNote[], scaleLength: number): Tension {
    const tensions = strings.map((string, index) => tensionOf(string, notes[index], scaleLength))
    const totalTension = tensions.reduce((total, tension) => total + tension.value, 0)
    return Tension(TensionUnitPound, totalTension)
}

export {Tension, TensionUnitNewton, TensionUnitPound, toNewton, toPound, to}