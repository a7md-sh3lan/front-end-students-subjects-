import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDegComponent } from './students-deg.component';

describe('StudentsDegComponent', () => {
  let component: StudentsDegComponent;
  let fixture: ComponentFixture<StudentsDegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsDegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsDegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
