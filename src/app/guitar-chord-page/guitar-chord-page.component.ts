import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { chordProgression, progressionOptions, chosenOptions } from '../chord-data/data-interfaces';
import { ProgressionServiceService } from '../services/progression-service.service';

@Component({
  selector: 'app-guitar-chord-page',
  templateUrl: './guitar-chord-page.component.html',
  styleUrls: ['./guitar-chord-page.component.css']
})
export class GuitarChordPageComponent implements OnInit {

  chordCardTitle: string;
  questionOptions: string[];

  progOptions: progressionOptions;
  chosenFilter: chosenOptions;

  chordProgressions: chordProgression [];

  constructor(private cd: ChangeDetectorRef, private progressionApi: ProgressionServiceService ) 
  { 
    this.progressionApi.getProgressionOptions().subscribe(
      progOptions => this.progOptions = progOptions
    );
  }

  ngOnInit(): void {
    this.chordCardTitle = "Pick your chord progression";
    this.questionOptions = ["Pick a genre", "Pick a key"];

    this.chosenFilter = { genresChosen: [""], keysChosen: [""] };
    this.chordProgressions  = [];
  }

  recordOption(filter: any[], catType: string): void{

    if ( catType == "genre")
    {
      this.chosenFilter.genresChosen = filter;
    }
    else if ( catType == "key")
    {
      this.chosenFilter.keysChosen = filter;
    }
  }

  getProgressions(): void
  { 
    this.progressionApi.getProgressions( this.chosenFilter ).subscribe(
      chordProgressions => 
      {
        this.chordProgressions = chordProgressions;
      });
  }
}