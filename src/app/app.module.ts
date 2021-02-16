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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FilterPipe } from './country-list/filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CountryListComponent,FilterPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        BrowserAnimationsModule,
        
        MatIconModule,
        MatToolbarModule,
    ],
    providers: [ListCountriesService],
    bootstrap: [AppComponent]
})
export class AppModule { }
