import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsManagementComponent } from './listings-management';

describe('ListingsManagementComponent', () => {
  let component: ListingsManagementComponent;
  let fixture: ComponentFixture<ListingsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingsManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
