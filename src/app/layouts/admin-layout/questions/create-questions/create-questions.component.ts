import { Component,Input,Output, EventEmitter  } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from "@angular/forms";
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
  CdkDragHandle,
} from "@angular/cdk/drag-drop";
import { SelectItem } from "primeng/api";
import Swal from "sweetalert2";
import { ConfirmationService } from "primeng/api";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";
import { CreateQuestionGroupComponent } from "app/layouts/admin-layout/questions/questionGroup/create-question-group/create-question-group.component";

export interface Question {
  id: number;
  text: string;
  type: string; // e.g., 'multiple-choice', 'short-answer', etc.
  options?: string[]; // Only applicable for certain question types
}

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.scss']
})
export class CreateQuestionsComponent {

  @Input() questionForm: FormGroup;
  @Output() formValidityChanged = new EventEmitter<boolean>();
  // questionForm: FormGroup;
  preExistingQuestions: Question[] = [
    {
      id: 1,
      text: "What is your favorite color?",
      type: "multiple-choice",
      options: ["Red", "Blue", "Green"],
    },
    {
      id: 2,
      text: "How many hours do you sleep per night?",
      type: "short-answer",
    },
    // Add more pre-existing questions as needed
  ];

  filteredPreExistingQuestions: Observable<Question[]>;

  constructor(
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private parentComponent: CreateQuestionGroupComponent
  ) {
    this.initForm();
  }
  initForm() {
    this.questionForm = this.fb.group({
      questions: this.fb.array([], Validators.required), // Set initial validation for questions
      selectedExistingQuestionSearch: "",
    });
  
    // Open the add question page by default
    this.addQuestion();
  
    // Initialize the filtered questions for autocomplete
    this.filteredPreExistingQuestions = this.questionForm
      .get("selectedExistingQuestionSearch")
      .valueChanges.pipe(
        startWith(""),
        map((value) => this.filterQuestions(value))
      );
  }
  

  get questions(): FormArray {
    return this.questionForm.get("questions") as FormArray;
  }
  filterQuestions(value: string): Question[] {
    const filterValue = value.toLowerCase();
    return this.preExistingQuestions.filter((question) => {
      const questionText = question.text ? String(question.text) : "";
      return questionText.toLowerCase().includes(filterValue);
    });
  }

  openDialog() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }

  addQuestion() {
    const newQuestion = this.fb.group({
      text: ["", Validators.required],
      type: "multiple-choice",
      options: this.fb.array([]),
      selectedExistingQuestionSearch: "",
      selectedExistingQuestion: null,
    });

    this.questions.push(newQuestion);

    // Apply conditional validation for options
    const optionsControl = newQuestion.get("options") as FormArray;
    const typeControl = newQuestion.get("type");

    if (typeControl.value === "multiple-choice") {
      optionsControl.setValidators([
        Validators.required,
        Validators.minLength(2),
      ]);
    }

    // else if (typeControl.value === 'short-answer') {
    //   // Clear existing options and create an options array as if it were a multiple-choice question
    //   optionsControl.clear();
    //   optionsControl.push(this.fb.control(["Red", "Blue", "Green"]));
    //   // optionsControl.push(this.fb.control('a'));
    //   optionsControl.setValidators(null);

    // }
    else {
      optionsControl.setValidators(null);
    }

    // Update the validity status
    optionsControl.updateValueAndValidity();
  }

//  import Swal from 'sweetalert2';

// ...

onSubmit() {
  console.log(this.questionForm.value);

  if (this.questionForm.valid) {
    // Display a confirmation dialog
    this.parentComponent.moveToNextStep();
    // Swal.fire({
    //   icon: 'question',
    //   title: 'Are you sure?',
    //   text: 'Are you sure you want to save the changes?',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes, save it!',
    //   cancelButtonText: 'No, cancel!',
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     // Handle form submission logic here
    //     this.parentComponent.moveToNextStep();

    //     // Display success message
    //     // Swal.fire({
    //     //   icon: 'success',
    //     //   title: 'Form Submitted',
    //     //   text: 'Your form has been submitted successfully!',
    //     // });

    //     console.log('Form submitted successfully!');
    //     console.log(this.questionForm.value);
    //   } else {
    //     // User clicked "Cancel" in the confirmation dialog
    //     console.log('Form submission canceled');
    //   }
    // });
  } else {
    // Display validation error message
    Swal.fire({
      icon: 'error',
      title: 'Validation Error',
      text: 'Please fill in all required fields and ensure at least 2 options for multiple-choice questions.',
    });
  }
}

  removeQuestion(index: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.questions.removeAt(index);
        Swal.fire({
          title: "Deleted!",
          text: "Your question has been deleted.",
          icon: "success",
        });
      }
    });
  }

  removeOption(question: FormGroup, index: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const options = question.get("options") as FormArray;
        options.removeAt(index);
        Swal.fire({
          title: "Deleted!",
          text: "Your option has been deleted.",
          icon: "success",
        });
      }
    });
  }

  addOption(question: FormGroup) {
    const options = question.get("options") as FormArray;
    options.push(this.fb.control(""));
  }

  drop(event: CdkDragDrop<FormGroup[]>) {
    moveItemInArray(
      this.questions.controls,
      event.previousIndex,
      event.currentIndex
    );
  }

  onSelectExistingQuestion(question: Question) {
    console.log(question)
    const selectedExistingQuestionControl = this.questionForm.get("selectedExistingQuestion");
  
    if (selectedExistingQuestionControl) {
      // Set the selected existing question properties
      selectedExistingQuestionControl.setValue({
        text: question.text,
        type: question.type,
        options: question.options ? [...question.options] : null,
      });
  
      // Set the type to 'existing-question'
      this.questionForm.get("type").setValue("existing-question");
  
      // Set the text of the selected existing question
      this.questionForm.get("text").setValue(question.text);
  
      const optionsControl = this.questionForm.get("options") as FormArray;
  
      if (question.type === "short-answer") {
        // Clear options for short-answer questions
        optionsControl.clear();
        optionsControl.setValidators(null); // No validation for short-answer questions
        optionsControl.setErrors(null); // Explicitly set errors to null
      } else if (question.type === "multiple-choice") {
        // Clear existing options
        optionsControl.clear();
  
        // Add options from the selected existing question
        question.options.forEach((option) => {
          optionsControl.push(this.fb.control(option));
        });
  
        // Apply conditional validation for options
        optionsControl.setValidators([Validators.required, Validators.minLength(2)]);
        optionsControl.updateValueAndValidity();

        console.log(this.questionForm.value)
      }
    }
  }
  

  onQuestionTypeChange(question: FormGroup) {
    const selectedExistingQuestionControl = question.get("selectedExistingQuestion");

    const typeControl = question.get("type");
    const optionsControl = question.get("options") as FormArray;
  
    console.log("Type is", typeControl.value);
  
    if (typeControl.value === "existing-question") {
      // Keep the current logic for existing questions
      optionsControl.clear(); // Clear options for short-answer questions
      optionsControl.setValidators(null); // No validation for short-answer questions
      optionsControl.setErrors(null); // Explicitly set errors to null
     
    } else if (typeControl.value === "short-answer") {
      optionsControl.clear(); // Clear options for short-answer questions
      optionsControl.setValidators(null); // No validation for short-answer questions
      optionsControl.setErrors(null); // Explicitly set errors to null
  
      // optionsControl.updateValueAndValidity(); // Update the validity status
    } else {
      // Apply conditional validation for options
      optionsControl.setValidators(
        typeControl.value === "multiple-choice"
          ? [Validators.required, Validators.minLength(2)]
          : null
      );
  
      // Update the validity status
      optionsControl.updateValueAndValidity();
    }
  }

  
  
}
