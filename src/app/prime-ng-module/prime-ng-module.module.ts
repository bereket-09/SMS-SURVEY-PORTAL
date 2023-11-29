// primeng.module.ts

import { NgModule } from "@angular/core";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { CheckboxModule } from "primeng/checkbox";
import { RadioButtonModule } from "primeng/radiobutton";
import { CalendarModule } from "primeng/calendar";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TabViewModule } from "primeng/tabview";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { PanelModule } from "primeng/panel";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { MessageModule } from "primeng/message";
import { AccordionModule } from "primeng/accordion";
import { CardModule } from "primeng/card";
import { AutoCompleteModule } from "primeng/autocomplete";
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  exports: [
    TableModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    RadioButtonModule,
    CalendarModule,
    InputTextareaModule,
    TabViewModule,
    ToastModule,
    PanelModule,
    ConfirmDialogModule,
    MessageModule,
    AccordionModule,
    CardModule,
    AutoCompleteModule,
    DragDropModule
    // ModalModule

    
  ],
  providers: [MessageService, ConfirmationService],
})
export class PrimeNgModuleModule {}
