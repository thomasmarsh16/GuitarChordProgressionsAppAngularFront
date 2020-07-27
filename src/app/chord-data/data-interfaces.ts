export interface guitarChord {
    note: string;
    baseFret: number;
    fingerPlacements: number [];
    barre: boolean;
    barreStart: number;
}

export interface chordProgression {
    genre: string;
    key: string;
    progressionStructure: string;
    chords: guitarChord [];
}

export interface progressionOptions {
    genres: string [];
    keys: string [];
}

export interface chosenOptions {
    genresChosen: any [];
    keysChosen: any [];
}