import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Explora } from './explora';

describe('Explora', () => {
  let component: Explora;
  let fixture: ComponentFixture<Explora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Explora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Explora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
