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

  @Input()
  chordPosition : string;

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

    // remove existing chord image
    d3.select(this.hostElement).select('svg').remove();

    // set chart dimensions
    let height = 190;
    let width = 150;
    let fretNumber = 4;

    let svg = d3.select(this.hostElement).append("svg")
          .attr("width", 200)
          .attr("height", 200)
          .attr('viewBox', '0 0 ' + (width + 20) + ' ' + ( height + 50));

    // add graphics //
    let grid = svg.append("g");

    // draw strings and frets
    for( let i = 0; i < 6; i++ ){
      let xSpacing = width / 5;
      grid.append("line")
          .attr("x1", i * xSpacing + 2)
          .attr("y1", 20)
          .attr("x2", i * xSpacing + 2)
          .attr("y2", height + 15)
          .style("stroke","black")
          .style("stroke-width", 2);
    }

    for( let i = 0; i <= fretNumber; i++ ){
      let ySpacing = height / fretNumber;

      if ( i == 0 )
      {
        grid.append("line")
        .attr("x1", 0 + 2)
        .attr("y1", i * ySpacing + 24)
        .attr("x2", width + 2)
        .attr("y2", i * ySpacing + 24)
        .style("stroke","black")
        .style("stroke-width", 8);
      }
      else
      {
        grid.append("line")
        .attr("x1", 0 + 2)
        .attr("y1", i * ySpacing + 15)
        .attr("x2", width + 2)
        .attr("y2", i * ySpacing + 15)
        .style("stroke","black");
      }
    }

    // draw finger placements
    let stringPlacement = d3.scaleLinear()
                          .domain([0,5])
                          .range([0 + 2, width + 2]);

    let fretPlacement = d3.scaleLinear()
                        .domain([0,fretNumber])
                        .range([0-height/fretNumber/3, height-height/fretNumber/3]);

    let drawFingerFunction = function (value: number, index: number ) 
    {
      if ( value > -1 ) // if finger placement on the grid then draw, otherwise draw x
      {
        grid.append("circle")
        .attr("cx", stringPlacement(index))
        .attr("cy", fretPlacement(value) + 15)
        .attr("r", 10)
        .attr('fill', 'white')
        .attr("stroke", "black")
        .attr("stroke-width", 5);
      }
      else // string should be silent ( apply an X )
      {
        grid.append("text")
            .attr('x', stringPlacement(index) - 5)
            .attr('y', height + 30)
            .attr("stroke","black")
            .style("font-size", "17px")
            .text("X");
      }
    };

    this.chordData.fingerPlacements.forEach((value, index) => {

      if ( this.chordData.barre ) // if barre chord, then put bar chord on top fret
      {
        // skip finger placements for first fret and draw barre
        grid.append("rect")
            .attr('x', stringPlacement(this.chordData.barreStart) - 10)
            .attr('y', fretPlacement(1) + 5)
            .attr('width', width - stringPlacement(this.chordData.barreStart) + 20)
            .attr('height', 20)
            .attr('rx', 5)
            .attr('ry', 5)
            .attr('stroke', 'black')
            .attr('fill', 'white')
            .attr("stroke-width", 2.5);
        
        if ( value > 1 || value == -1 ){
          drawFingerFunction(value, index);
        }
      }
      else
      {
        if ( value != 0 )
        {
          drawFingerFunction(value, index);
        }
      }
    } );

    // draw fret numbers on the side
    for( let i = 1; i <= 4; i++ ){
      grid.append("text")
        .attr('x', width + 20)
        .attr('y', fretPlacement(i) + 15)
        .attr("stroke","black")
        .style("font-size", "15px")
        .text("(" + ( this.chordData.baseFret + i - 1 ) + ")");
    }

    // draw chord note
    grid.append("text")
        .attr('x', 5)
        .attr('y', 13 )
        .attr('stroke', 'black')
        .style('font-size', "17px")
        .text('( ' + this.chordPosition + ' ) ' + this.chordData.note)
  }
}