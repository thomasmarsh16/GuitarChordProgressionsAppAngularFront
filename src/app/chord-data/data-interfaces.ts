export interface guitarChord {
    note: string;
    BaseFret: number;
    fingerPlacements: string [];
}

export interface chordProgression {
    genre: string;
    key: string;
    progressionStructure: string [];
    chords: guitarChord [];
}