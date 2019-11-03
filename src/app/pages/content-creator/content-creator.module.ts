import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentCreatorRoutingModule } from './content-creator-routing.module';
import { ContentCreatorFormComponent } from './content-creator-form/content-creator-form.component';
import { ContentCreatorListComponent } from './content-creator-list/content-creator-list.component';


@NgModule({
  declarations: [ContentCreatorFormComponent, ContentCreatorListComponent],
  imports: [
    CommonModule,
    ContentCreatorRoutingModule
  ]
})
export class ContentCreatorModule { }
