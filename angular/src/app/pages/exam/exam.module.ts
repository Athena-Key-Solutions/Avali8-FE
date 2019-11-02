import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamFormComponent } from './exam-form/exam-form.component';
import { ExamListComponent } from './exam-list/exam-list.component';


@NgModule({
  declarations: [ExamFormComponent, ExamListComponent],
  imports: [
    CommonModule,
    ExamRoutingModule
  ]
})
export class ExamModule { }
