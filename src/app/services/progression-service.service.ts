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

    return this.httpClient.get<chordProgression[]>('https://localhost:44377/ChordProgressions/progressions?' + genreParams + keyParams);
   }

   public getProgressionOptions() {
    return this.httpClient.get<progressionOptions>('https://localhost:44377/ChordProgressions/options');
   }

   public getSavedProgressions() 
   {
      if (this.user != null) 
      {
        return this.httpClient.get<chordProgression[]>('https://localhost:44377/ChordProgressions/getsavedprogressions?email=' + this.user.email);
      }
   }
   
   public saveProgressionForUser ( progressionID: number )
   {
     if (this.user != null)
     {
       const formData = new FormData();
       formData.append("progressionID", progressionID.toString());
       formData.append("email", this.user.email);

       return this.httpClient.post<any>('https://localhost:44377/ChordProgressions/saveprogression', formData).subscribe(       
        (res) => console.log(res),
        (err) => /*do nothing */ err);
     }
   }

   public removeProgressionForUser ( progressionID: number )
   {
     if (this.user != null)
     {
       const formData = new FormData();
       formData.append("progressionID", progressionID.toString());
       formData.append("email", this.user.email);

       return this.httpClient.post<any>('https://localhost:44377/ChordProgressions/removesavedprogressions', formData).subscribe(       
        (res) => console.log(res),
        (err) => /*do nothing*/ err);
     }
   }
}