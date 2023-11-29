import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { MapsComponent } from '../../maps/maps.component';
import { TypographyComponent } from '../../typography/typography.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { EmptyPageComponent } from './empty-page/empty-page.component';
import { TestComponent } from 'app/test/test.component';
import { AddSurveyComponent } from './survey/add-survey/add-survey.component';
import { CreateQuestionGroupComponent } from './questions/questionGroup/create-question-group/create-question-group.component';
import { ManageSurveyComponent } from './survey/manage-survey/manage-survey.component';
import { ManageGroupsComponent } from './questions/manage-groups/manage-groups.component';

    export const AdminLayoutRoutes: Routes = [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'manage-survey', component: ManageSurveyComponent },
        { path: 'manage-survey/add', component: AddSurveyComponent },
        { path: 'manage-questions', component: ManageGroupsComponent },
        { path: 'manage-questions/add', component: CreateQuestionGroupComponent },
        { path: 'reports', component: EmptyPageComponent },
        { path: 'settings/user-profile', component: UserProfileComponent },
        { path: 'misc/test', component: TestComponent },
        { path: 'misc/maps', component: MapsComponent },
        { path: 'misc/notifications', component: NotificationsComponent },
        { path: 'typography', component: TypographyComponent },
        { path: 'icons', component: IconsComponent },
        { path: 'upgrade', component: UpgradeComponent },
      ];
      

    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: 'manage-survey',        component: ManageSurveyComponent },
    // { path: 'manage-group',        component: ManageGroupsComponent },

    // { path: 'add',        component: AddSurveyComponent },
    // { path: 'empty',        component: EmptyPageComponent },
    // { path: 'test',        component: TestComponent },
    // { path: 'create-question-group',        component: CreateQuestionGroupComponent },
// ];
