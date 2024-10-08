import _ from 'lodash-es'

export type MusicalNote = {
    name: string
    octave: number
    frequency: number
}

export const MusicalNoteC0 = {name: "C0", octave: 0, frequency: 16.35}
export const MusicalNoteCSharp0 = {name: "C0#", octave: 0, frequency: 17.32}
export const MusicalNoteD0 = {name: "D0", octave: 0, frequency: 18.35}
export const MusicalNoteDSharp0 = {name: "D0#", octave: 0, frequency: 19.45}
export const MusicalNoteE0 = {name: "E0", octave: 0, frequency: 20.6}
export const MusicalNoteF0 = {name: "F0", octave: 0, frequency: 21.83}
export const MusicalNoteFSharp0 = {name: "F0#", octave: 0, frequency: 23.12}
export const MusicalNoteG0 = {name: "G0", octave: 0, frequency: 24.5}
export const MusicalNoteGSharp0 = {name: "G0#", octave: 0, frequency: 25.96}
export const MusicalNoteA0 = {name: "A0", octave: 0, frequency: 27.5}
export const MusicalNoteASharp0 = {name: "A0#", octave: 0, frequency: 29.14}
export const MusicalNoteB0 = {name: "B0", octave: 0, frequency: 30.87}
export const MusicalNoteC1 = {name: "C1", octave: 1, frequency: 32.7}
export const MusicalNoteCSharp1 = {name: "C1#", octave: 1, frequency: 34.65}
export const MusicalNoteD1 = {name: "D1", octave: 1, frequency: 36.71}
export const MusicalNoteDSharp1 = {name: "D1#", octave: 1, frequency: 38.89}
export const MusicalNoteE1 = {name: "E1", octave: 1, frequency: 41.2}
export const MusicalNoteF1 = {name: "F1", octave: 1, frequency: 43.65}
export const MusicalNoteFSharp1 = {name: "F1#", octave: 1, frequency: 46.25}
export const MusicalNoteG1 = {name: "G1", octave: 1, frequency: 49}
export const MusicalNoteGSharp1 = {name: "G1#", octave: 1, frequency: 51.91}
export const MusicalNoteA1 = {name: "A1", octave: 1, frequency: 55}
export const MusicalNoteASharp1 = {name: "A1#", octave: 1, frequency: 58.27}
export const MusicalNoteB1 = {name: "B1", octave: 1, frequency: 61.74}
export const MusicalNoteC2 = {name: "C2", octave: 2, frequency: 65.41}
export const MusicalNoteCSharp2 = {name: "C2#", octave: 2, frequency: 69.3}
export const MusicalNoteD2 = {name: "D2", octave: 2, frequency: 73.42}
export const MusicalNoteDSharp2 = {name: "D2#", octave: 2, frequency: 77.78}
export const MusicalNoteE2 = {name: "E2", octave: 2, frequency: 82.41}
export const MusicalNoteF2 = {name: "F2", octave: 2, frequency: 87.31}
export const MusicalNoteFSharp2 = {name: "F2#", octave: 2, frequency: 92.5}
export const MusicalNoteG2 = {name: "G2", octave: 2, frequency: 98}
export const MusicalNoteGSharp2 = {name: "G2#", octave: 2, frequency: 103.83}
export const MusicalNoteA2 = {name: "A2", octave: 2, frequency: 110}
export const MusicalNoteASharp2 = {name: "A2#", octave: 2, frequency: 116.54}
export const MusicalNoteB2 = {name: "B2", octave: 2, frequency: 123.47}
export const MusicalNoteC3 = {name: "C3", octave: 3, frequency: 130.81}
export const MusicalNoteCSharp3 = {name: "C3#", octave: 3, frequency: 138.59}
export const MusicalNoteD3 = {name: "D3", octave: 3, frequency: 146.83}
export const MusicalNoteDSharp3 = {name: "D3#", octave: 3, frequency: 155.56}
export const MusicalNoteE3 = {name: "E3", octave: 3, frequency: 164.81}
export const MusicalNoteF3 = {name: "F3", octave: 3, frequency: 174.61}
export const MusicalNoteFSharp3 = {name: "F3#", octave: 3, frequency: 185}
export const MusicalNoteG3 = {name: "G3", octave: 3, frequency: 196}
export const MusicalNoteGSharp3 = {name: "G3#", octave: 3, frequency: 207.65}
export const MusicalNoteA3 = {name: "A3", octave: 3, frequency: 220}
export const MusicalNoteASharp3 = {name: "A3#", octave: 3, frequency: 233.08}
export const MusicalNoteB3 = {name: "B3", octave: 3, frequency: 246.94}
export const MusicalNoteC4 = {name: "C4", octave: 4, frequency: 261.63}
export const MusicalNoteCSharp4 = {name: "C4#", octave: 4, frequency: 277.18}
export const MusicalNoteD4 = {name: "D4", octave: 4, frequency: 293.66}
export const MusicalNoteDSharp4 = {name: "D4#", octave: 4, frequency: 311.13}
export const MusicalNoteE4 = {name: "E4", octave: 4, frequency: 329.63}

export const AllNotes = [
    MusicalNoteC0,
    MusicalNoteCSharp0,
    MusicalNoteD0,
    MusicalNoteDSharp0,
    MusicalNoteE0,
    MusicalNoteF0,
    MusicalNoteFSharp0,
    MusicalNoteG0,
    MusicalNoteGSharp0,
    MusicalNoteA0,
    MusicalNoteASharp0,
    MusicalNoteB0,
    MusicalNoteC1,
    MusicalNoteCSharp1,
    MusicalNoteD1,
    MusicalNoteDSharp1,
    MusicalNoteE1,
    MusicalNoteF1,
    MusicalNoteFSharp1,
    MusicalNoteG1,
    MusicalNoteGSharp1,
    MusicalNoteA1,
    MusicalNoteASharp1,
    MusicalNoteB1,
    MusicalNoteC2,
    MusicalNoteCSharp2,
    MusicalNoteD2,
    MusicalNoteDSharp2,
    MusicalNoteE2,
    MusicalNoteF2,
    MusicalNoteFSharp2,
    MusicalNoteG2,
    MusicalNoteGSharp2,
    MusicalNoteA2,
    MusicalNoteASharp2,
    MusicalNoteB2,
    MusicalNoteC3,
    MusicalNoteCSharp3,
    MusicalNoteD3,
    MusicalNoteDSharp3,
    MusicalNoteE3,
    MusicalNoteF3,
    MusicalNoteFSharp3,
    MusicalNoteG3,
    MusicalNoteGSharp3,
    MusicalNoteA3,
    MusicalNoteASharp3,
    MusicalNoteB3,
    MusicalNoteC4,
    MusicalNoteCSharp4,
    MusicalNoteD4,
    MusicalNoteDSharp4,
    MusicalNoteE4
]

export function noteFrom(name: string): MusicalNote {
    return AllNotes.find(note => note.name === name) || MusicalNoteE4
}

export type Tuning = {
    name: string
    notes: MusicalNote[]
}

export const SixStandardETuning: Tuning = {
    name: "Standard E (EADGBE)",
    notes: [MusicalNoteE2, MusicalNoteA2, MusicalNoteD3, MusicalNoteG3, MusicalNoteB3, MusicalNoteE4]
}

export const SixDropDTuning: Tuning = {
    name: "Drop D (DADGBE)",
    notes: [MusicalNoteD2, MusicalNoteA2, MusicalNoteD3, MusicalNoteG3, MusicalNoteB3, MusicalNoteE4]
}

export const SixStandardDTuning: Tuning = {
    name: "Standard D (DGCFAD)",
    notes: [MusicalNoteD2, MusicalNoteG2, MusicalNoteC3, MusicalNoteF3, MusicalNoteA3, MusicalNoteD4]
}

export const SixDropCTuning: Tuning = {
    name: "Drop C (CGCFAD)",
    notes: [MusicalNoteC2, MusicalNoteG2, MusicalNoteC3, MusicalNoteF3, MusicalNoteA3, MusicalNoteD4]
}

export const SevenStandardBTuning: Tuning = {
    name: "Standard 7 B (BEADGBE)",
    notes: [MusicalNoteB1, MusicalNoteE2, MusicalNoteA2, MusicalNoteD3, MusicalNoteG3, MusicalNoteB3, MusicalNoteE4]
}

export const SevenDropATuning: Tuning = {
    name: "Drop A 7 (AEADGBE)",
    notes: [MusicalNoteA1, MusicalNoteE2, MusicalNoteA2, MusicalNoteD3, MusicalNoteG3, MusicalNoteB3, MusicalNoteE4]
}

export const EightStandardFSharpTuning: Tuning = {
    name: "Standard 8 F# (F#BEADGBE)",
    notes: [MusicalNoteFSharp1, MusicalNoteB1, MusicalNoteE2, MusicalNoteA2, MusicalNoteD3, MusicalNoteG3, MusicalNoteB3, MusicalNoteE4]
}

export const AllSixStringTunings = [
    SixStandardETuning,
    SixDropDTuning,
    SixStandardDTuning,
    SixDropCTuning,
]

export const AllSevenStringTunings = [
    SevenStandardBTuning,
    SevenDropATuning,
]

export const AllEightStringTunings = [
    EightStandardFSharpTuning
]

export const AllTunings = _.concat(AllSixStringTunings, AllSevenStringTunings, AllEightStringTunings)

export const CustomTuningName = "Custom Tuning"

function customTuning(notes: MusicalNote[]): Tuning {
    return {
        name: CustomTuningName,
        notes: notes
    }
}

export function tuningFromName(name: string): Tuning {
    return AllTunings.find(tuning => tuning.name === name) || SixStandardETuning
}

export function tuningFromNotes(notes: MusicalNote[]): Tuning {
    return AllTunings.find(tuning => _.isEqual(tuning.notes, notes)) || customTuning(notes)
}

export function defaultTuningOfLength(length: number): Tuning {
    switch (length) {
        case 6:
            return SixStandardETuning
        case 7:
            return SevenStandardBTuning
        case 8:
            return EightStandardFSharpTuning
        default:
            return SixStandardETuning
    }
}

