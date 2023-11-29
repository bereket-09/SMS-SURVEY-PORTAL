import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";
import { MapsComponent } from "../../maps/maps.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { EmptyPageComponent } from "./empty-page/empty-page.component";
import { AddSurveyComponent } from "./survey/add-survey/add-survey.component";
import { PrimeNgModuleModule } from "../../prime-ng-module/prime-ng-module.module";
import { TestComponent } from "../../test/test.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CreateQuestionGroupComponent } from './questions/questionGroup/create-question-group/create-question-group.component';
import { ManageSurveyComponent } from './survey/manage-survey/manage-survey.component';
import { ManageGroupsComponent } from './questions/manage-groups/manage-groups.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { TagModule } from 'primeng/tag';
import { CreateQuestionsComponent } from './questions/create-questions/create-questions.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    PrimeNgModuleModule,
    MatAutocompleteModule,
    TableModule,
    TagModule,
    MatInputModule,
    InputTextModule,
    MatIconModule,
    ToolbarModule,
    MatDialogModule,
    MatStepperModule,
   
  ],

  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    EmptyPageComponent,
    AddSurveyComponent,
    TestComponent,
    ConfirmationDialogComponent,
    CreateQuestionGroupComponent,
    ManageSurveyComponent,
    ManageGroupsComponent,
    CreateQuestionsComponent,
  ],
})
export class AdminLayoutModule {}
