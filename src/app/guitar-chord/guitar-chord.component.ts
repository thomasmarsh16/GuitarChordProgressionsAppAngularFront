import { Component, OnInit } from '@angular/core';
import { guitarChord } from '../chord-data/data-interfaces';

import * as d3 from 'd3';


@Component({
  selector: 'app-guitar-chord',
  templateUrl: './guitar-chord.component.html',
  styleUrls: ['./guitar-chord.component.css']
})
export class GuitarChordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
