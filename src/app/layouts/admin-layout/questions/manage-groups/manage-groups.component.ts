// manage-groups.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-groups',
  templateUrl: './manage-groups.component.html',
  styleUrls: ['./manage-groups.component.scss']
})
export class ManageGroupsComponent implements OnInit {
  groups: any[] = []; // Populate this array with your group data
  selectedGroups: any[] = []; // To store selected groups
  loading: boolean = false; // Add this property

  columns: any[] = [
    { field: 'groupName', header: 'Group Name' },
    { field: 'desc', header: 'Description' },
    { field: 'totalQuestionsCount', header: 'Total Questions Count' },
    { field: 'createdDate', header: 'Created Date' },
    { field: 'actions', header: 'Actions' } // Add this for action buttons
  ];

  constructor() { }

  ngOnInit(): void {
    // Fetch or set your group data here

this.groups = [
      // Sample data
      {
        id: 1,
        groupName: 'Group 1',
        desc: 'Description 1',
        totalQuestionsCount: 10,
        createdDate: '2023-01-01',
      },
      {
        id: 2,
        groupName: 'Group 2',
        desc: 'Description 2',
        totalQuestionsCount: 8,
        createdDate: '2023-02-01',
      },
      {
        id: 3,
        groupName: 'Group 3',
        desc: 'Description 3',
        totalQuestionsCount: 12,
        createdDate: '2023-03-01',
      },
      {
        id: 4,
        groupName: 'Group 4',
        desc: 'Description 4',
        totalQuestionsCount: 15,
        createdDate: '2023-04-01',
      },
      {
        id: 5,
        groupName: 'Group 5',
        desc: 'Description 5',
        totalQuestionsCount: 20,
        createdDate: '2023-05-01',
      },
      {
        id: 6,
        groupName: 'Group 6',
        desc: 'Description 6',
        totalQuestionsCount: 10,
        createdDate: '2023-06-01',
      },
      {
        id: 7,
        groupName: 'Group 7',
        desc: 'Description 7',
        totalQuestionsCount: 8,
        createdDate: '2023-07-01',
      },
      {
        id: 8,
        groupName: 'Group 8',
        desc: 'Description 8',
        totalQuestionsCount: 12,
        createdDate: '2023-08-01',
      },
      {
        id: 9,
        groupName: 'Group 9',
        desc: 'Description 9',
        totalQuestionsCount: 15,
        createdDate: '2023-09-01',
      },
      {
        id: 10,
        groupName: 'Group 10',
        desc: 'Description 10',
        totalQuestionsCount: 20,
        createdDate: '2023-10-01',
      },
      {
        id: 11,
        groupName: 'Group 11',
        desc: 'Description 11',
        totalQuestionsCount: 10,
        createdDate: '2023-11-01',
      },
      {
        id: 12,
        groupName: 'Group 12',
        desc: 'Description 12',
        totalQuestionsCount: 8,
        createdDate: '2023-12-01',
      },
      {
        id: 13,
        groupName: 'Group 13',
        desc: 'Description 13',
        totalQuestionsCount: 12,
        createdDate: '2024-01-01',
      },
      {
        id: 14,
        groupName: 'Group 14',
        desc: 'Description 14',
        totalQuestionsCount: 15,
        createdDate: '2024-02-01',
      },
      {
        id: 15,
        groupName: 'Group 15',
        desc: 'Description 15',
        totalQuestionsCount: 20,
        createdDate: '2024-03-01',
      },
      {
        id: 16,
        groupName: 'Group 16',
        desc: 'Description 16',
        totalQuestionsCount: 10,
        createdDate: '2024-04-01',
      },
      {
        id: 17,
        groupName: 'Group 17',
        desc: 'Description 17',
        totalQuestionsCount: 8,
        createdDate: '2024-05-01',
      },
      {
        id: 18,
        groupName: 'Group 18',
        desc: 'Description 18',
        totalQuestionsCount: 12,
        createdDate: '2024-06-01',
      },
      {
        id: 19,
        groupName: 'Group 19',
        desc: 'Description 19',
        totalQuestionsCount: 15,
        createdDate: '2024-07-01',
      },
      {
        id: 20,
        groupName: 'Group 20',
        desc: 'Description 20',
        totalQuestionsCount: 20,
        createdDate: '2024-08-01',
      },
      {
        id: 21,
        groupName: 'Group 21',
        desc: 'Description 21',
        totalQuestionsCount: 10,
        createdDate: '2024-09-01',
      },
      {
        id: 22,
        groupName: 'Group 22',
        desc: 'Description 22',
        totalQuestionsCount: 8,
        createdDate: '2024-10-01',
      },
      {
        id: 23,
        groupName: 'Group 23',
        desc: 'Description 23',
        totalQuestionsCount: 12,
        createdDate: '2024-11-01',
      },
      {
        id: 24,
        groupName: 'Group 24',
        desc: 'Description 24',
        totalQuestionsCount: 15,
        createdDate: '2024-12-01',
      },
      {
        id: 25,
        groupName: 'Group 25',
        desc: 'Description 25',
        totalQuestionsCount: 20,
        createdDate: '2025-01-01',
      },
    ];
  }

  viewGroup() {
    if (this.selectedGroups.length > 0) {
      // Implement the logic to view a group
      console.log('View group:', this.selectedGroups[0]);
    } else {
      console.log('No group selected.');
    }
  }

  // Add other methods as needed
}
