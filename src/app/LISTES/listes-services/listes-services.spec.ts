import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesServices } from './listes-services';

describe('ListesServices', () => {
  let component: ListesServices;
  let fixture: ComponentFixture<ListesServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListesServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListesServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
