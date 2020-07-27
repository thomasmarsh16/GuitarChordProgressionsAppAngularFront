import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { guitarChord, chordProgression, progressionOptions, chosenOptions } from '../chord-data/data-interfaces';
import { ProgressionServiceService } from '../services/progression-service.service';

@Component({
  selector: 'app-guitar-chord-page',
  templateUrl: './guitar-chord-page.component.html',
  styleUrls: ['./guitar-chord-page.component.css']
})
export class GuitarChordPageComponent implements OnInit {

  chordCardTitle: string;
  questionOptions: string[];
  questionCategories: string[];

  chosenFilter: chosenOptions;

  chordProgressions: chordProgression [];
  progOptions: progressionOptions;

  constructor(private _formBuilder: FormBuilder, private progressionApi: ProgressionServiceService) 
  { 
    this.progressionApi.getProgressionOptions().subscribe(
      progOptions => this.progOptions = progOptions
    );
  }

  ngOnInit(): void {
    this.chordCardTitle = "Pick your chord progression";
    
    this.questionCategories = ["genre","key"];
    this.questionOptions = ["Pick a genre", "Pick a key"];

    this.chosenFilter = { genresChosen: [""], keysChosen: [""] };
  }

  recordOption(filter: any[], catType: string){

    if ( catType == "genre")
    {
      this.chosenFilter.genresChosen = filter;
    }
    else if ( catType == "key")
    {
      this.chosenFilter.keysChosen = filter;
    }
  }

  getProgressions()
  {
    this.progressionApi.getProgressions().subscribe(
      chordProgressions => this.chordProgressions = chordProgressions
    );
  }
}