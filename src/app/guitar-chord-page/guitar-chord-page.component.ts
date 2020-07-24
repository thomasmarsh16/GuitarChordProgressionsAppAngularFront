import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { guitarChord, chordProgression } from '../chord-data/data-interfaces';

@Component({
  selector: 'app-guitar-chord-page',
  templateUrl: './guitar-chord-page.component.html',
  styleUrls: ['./guitar-chord-page.component.css']
})
export class GuitarChordPageComponent implements OnInit {

  chordCardTitle: string;
  questionOptions: string[];
  questionCategories: string[];
  optionMap: Map<string,string[]>;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  chordFilters: string[];
  chosenFilter: any[] = [];

  testProgression: chordProgression = {
    genre: "latin",
    key: "F",
    progressionStructure: "I-VI-V-I",
    chords: [ { note:"F major",
                barre: true,
                barreStart: 0,
                baseFret: 1,
                fingerPlacements: [0,3,3,2,0,0]
              },
              {note:"A minor",
              barre: false,
              barreStart: 1,
              baseFret: 1,
              fingerPlacements: [-1,0,2,2,1,0]},
              {note:"E minor",
              barre: false,
              barreStart: 1,
              baseFret: 1,
              fingerPlacements: [0,2,2,0,0,0]},
              { note:"F major",
                barre: true,
                barreStart: 0,
                baseFret: 1,
                fingerPlacements: [0,3,3,2,0,0]
              }
            ]
  };

  constructor(private _formBuilder: FormBuilder) { 
    this.chordCardTitle = "Pick your chord progression";
    
    this.questionCategories = ["genre","key","progression"];
    this.questionOptions = ["Pick a genre", "Pick a key", "Pick a chord progression"];
    this.optionMap = new Map([["genre", ["Jazz","Rock","Latin"]], ["key",["A","B","C"]], ["progression",["I-VI-V","I-IV-V"]]]);

  }

  ngOnInit(): void {
  }

  updateChordsShown(array: any[]){
    this.chordFilters = array;
  }

  recordOption(filter: any[]){
    this.chosenFilter = filter;
  }
}
