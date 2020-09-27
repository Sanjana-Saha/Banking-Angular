import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators,FormGroup} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './services/RegisterService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConfirmEqualValidatorDirective } from './Shared/confirm-equal-validator.directive';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ConfirmEqualValidatorDirective,
    ForgotPasswordComponent,
    RegisterSuccessComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
