import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-manage-survey',
  templateUrl: './manage-survey.component.html',
  styleUrls: ['./manage-survey.component.scss']
})
export class ManageSurveyComponent implements OnInit {
  surveys: any[] = []; // Populate this array with your survey data
  selectedSurveys: any[] = []; // To store selected surveys
  loading: boolean = false; // Add this property

  columns: any[] = [
    { field: 'surveyName', header: 'Survey Name' },
    { field: 'desc', header: 'Description' },
    { field: 'senderID', header: 'Sender ID' },
    { field: 'welcomeText', header: 'Welcome Text' },
    { field: 'startDate', header: 'Start Date' },
    { field: 'endDate', header: 'End Date' },
    { field: 'endText', header: 'End Text' },
    { field: 'questionGroupName', header: 'Question Group Name' },
    { field: 'totalParticipants', header: 'Total Participants' },
    { field: 'status', header: 'Status' },
    { field: 'actions', header: 'Actions' } // Add this for action buttons
  ];

  constructor() { }

  ngOnInit(): void {
    // Fetch or set your survey data here
    this.surveys = [
      // Sample data
      {
        surveyName: 'Survey 1',
        desc: 'Description 1',
        senderID: 'Sender 1',
        welcomeText: 'Welcome 1',
        startDate: '2023-01-01',
        endDate: '2023-01-31',
        endText: 'End 1',
        questionGroupName: 'Group 1',
        totalParticipants: 100,
        status: 'Active'
      },
      {
        surveyName: 'Survey 2',
        desc: 'Description 2',
        senderID: 'Sender 2',
        welcomeText: 'Welcome 2',
        startDate: '2023-02-01',
        endDate: '2023-02-28',
        endText: 'End 2',
        questionGroupName: 'Group 2',
        totalParticipants: 120,
        status: 'Done'
      },
      {
        surveyName: 'Survey 3',
        desc: 'Description 3',
        senderID: 'Sender 3',
        welcomeText: 'Welcome 3',
        startDate: '2023-03-01',
        endDate: '2023-03-31',
        endText: 'End 3',
        questionGroupName: 'Group 3',
        totalParticipants: 90,
        status: 'Scheduled'
      },
      {
        surveyName: 'Survey 4',
        desc: 'Description 4',
        senderID: 'Sender 4',
        welcomeText: 'Welcome 4',
        startDate: '2023-04-01',
        endDate: '2023-04-30',
        endText: 'End 4',
        questionGroupName: 'Group 4',
        totalParticipants: 80,
        status: 'Deleted'
      },
      {
        surveyName: 'Survey 5',
        desc: 'Description 5',
        senderID: 'Sender 5',
        welcomeText: 'Welcome 5',
        startDate: '2023-05-01',
        endDate: '2023-05-31',
        endText: 'End 5',
        questionGroupName: 'Group 5',
        totalParticipants: 110,
        status: 'Active'
      },
      {
        surveyName: 'Survey 6',
        desc: 'Description 6',
        senderID: 'Sender 6',
        welcomeText: 'Welcome 6',
        startDate: '2023-06-01',
        endDate: '2023-06-30',
        endText: 'End 6',
        questionGroupName: 'Group 6',
        totalParticipants: 95,
        status: 'Done'
      },
      {
        surveyName: 'Survey 7',
        desc: 'Description 7',
        senderID: 'Sender 7',
        welcomeText: 'Welcome 7',
        startDate: '2023-07-01',
        endDate: '2023-07-31',
        endText: 'End 7',
        questionGroupName: 'Group 7',
        totalParticipants: 105,
        status: 'Scheduled'
      },
      {
        surveyName: 'Survey 8',
        desc: 'Description 8',
        senderID: 'Sender 8',
        welcomeText: 'Welcome 8',
        startDate: '2023-08-01',
        endDate: '2023-08-31',
        endText: 'End 8',
        questionGroupName: 'Group 8',
        totalParticipants: 75,
        status: 'Deleted'
      },
      {
        surveyName: 'Survey 9',
        desc: 'Description 9',
        senderID: 'Sender 9',
        welcomeText: 'Welcome 9',
        startDate: '2023-09-01',
        endDate: '2023-09-30',
        endText: 'End 9',
        questionGroupName: 'Group 9',
        totalParticipants: 85,
        status: 'Active'
      },
      {
        surveyName: 'Survey 10',
        desc: 'Description 10',
        senderID: 'Sender 10',
        welcomeText: 'Welcome 10',
        startDate: '2023-10-01',
        endDate: '2023-10-31',
        endText: 'End 10',
        questionGroupName: 'Group 10',
        totalParticipants: 115,
        status: 'Done'
      },
      {
        surveyName: 'Survey 11',
        desc: 'Description 11',
        senderID: 'Sender 11',
        welcomeText: 'Welcome 11',
        startDate: '2023-11-01',
        endDate: '2023-11-30',
        endText: 'End 11',
        questionGroupName: 'Group 11',
        totalParticipants: 90,
        status: 'Scheduled'
      },
      {
        surveyName: 'Survey 12',
        desc: 'Description 12',
        senderID: 'Sender 12',
        welcomeText: 'Welcome 12',
        startDate: '2023-12-01',
        endDate: '2023-12-31',
        endText: 'End 12',
        questionGroupName: 'Group 12',
        totalParticipants: 70,
        status: 'Deleted'
      },
      {
        surveyName: 'Survey 13',
        desc: 'Description 13',
        senderID: 'Sender 13',
        welcomeText: 'Welcome 13',
        startDate: '2024-01-01',
        endDate: '2024-01-31',
        endText: 'End 13',
        questionGroupName: 'Group 13',
        totalParticipants: 100,
        status: 'Active'
      },
      {
        surveyName: 'Survey 14',
        desc: 'Description 14',
        senderID: 'Sender 14',
        welcomeText: 'Welcome 14',
        startDate: '2024-02-01',
        endDate: '2024-02-28',
        endText: 'End 14',
        questionGroupName: 'Group 14',
        totalParticipants: 80,
        status: 'Done'
      },
      // Add more survey objects as needed
    ];
  }

  viewSurvey() {
    if (this.selectedSurveys.length > 0) {
      // Implement the logic to view a survey
      console.log('View survey:', this.selectedSurveys[0]);
    } else {
      console.log('No survey selected.');
    }
  }

  onSort(event: SortEvent) {
    // Implement sorting logic based on the event
    const field = event.field;
    const order = event.order;

    if (order === 1) {
      // Ascending order
      this.surveys.sort((a, b) => (a[field] > b[field] ? 1 : -1));
    } else if (order === -1) {
      // Descending order
      this.surveys.sort((a, b) => (a[field] < b[field] ? 1 : -1));
    }
  }

  getSeverity(status: string) {
    switch (status) {
        case 'Active':
            return 'primary';
        case 'Done':
              return 'success';
        case 'Scheduled':
            return 'warning';
        case 'Deleted':
            return 'danger';
    }
}
}
