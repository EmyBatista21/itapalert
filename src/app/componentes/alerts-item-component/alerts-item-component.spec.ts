import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsItemComponent } from './alerts-item-component';

describe('AlertsItemComponent', () => {
  let component: AlertsItemComponent;
  let fixture: ComponentFixture<AlertsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
