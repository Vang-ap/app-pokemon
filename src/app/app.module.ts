import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { DatePipe, registerLocaleData } from "@angular/common";

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { InMemoryDataService } from "./in-memory-data.service";
import localeFr from "@angular/common/locales/fr";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth.guard";

registerLocaleData(localeFr);

const routes: Routes = [
    //Angular 15
    {
        path: "",
        loadComponent: () =>
            import("./home/home.component").then((module) => module.HomeComponent),
    },
    {
        path: "",
        canActivate: [AuthGuard],
        loadChildren: () => import("./pokemon/pokemon.routes"),
    },
    {
        path: "login",
        loadComponent: () =>
            import("./login/login.component").then((module) => module.LoginComponent),
    },
    {
        path: "**",
        loadComponent: () =>
            import("./page-not-found/page-not-found.component").then(
                (module) => module.PageNotFoundComponent
            ),
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
            dataEncapsulation: false,
        }),
        RouterModule.forRoot(routes),
        PageNotFoundComponent,
        LoginComponent,
        HomeComponent
    ],
    providers: [DatePipe, { provide: LOCALE_ID, useValue: "fr-FR" }],
    bootstrap: [AppComponent],
})
export class AppModule { }
