import { TestBed } from '@angular/core/testing';

import { UserPDataService } from './user-p-data.service';

describe('UserPDataService', () => {
  let service: UserPDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
