import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ListCountriesService } from '../list-countries.service';
import { Observable } from 'rxjs';
import { FilterPipe } from './filter.pipe';


@Component({
	selector: 'app-country-list',
	templateUrl: './country-list.component.html',
	styleUrls: ['./country-list.component.scss']
})

export class CountryListComponent implements OnInit {

	// Created new array to store data from API
	countryList: [] = [];
	filteredCountries: Observable<string[]>;

	list = this.countryList.reverse();
  	@ViewChild('searchbar') searchbar: ElementRef;
	searchTerm = '';
	toggleSearch: boolean = false;

	constructor(
		// loading the searvice which handles the subscription method
		public listCountriesApiService: ListCountriesService
	) { }

	ngOnInit(): void {
		this.loadCountries();
	}

	// Pushing the countries from the API by subscribing to the method getData()
	loadCountries() {
		return this.listCountriesApiService.getData().subscribe((data: any) => {
			this.countryList = data;
			console.log(this.countryList);
			
		})
	}

	// function to open the search bar
	openSearch() {
		this.toggleSearch = true;
		this.searchbar.nativeElement.focus();
	}

	// function to close the search bar
	searchClose() {
		this.searchTerm = '';
		this.toggleSearch = false;
	}

}
