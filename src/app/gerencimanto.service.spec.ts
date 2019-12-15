import { TestBed } from '@angular/core/testing';

import { GerencimantoService } from './gerencimanto.service';

describe('GerencimantoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GerencimantoService = TestBed.get(GerencimantoService);
    expect(service).toBeTruthy();
  });
});
