import { Component, OnInit } from '@angular/core';
import { SocialUser } from "angularx-social-login";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { GoogleauthService } from '../services/google-auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  isExpanded = false;
  user: SocialUser;
  loggedIn: boolean;
  faGoogleIcon = faGoogle;

  constructor(private googleAuth: GoogleauthService) { }

  ngOnInit(): void {
    this.googleAuth.authService.authState.subscribe( (user) => {
      this.user = user;
      this.loggedIn = ( user != null);
    })
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  signInWithGoogle(): void {
    this.googleAuth.signInWithGoogle();
  }

  signOutWithGoogle(): void {
    this.googleAuth.signOutWithGoogle();
  }
}