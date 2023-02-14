import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskresetComponent } from './taskreset.component';

describe('TaskresetComponent', () => {
  let component: TaskresetComponent;
  let fixture: ComponentFixture<TaskresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskresetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
