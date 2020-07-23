export interface guitarChord {
    note: string;
    baseFret: number;
    fingerPlacements: number [];
}

export interface chordProgression {
    genre: string;
    key: string;
    progressionStructure: string [];
    chords: guitarChord [];
}