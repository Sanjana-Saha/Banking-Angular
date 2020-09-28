import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {HttpClientModule} from '@angular/common/http';


// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoginService} from './services/LoginService';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {RegisterSuccessComponent} from './register-success/register-success.component';


import {LoginService} from './services/LoginService';
import{AccountSummaryService} from './services/AccountSummaryService';
import { ChangepasswordComponent } from './changepassword/changepassword.component'



// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';




import {SearchService} from './services/SearchService';
import {AdminDecisionService} from './services/AdminDecisionService';
import {RegisterComponent} from './register/register.component';
import { FormGroup , FormControl} from '@angular/forms';
import { CommonModule }  from '@angular/common';
import {RegisterSuccessComponent} from './register-success/register-success.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { AdminDecisionComponent } from './admin-decision/admin-decision.component';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateAccountService } from './services/createAccountService';
import {AdminLoginService} from './services/AdminLoginService';
import {AddBeneficiaryService} from './services/AddBeneficiaryService';

import { AccountCreatedComponent } from './account-created/account-created.component';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CreateAccount } from './models/createAccount';
import { AdminLoginComponent } from './admin-login/admin-login.component';
//import { ForgotPassword } from '../models/forgot-password';
import { SetPasswordComponent } from './set-password/set-password.component';
import { RegisterService } from './services/RegisterService';
import { DashboardComponent } from './dashboard/dashboard.component';
import { from } from 'rxjs';
import { TransfailComponent } from './transfail/transfail.component';

import { RegisterService } from './services/RegisterService';
import { AccountsummaryComponent } from './accountsummary/accountsummary.component';

import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';



import { TransactionIMPSComponent } from './transaction-imps/transaction-imps.component';
import {TransactionService} from './services/TransactionService';
import {TransactionNEFTComponent} from './transaction-neft/transaction-neft.component';
import {TransactionRTGSComponent} from './transaction-rtgs/transaction-rtgs.component';



var myRoutes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'created',component:AccountCreatedComponent},

  {path:'create',component:LoginComponent},
  {path:'open',component:CreateAccountComponent},
  {path:'register',component:RegisterComponent},
  {path:'registered',component:RegisterSuccessComponent},
  {path:'login',component:RegisterSuccessComponent}

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
    SetPasswordComponent,
    DashboardComponent,
    RegisterComponent,
     AddBeneficiaryComponent,
    AccountsummaryComponent,
    TransfailComponent,
    TransactionIMPSComponent,

    AddBeneficiaryComponent,
    AccountsummaryComponent,
    TransactionRTGSComponent,
    TransactionNEFTComponent

	 ForgotPasswordComponent,
    RegisterSuccessComponent



  ],
   
   


  ],
  providers: [LoginService,SearchService,AdminDecisionService,CreateAccountService,AdminLoginService,RegisterService,AccountSummaryService

], 

  

  
  

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(myRoutes)

  ],



  bootstrap: [AppComponent]
})
export class AppModule { }
