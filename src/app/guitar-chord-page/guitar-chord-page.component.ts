import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { chordProgression, progressionOptions, chosenOptions } from '../chord-data/data-interfaces';
import { ProgressionServiceService } from '../services/progression-service.service';
import { GoogleauthService } from '../services/google-auth.service';
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-guitar-chord-page',
  templateUrl: './guitar-chord-page.component.html',
  styleUrls: ['./guitar-chord-page.component.css']
})
export class GuitarChordPageComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;

  chordCardTitle: string;
  questionOptions: string[];

  progOptions: progressionOptions;
  chosenFilter: chosenOptions;

  chordProgressions: chordProgression [];

  savedUserProgressions: chordProgression [];

  constructor(private cd: ChangeDetectorRef, private progressionApi: ProgressionServiceService, private googleAuth: GoogleauthService ) 
  { 
    this.progressionApi.getProgressionOptions().subscribe(
      progOptions => this.progOptions = progOptions
    );
  }

  ngOnInit(): void {
    this.googleAuth.authService.authState.subscribe( (user) => {
      this.user = user;
      this.loggedIn = ( user != null);

      if ( user )
      {
        this.updateUserSavedProgressionListing();
      }
    })

    this.chordCardTitle = "Pick your chord progression";
    this.questionOptions = ["Pick a genre", "Pick a key"];

    this.chosenFilter = { genresChosen: [""], keysChosen: [""] };
    this.chordProgressions  = [];
    this.savedUserProgressions = [];
  }

  recordOption(filter: any[], catType: string): void{
    let sortedFilter = filter.sort((first,second)=> first.value.localeCompare(second.value));

    if ( catType == "genre")
    {
      this.chosenFilter.genresChosen = sortedFilter;
    }
    else if ( catType == "key")
    {
      this.chosenFilter.keysChosen = sortedFilter;
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

  async saveProgressionForUser( progID : number )
  {
    if ( this.user )
    {
      await this.progressionApi.saveProgressionForUser(progID);

      setTimeout(function(){}, 1000);
      this.updateUserSavedProgressionListing()
    }
  }

  async removeProgressionForUser( progID : number )
  {
    if ( this.user )
    {
      await this.progressionApi.removeProgressionForUser(progID);
      
      setTimeout(function(){}, 1000);
      this.updateUserSavedProgressionListing()
    }
  }

  updateUserSavedProgressionListing(): void
  {
    this.progressionApi.getSavedProgressions().subscribe(
      userProgressions => 
      {
        this.savedUserProgressions = userProgressions;
      });
  }
}