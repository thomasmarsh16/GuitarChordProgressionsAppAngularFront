import { Component, OnInit, Input } from '@angular/core';
import { guitarChord, chordProgression } from '../chord-data/data-interfaces';

@Component({
  selector: 'app-chord-progression',
  templateUrl: './chord-progression.component.html',
  styleUrls: ['./chord-progression.component.css']
})
export class ChordProgressionComponent implements OnInit {

  @Input()
  progression: chordProgression; 

  constructor() { }

  ngOnInit(): void {
  }

}
