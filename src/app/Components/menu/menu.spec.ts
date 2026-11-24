import { TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu';

describe('MenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent]
    }).compileComponents();
  });

  it('debe crearse correctamente', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
