import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MateriasService } from './materias';

describe('MateriasService', () => {
  let service: MateriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MateriasService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(MateriasService);
  });

  it('debe crearse correctamente el servicio', () => {
    expect(service).toBeTruthy();
  });
});
