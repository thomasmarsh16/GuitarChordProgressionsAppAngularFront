import { Component, OnInit, Input } from '@angular/core';
import { guitarChord, chordProgression } from '../chord-data/data-interfaces';

@Component({
  selector: 'app-chord-progression',
  templateUrl: './chord-progression.component.html',
  styleUrls: ['./chord-progression.component.css']
})
export class ChordProgressionComponent implements OnInit {

  @Input()
  progression: chordProgression = {genre: "", key: "", progressionStructure: "", chords: [], progressionID: 0}; 

  structureNumerals: string[];

  constructor() 
  { 
  }

  ngOnInit(): void {
    this.structureNumerals = this.progression.progressionStructure.split('-');
  }

}
