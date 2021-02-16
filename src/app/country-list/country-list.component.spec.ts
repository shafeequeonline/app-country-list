import { ComponentFixture, fakeAsync, inject, TestBed } from '@angular/core/testing';
import { ListCountriesService } from '../list-countries.service';
import { CountryListComponent } from './country-list.component';
import { HttpClientTestingModule, } from '@angular/common/http/testing';
import { FilterPipe } from './filter.pipe';

describe('CountryListComponent', () => {
	let component: CountryListComponent;
	let fixture: ComponentFixture<CountryListComponent>;
	let service: ListCountriesService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
		declarations: [ CountryListComponent, FilterPipe ],
		imports: [ HttpClientTestingModule ],

		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CountryListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render title', () => {
		const fixture = TestBed.createComponent(CountryListComponent);
		fixture.detectChanges();
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector('.mat-title').textContent).toContain('My Little World list');
	});

});
