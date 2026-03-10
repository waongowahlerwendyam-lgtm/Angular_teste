import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lectur } from './lectur';

describe('Lectur', () => {
  let component: Lectur;
  let fixture: ComponentFixture<Lectur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lectur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lectur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
