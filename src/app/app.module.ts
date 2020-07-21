import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { UnicornListComponent } from './unicorn-list/unicorn-list.component';
import { UnicornCardComponent } from './unicorn-list/unicorn-card/unicorn-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from "./shared/components/nav/nav.component";
import { from, of } from "rxjs";
import { filter, finalize, flatMap, map, pluck, reduce, tap, toArray } from "rxjs/operators";
import { UnicornsService } from "./shared/services/unicorns.service";

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        NavComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {


    constructor(unicornsService: UnicornsService) {

        const facturesHT = [{montant: 10}, {montant: 20}, {montant: 30}];

        unicornsService.getAll().pipe(
            flatMap(e => e),
            filter(unicorn => unicorn.birthyear < new Date().getFullYear()),
            pluck('name'),
            map(name => name.toUpperCase()),
            toArray()
        )
            .subscribe(e => {
                debugger;
            })

        debugger;



    }



}
