import { Component, OnInit } from '@angular/core';
import { ListCountriesService } from '../list-countries.service';

@Component({
	selector: 'app-country-list',
	templateUrl: './country-list.component.html',
	styleUrls: ['./country-list.component.scss']
})

export class CountryListComponent implements OnInit {

	countryList: {} = [];


	constructor(
		public listCountriesApiService: ListCountriesService
	) { }

	ngOnInit(): void {
		this.loadCountries();
	}

	loadCountries() {
		return this.listCountriesApiService.getData().subscribe((data: {}) => {
			this.countryList = data;
			console.log(this.countryList);
			// console.log(data);

		})
	}

}
