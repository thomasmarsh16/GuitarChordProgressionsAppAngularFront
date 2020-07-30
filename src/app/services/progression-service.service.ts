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
}
