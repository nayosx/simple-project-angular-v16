import { TestBed } from '@angular/core/testing';

import { UserFakerService } from './user-faker.service';

describe('UserFakerService', () => {
  let service: UserFakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
