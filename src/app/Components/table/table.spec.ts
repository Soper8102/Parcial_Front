import { TestBed } from '@angular/core/testing';
import { TableComponent } from './table';

describe('TableComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent]
    }).compileComponents();
  });

  it('debe crearse correctamente', () => {
    const fixture = TestBed.createComponent(TableComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
