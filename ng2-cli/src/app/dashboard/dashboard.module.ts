import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component'
import { CommonModule } from '@angular/common'
import { DashboardService } from './dashboard.service' 

import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
      CommonModule
  ],
  providers: [DashboardService],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
