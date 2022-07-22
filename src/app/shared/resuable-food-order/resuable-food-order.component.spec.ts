import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableFoodOrderComponent } from './resuable-food-order.component';

describe('ResuableFoodOrderComponent', () => {
  let component: ResuableFoodOrderComponent;
  let fixture: ComponentFixture<ResuableFoodOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResuableFoodOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResuableFoodOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
