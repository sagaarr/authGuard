import { TestBed, async, inject } from '@angular/core/testing';

import { DonGuard } from './don.guard';

describe('DonGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonGuard]
    });
  });

  it('should ...', inject([DonGuard], (guard: DonGuard) => {
    expect(guard).toBeTruthy();
  }));
});
