import { TestBed, inject } from '@angular/core/testing';

import { BadWordsService } from './bad-words.service';

describe('BadWordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BadWordsService]
    });
  });

  it('should be created', inject([BadWordsService], (service: BadWordsService) => {
    expect(service).toBeTruthy();
  }));
});
