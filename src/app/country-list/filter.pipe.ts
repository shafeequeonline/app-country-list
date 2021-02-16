
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filterCountries'
})

// Created the pipe tp filter data
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchTerm: string): any[] {
        if(!items) return [];
        if(!searchTerm) return items;

        searchTerm = searchTerm.toLowerCase();

        return items.filter( data => {
            // Getting the string from the search box and filtering the list accordingly
            return data.name.toLowerCase().includes(searchTerm)
        });
    }
}