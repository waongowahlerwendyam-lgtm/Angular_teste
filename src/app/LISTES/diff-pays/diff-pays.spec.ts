import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffPays } from './diff-pays';

describe('DiffPays', () => {
  let component: DiffPays;
  let fixture: ComponentFixture<DiffPays>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiffPays]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffPays);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
