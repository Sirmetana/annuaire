import { TestBed } from '@angular/core/testing';
import { PersonApiServiceService } from './person-api-service.service';

describe('PersonApiServiceService', () => {
  let service: PersonApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
