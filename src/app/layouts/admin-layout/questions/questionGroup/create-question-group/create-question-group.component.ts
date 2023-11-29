import { Component, OnInit ,ViewChild,AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';  // Import the Router

@Component({
  selector: 'app-create-question-group',
  templateUrl: './create-question-group.component.html',
  styleUrls: ['./create-question-group.component.scss']
})
export class CreateQuestionGroupComponent implements OnInit, AfterViewInit {
  @ViewChild('stepper') stepper: MatStepper;
  isLinear = true;
  step1Form: FormGroup;
  step2Form: FormGroup;
  questionForm: FormGroup;
  isQuestionFormValid = false;
  currentStepIndex: number;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.step1Form = this.formBuilder.group({
      groupName: ['', Validators.required],
      groupDescription: ['', Validators.required]
    });

    this.step2Form = this.formBuilder.group({
      // Define your form controls for Step 2 here
    });
    this.router.navigate([this.router.url]);
  }

  ngOnInit(): void {
    this.router.navigate([this.router.url]);
    console.log("")
    this.router.navigate([this.router.url]);
  }
  ngAfterViewInit(){
    this.router.navigate([this.router.url]);
  }

  onSubmitStep1() {
    if (this.step1Form.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        text: 'Please fix all validation issues before proceeding'
      });
      return;
    }

    // Proceed to the next step
    
  }
  moveToNextStep(): void {
    this.isQuestionFormValid = true;
    console.log("CLLED",this.isQuestionFormValid)

    Swal.fire({
      icon: 'question',
      title: 'Are you sure?',
      text: 'Are you sure you want to save the changes?',
      showCancelButton: true,
      confirmButtonText: 'Yes, save it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle form submission logic here
   
        this.isQuestionFormValid = true;

        this.stepper.next();

        // Display success message
        // Swal.fire({
        //   icon: 'success',
        //   title: 'Form Submitted',
        //   text: 'Your form has been submitted successfully!',
        // });

        console.log('Form submitted successfully!');
      } else {
        // User clicked "Cancel" in the confirmation dialog
        console.log('Form submission canceled');
      }
    });




  }

  markQuestionSectionValid(){
    this.isQuestionFormValid = true;
  }
  onStepSelectionChange(event: any) {
    // Get the current step index
    this.currentStepIndex = this.stepper.selectedIndex;

    // Check if the user is navigating back (moving to a previous step)
    if (this.currentStepIndex === 2) {
      // Execute your specific method when navigating back to index 1 from index 2
      this.isQuestionFormValid = false;
    }
  }
  
}