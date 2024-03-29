import { enableProdMode, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { AuthGuard } from './app/auth.guard';
import { provideRouter, Routes } from '@angular/router';
import { InMemoryDataService } from './app/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

const routes: Routes = [
    //Angular 15
    {
        path: "",
        loadComponent: () => import("./app/home/home.component").then((module) => module.HomeComponent),
    },
    {
        path: "",
        canActivate: [AuthGuard],
        loadChildren: () => import("./app/pokemon/pokemon.routes"),
    },
    {
        path: "login",
        title: "Connexion",
        loadComponent: () => import("./app/login/login.component").then((module) => module.LoginComponent),
    },
    {
        path: "**",
        title: "Page non trouver",
        loadComponent: () => import("./app/page-not-found/page-not-found.component").then((module) => module.PageNotFoundComponent),
    },
];


if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(BrowserModule, FormsModule, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
            dataEncapsulation: false,
        })),
        DatePipe, { provide: LOCALE_ID, useValue: "fr-FR" },
        provideRouter(routes)
    ]
})
    .catch(err => console.error(err));
