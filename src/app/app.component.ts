import { Component, OnInit } from "@angular/core";
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';

import { AuthService } from './auth.service';
// import { filter } from 'rxjs';

@Component({
  selector: "app-root",
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  displayButtonLogin: boolean;
  displayButtonLogout: boolean;
  displaylinkHome: any;
  disable = false;
  // displayBtn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.router.events
      // .pipe(
      //   filter((event): event is NavigationEnd => {
      //     return event instanceof NavigationEnd
      //   })
      // )
      .subscribe((value) => {
        let url;
        let paramsId;

        if (value instanceof ActivationEnd) {
          console.log('value ActivationEnd', value);
          paramsId = value.snapshot.params['id'];
          console.log('paramsId :', paramsId);
        }
        if (value instanceof NavigationEnd) {
          // console.log('value', value);
          url = value.url;
          console.log('url :', url);

        }

        if (url || url && paramsId) {
          this.displayButton(url, paramsId);
        }

      })
  }

  ngOnInit(): void {
  }

  displayButton(url: string, id?: string) {
    if (url === "/login") {
      this.displayButtonLogin = false;
      this.displayButtonLogout = false;
      this.disable = false;

    } else if (url === "/pokemons") {
      this.displayButtonLogin = false;
      this.displayButtonLogout = true;
      this.disable = true;

    } else if (url === `/pokemon/${id}`) {
      this.displayButtonLogin = false;
      this.displayButtonLogout = true;
      this.disable = true;

    } else if (url === `edit/pokemon/${id}`) {
      this.displayButtonLogin = false;
      this.displayButtonLogout = true;
      this.disable = true;

    } else {
      this.displayButtonLogin = true;
      this.displayButtonLogout = false;
      this.disable = false;
    }
  }

  logout() {
    // this.authService.logout();
    this.disable = false;
    this.router.navigate(['/']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  // linkHomePage() {
  //   this.displaylinkHome = this.router.navigate(['/']);

  // }
}
