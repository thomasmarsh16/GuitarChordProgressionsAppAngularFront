import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { guitarChord } from '../chord-data/data-interfaces';

import * as d3 from 'd3';


@Component({
  selector: 'app-guitar-chord',
  templateUrl: './guitar-chord.component.html',
  styleUrls: ['./guitar-chord.component.css']
})
export class GuitarChordComponent implements OnInit {

  @Input()
  chordID: string;

  margin = {top: 20, right: 20, bottom: 20, left: 20};

  constructor() { }

  ngOnInit(): void {
    this.creatChord();
  }

  onResize( event: any) {
    this.creatChord();
  }

  private creatChord(): void {
    d3.select('svg').remove();

    const data = [-1,0,2,2,1,0];

    const svg = d3.select(this.chordID).append('svg')
          .attr('width', 800)
          .attr('height', 800);

    svg.append('rect')
      .attr('x', 10)
      .attr('y', 120)
      .attr('width', 40)
      .attr('height', 40)
      .attr('stroke', 'black')
      .attr('fill', '#69a3b2');
  }
}