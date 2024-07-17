import { TestBed } from '@angular/core/testing';

import { WatchListJsonService } from './watch-list-json.service';

describe('WatchListJsonService', () => {
  let service: WatchListJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchListJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
