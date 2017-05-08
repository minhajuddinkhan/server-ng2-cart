import { NgModule} from '@angular/core';
import { LoginComponent } from './login.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { HttpModule } from '@angular/http'
import { AuthService } from './login.service'

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        CommonModule
    ],
    declarations: [
        LoginComponent
    ],
  providers: [ AuthService ],
  bootstrap: [LoginComponent]
})
export class LoginModule {}
