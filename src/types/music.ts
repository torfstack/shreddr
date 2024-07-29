export enum MusicalNote {
    A = "A",
    ASharp = "A#",
    B = "B",
    C = "C",
    CSharp = "C#",
    D = "D",
    DSharp = "D#",
    E = "E",
    F = "F",
    FSharp = "F#",
    G = "G",
    GSharp = "G#",
}

export const SixStandardETuning = "Standard (EADGBE)"
export const SixDropDTuning = "DropD (DADGBE)"
export const SixStandardDTuning= "Standard D (DGCFAD)"
export const SixDropCTuning = "DropC (CGCFAD)"
export const SevenStandardTuning = "Standard 7 (BEADGBE)"
export const SevenDropATuning = "DropA 7 (AEADGBE)"

export type Tuning =
    typeof SixStandardETuning |
    typeof SixDropDTuning |
    typeof SixStandardDTuning |
    typeof SixDropCTuning |
    typeof SevenStandardTuning |
    typeof SevenDropATuning

export function MusicalNotes(tuning: Tuning): MusicalNote[] {
    switch (tuning) {
        case SixStandardETuning:
            return [MusicalNote.E, MusicalNote.A, MusicalNote.D, MusicalNote.G, MusicalNote.B, MusicalNote.E]
        case SixDropDTuning:
            return [MusicalNote.D, MusicalNote.A, MusicalNote.D, MusicalNote.G, MusicalNote.B, MusicalNote.E]
        case SixStandardDTuning:
            return [MusicalNote.D, MusicalNote.G, MusicalNote.C, MusicalNote.F, MusicalNote.A, MusicalNote.D]
        case SixDropCTuning:
            return [MusicalNote.C, MusicalNote.G, MusicalNote.C, MusicalNote.F, MusicalNote.A, MusicalNote.D]
        case SevenStandardTuning:
            return [MusicalNote.B, MusicalNote.E, MusicalNote.A, MusicalNote.D, MusicalNote.G, MusicalNote.B, MusicalNote.E]
        case SevenDropATuning:
            return [MusicalNote.A, MusicalNote.E, MusicalNote.A, MusicalNote.D, MusicalNote.G, MusicalNote.B, MusicalNote.E]
    }
}
