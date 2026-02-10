import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingEditDialogComponent } from './listing-edit-dialog';

describe('ListingEditDialogComponent', () => {
  let component: ListingEditDialogComponent;
  let fixture: ComponentFixture<ListingEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingEditDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
