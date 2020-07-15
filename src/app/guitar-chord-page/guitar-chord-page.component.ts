import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guitar-chord-page',
  templateUrl: './guitar-chord-page.component.html',
  styleUrls: ['./guitar-chord-page.component.css']
})
export class GuitarChordPageComponent implements OnInit {

  public chordCardTitle: string;

  constructor() { 
    this.chordCardTitle = "Pick your chord progression";
  }

  ngOnInit(): void {
  }

}
