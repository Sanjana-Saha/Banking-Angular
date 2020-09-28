import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {RegisterSuccessComponent} from './register-success/register-success.component';

import {LoginService} from './services/LoginService';
import { ChangepasswordComponent } from './changepassword/changepassword.component'



import {RegisterService} from './services/RegisterService';
import {SearchService} from './services/SearchService';
import {AdminDecisionService} from './services/AdminDecisionService';
import { FormsModule } from '@angular/forms';
import { SearchComponentComponent } from './search-component/search-component.component';
import { AdminDecisionComponent } from './admin-decision/admin-decision.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateAccountService } from './services/createAccountService';
import {AdminLoginService} from './services/AdminLoginService';
import {AddBeneficiaryService} from './services/AddBeneficiaryService';
import {TransactionService} from './services/TransactionService';
import { AccountCreatedComponent } from './account-created/account-created.component';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CreateAccount } from './models/createAccount';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { TransactionIMPSComponent } from './transaction-imps/transaction-imps.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { from } from 'rxjs';

var myRoutes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'created',component:AccountCreatedComponent},
  {path:'open',component:CreateAccountComponent},
  {path:'admindashboard/:id',component:AdminDecisionComponent},
  {path:'adminlogin',component:AdminLoginComponent},
  {path:'login',component:LoginComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    AdminDecisionComponent,
    CreateAccountComponent,
    AccountCreatedComponent,
    HomeComponent,
    HeaderComponent,
    AdminLoginComponent,
    LoginComponent,
    ChangepasswordComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    RegisterSuccessComponent,
    TransactionIMPSComponent,
    AddBeneficiaryComponent

  ],
  providers: [LoginService,SearchService,AdminDecisionService,CreateAccountService,
    AdminLoginService,SearchService,RegisterService,TransactionService,AddBeneficiaryService
], 
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
 RouterModule.forRoot(myRoutes)
  ],



  bootstrap: [AppComponent]
})
export class AppModule { }
