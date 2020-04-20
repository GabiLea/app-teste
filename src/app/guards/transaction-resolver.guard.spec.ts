import { TestBed, async, inject } from '@angular/core/testing';

import { TransactionResolverGuard } from './transaction-resolver.guard';

describe('TransactionResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionResolverGuard]
    });
  });

  it('should ...', inject([TransactionResolverGuard], (guard: TransactionResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
