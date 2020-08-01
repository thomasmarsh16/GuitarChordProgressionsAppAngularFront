import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { chordProgression, guitarChord, progressionOptions, chosenOptions } from '../chord-data/data-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProgressionServiceService {

  user: SocialUser;
  defaultHeaders: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.defaultHeaders = new HttpHeaders();
    this.defaultHeaders = this.defaultHeaders.append('Content-Type', 'application/json');

    if (this.user != null) {
      this.defaultHeaders = this.defaultHeaders.append('Authorization', 'Bearer ' + this.user.idToken );
    }
   }

   public getProgressions(choices: chosenOptions) {
    let genreParams = "";
    let keyParams = "";

    choices.genresChosen.forEach(genre => {
      genreParams += "genre=" + genre.value + "&";
    });

    choices.keysChosen.forEach(key => {
      keyParams += "key=" + key.value + "&";
    })

    return this.httpClient.get<chordProgression[]>('https://localhost:44377/ChordProgressions/chords?' + genreParams + keyParams);
   }

   public getProgressionOptions() {
    return this.httpClient.get<progressionOptions>('https://localhost:44377/ChordProgressions/options');
   }

   mapGenreNoteKeys( progressions: chordProgression [], genres: string []): Map<string, string[]>
   {
     let genreMap = new Map<string, string []>();
 
     progressions.forEach( (progressionInstance) => // loop through progressions
     {
       let progGenre = progressionInstance.genre;
       let progKey = progressionInstance.key;
 
       let collection = genreMap.get(progGenre);
 
       if ( genreMap.has( progGenre )) // if genre has been recorded see if key has been recorded
       {
         if ( !genreMap.get( progGenre ).includes( progKey ) ) // if it hasn't, then record key
         {
           collection.push( progKey );
         }
       }
       else
       {
         // if genre not recorded, record new genre and key
         genreMap.set( progGenre, [progKey] );
       }
     });
 
     return genreMap;
   }
}
