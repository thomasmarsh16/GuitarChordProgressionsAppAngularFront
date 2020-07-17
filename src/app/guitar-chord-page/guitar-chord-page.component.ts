import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    console.log(this.chordFilters);
  }

  recordOption(filter: any[]){
    this.chosenFilter = filter;

    console.log(filter);
  }
}
