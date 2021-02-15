import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// loading the interface for the data
import { Countries } from './countries';

@Injectable({
providedIn: 'root'
})

export class ListCountriesService {
	
	api = 'https://restcountries.eu/rest/v2/all';

	constructor(private http: HttpClient) { 

	}

	
	// HTTP Options
	httpOptions = {
		headers: new HttpHeaders({
		'Content-Type': 'application/json'
		})
	}

	getData(): Observable<Countries> {
		return this.http.get<Countries>(this.api)
			.pipe()
	}

	
}
