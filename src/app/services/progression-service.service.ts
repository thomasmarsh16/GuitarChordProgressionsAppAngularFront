import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { chordProgression, guitarChord } from '../chord-data/data-interfaces';

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

   public getProgressions() {
    return this.httpClient.get<chordProgression[]>('https://localhost:44377/ChordProgressions/chords');
   }
}
