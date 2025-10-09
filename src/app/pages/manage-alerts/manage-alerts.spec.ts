import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAlerts } from './manage-alerts';

describe('ManageAlerts', () => {
  let component: ManageAlerts;
  let fixture: ComponentFixture<ManageAlerts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAlerts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAlerts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
