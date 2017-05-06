import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component'
import { CommonModule } from '@angular/common'
import { DashboardService } from './dashboard.service' 
import { ListComponent } from './list/list.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    DashboardComponent,
    ListComponent
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
