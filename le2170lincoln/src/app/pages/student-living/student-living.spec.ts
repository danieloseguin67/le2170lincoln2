import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLiving } from './student-living';

describe('StudentLiving', () => {
  let component: StudentLiving;
  let fixture: ComponentFixture<StudentLiving>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentLiving]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLiving);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
