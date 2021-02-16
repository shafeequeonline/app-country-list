import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ListCountriesService } from './list-countries.service';
import { Observable } from 'rxjs';

describe('ListCountriesService', () => {
  let service: ListCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ListCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the reponse from api', () => {
    TestBed.inject(ListCountriesService).getData().subscribe();
    expect(service).toBeTruthy();
  });

});
