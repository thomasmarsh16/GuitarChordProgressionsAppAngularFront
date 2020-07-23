import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { guitarChord } from '../chord-data/data-interfaces';

import * as d3 from 'd3';


@Component({
  selector: 'app-guitar-chord',
  templateUrl: './guitar-chord.component.html',
  styleUrls: ['./guitar-chord.component.css']
})
export class GuitarChordComponent implements OnInit {

  hostElement;

  @Input()
  chordData : guitarChord;

  constructor(private elRef: ElementRef) { 
    this.hostElement = this.elRef.nativeElement;
  }

  ngOnInit(): void {
    this.creatChord();
  }

  onResize( event: any ) {
    this.creatChord();
  }

  private creatChord(): void {

    let data = [-1,3,3,2,1,0];

    // remove existing chord image
    d3.select(this.hostElement).select('svg').remove();

    // set chart dimensions
    let height = 190;
    let width = 150;

    let svg = d3.select(this.hostElement).append("svg")
          .attr("width", 200)
          .attr("height", 200)
          .attr('viewBox', '0 0 ' + width + ' ' + ( height + 20));

    // add graphics
    let grid = svg.append("g");

    // draw strings and frets
    for( let i = 0; i < 6; i++ ){
      let xSpacing = width / 5;
      grid.append("line")
          .attr("x1", i * xSpacing + 2)
          .attr("y1", 0)
          .attr("x2", i * xSpacing + 2)
          .attr("y2", height)
          .style("stroke","black");
    }

    let fretNumber = 4;

    for( let i = 0; i <= fretNumber; i++ ){
      let ySpacing = height / fretNumber;
      grid.append("line")
          .attr("x1", 0 + 2)
          .attr("y1", i * ySpacing + 1)
          .attr("x2", width + 2)
          .attr("y2", i * ySpacing + 1)
          .style("stroke","black");
    }

    // draw finger placements

    let stringPlacement = d3.scaleLinear()
                          .domain([0,5])
                          .range([0 + 2, width + 2]);

    let fretPlacement = d3.scaleLinear()
                        .domain([0,fretNumber])
                        .range([0-height/fretNumber/3, height-height/fretNumber/3]);

    data.forEach((value,index) => {

      if ( value > -1 ) // if finger placement on the grid then draw otherwise, draw x
      {
        grid.append("circle")
        .attr("cx", stringPlacement(index))
        .attr("cy", fretPlacement(value))
        .attr("r", 10)
        .style("stroke","gray")
        .style("stroke-width", 3);
      }
      else // string should be silent ( apply an X )
      {
        grid.append("text")
            .attr('x', stringPlacement(index) - 5)
            .attr('y', height + 17)
            .attr("stroke","black")
            .style("font-size", 5)
            .text("X");
      }

    } );

    // draw fret numbers on the side
    
      
  }
}