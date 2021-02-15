import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// To handle Rest API
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { ListCountriesService } from './list-countries.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
    declarations: [
        AppComponent,
        CountryListComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CommonModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatFormFieldModule
    ],
    providers: [ListCountriesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
