import { TestBed } from '@angular/core/testing';
import { ClientesService } from './clientes';

describe('ClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('debe crearse correctamente', () => {
    const service = TestBed.inject(ClientesService);
    expect(service).toBeTruthy();
  });
});
