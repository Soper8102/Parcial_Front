import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MateriasComponent } from './materias';

describe('MateriasComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriasComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();
  });

  it('debe crearse correctamente la vista de materias', () => {
    const fixture = TestBed.createComponent(MateriasComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
