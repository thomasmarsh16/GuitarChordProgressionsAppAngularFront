import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DialogCardComponent } from './dialog-card/dialog-card.component';
import { GuitarChordPageComponent } from './guitar-chord-page/guitar-chord-page.component';
import { GuitarChordComponent } from './guitar-chord/guitar-chord.component';
import { ChordProgressionComponent } from './chord-progression/chord-progression.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FilterKey, FilterGenre } from './services/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    DialogCardComponent,
    GuitarChordPageComponent,
    GuitarChordComponent,
    ChordProgressionComponent,
    FilterKey,
    FilterGenre
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatStepperModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: GuitarChordPageComponent, pathMatch: 'full' }
    ])
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '846052701258-b07ogmejt9erornb43dd61dt6sed0f4q.apps.googleusercontent.com'
            ),
          }
        ],
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }