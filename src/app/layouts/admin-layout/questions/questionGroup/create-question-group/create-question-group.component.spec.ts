import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionGroupComponent } from './create-question-group.component';

describe('CreateQuestionGroupComponent', () => {
  let component: CreateQuestionGroupComponent;
  let fixture: ComponentFixture<CreateQuestionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuestionGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateQuestionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
