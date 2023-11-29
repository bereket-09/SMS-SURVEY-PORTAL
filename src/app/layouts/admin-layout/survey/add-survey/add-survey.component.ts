import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.scss'],
})
export class AddSurveyComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  isTextAreaEnabled: boolean = true;
  isLinear = true;
  step1Form: FormGroup;
  step2Form: FormGroup;
  step3Form: FormGroup;
  currentStepIndex: number;

  questionGroups = [
    { value: 'group1', label: 'Group 1' },
    { value: 'group2', label: 'Group 2' },
    { value: 'group3', label: 'Group 3' },
    // Add more groups as needed
  ];

  constructor(private formBuilder: FormBuilder) {
    this.step1Form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required], // Add date validations as needed
      endDate: ['', [Validators.required, this.validateEndDate.bind(this)]],
      welcomeText: [''],
      endingText: [''],
    });

    this.step2Form = this.formBuilder.group({
      questionGroup: ['', Validators.required],
      senderId: ['', [Validators.required, Validators.pattern('^[0-9]{3,9}$')]],
    });

    this.step3Form = this.formBuilder.group({
      textAreaWithChips: [''],
      file: [''],
      msisdnInputType: ['file'],  // Default to 'file'
    });
  }

  ngOnInit(): void {}

  validateEndDate(control: any) {
    const endDate = new Date(control.value);
    const startDate = this.step1Form?.get('startDate')?.value
      ? new Date(this.step1Form.get('startDate').value)
      : null;

    return startDate && endDate > startDate ? null : { invalidEndDate: true };
  }

  onSubmitStep1() {
    if (this.step1Form.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        text: 'Please fix all validation issues before proceeding',
      });
      return;
    }

    // Proceed to the next step
    this.stepper.next();
  }

  removeChip(chip: string): void {
    const currentChips = this.step3Form.get('textAreaWithChips').value.split(',');
    const updatedChips = currentChips.filter((c: string) => c !== chip);
    this.step3Form.get('textAreaWithChips').setValue(updatedChips.join(','));
  }
  

  onSubmitStep2() {
    if (this.step2Form.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        text: 'Please fix all validation issues before proceeding',
      });
      return;
    }

    // Proceed to the next step
    this.stepper.next();
  }

  toggleFormControls() {
    this.isTextAreaEnabled = !this.isTextAreaEnabled;
  }

  onSubmitStep3() {
    if (this.step3Form.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        text: 'Please fix all validation issues before proceeding',
      });
      return;
    }
  

   // Process the selected MSISDN input type
   const msisdnArray = this.processMSISDNInput();
   console.log(msisdnArray);
 
   // Complete the survey or proceed to the next step
   // this.stepper.next();
  }


  parseFileContent(fileContent: string): string[] {
    const lines = fileContent.split('\n');
    const msisdnArray: string[] = [];

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine.length > 0) {
        msisdnArray.push(trimmedLine);
      }
    });

    return msisdnArray;
  }

  processMSISDNInput(): any[] {
    const inputType = this.step3Form.get('msisdnInputType').value;

    if (inputType === 'file') {
      const file = this.step3Form.get('file').value;

      if (file instanceof File) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          const fileContent = e.target.result;
          const msisdnArray = this.parseFileContent(fileContent);
          console.log(msisdnArray);
        };

        reader.readAsText(file);
      }
    } else if (inputType === 'text') {
      const textAreaContent = this.step3Form.get('textAreaWithChips').value;
      // Process the content
    }

    return [];
  }


  onStepSelectionChange(event: any) {
    // Get the current step index
    this.currentStepIndex = this.stepper.selectedIndex;

    // Your specific logic for step selection change
  }
}
