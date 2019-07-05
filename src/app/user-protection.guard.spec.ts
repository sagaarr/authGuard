import { TestBed, async, inject } from '@angular/core/testing';

import { UserProtectionGuard } from './user-protection.guard';

describe('UserProtectionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProtectionGuard]
    });
  });

  it('should ...', inject([UserProtectionGuard], (guard: UserProtectionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
