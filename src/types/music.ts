export enum Note {
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

export type Tuning = Note[]

export const SixStandardTuning: Tuning =
    [
        Note.E,
        Note.B,
        Note.G,
        Note.D,
        Note.A,
        Note.E
    ]

export const SixDropDTuning: Tuning =
    [
        Note.E,
        Note.B,
        Note.G,
        Note.D,
        Note.A,
        Note.D
    ]

export const SevenStandardTuning: Tuning =
    [
        Note.E,
        Note.B,
        Note.G,
        Note.D,
        Note.A,
        Note.E,
        Note.B
    ]

export const SevenDropATuning: Tuning =
    [
        Note.E,
        Note.B,
        Note.G,
        Note.D,
        Note.A,
        Note.E,
        Note.A
    ]
