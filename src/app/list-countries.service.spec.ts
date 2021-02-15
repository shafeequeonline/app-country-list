import { TestBed } from '@angular/core/testing';

import { ListCountriesService } from './list-countries.service';

describe('ListCountriesService', () => {
  let service: ListCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
