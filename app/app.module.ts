import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateAccountService } from './services/createAccountService';
import {AdminLoginService} from './services/AdminLoginService';
import { AccountCreatedComponent } from './account-created/account-created.component';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CreateAccount } from './models/createAccount';
import { AdminLoginComponent } from './admin-login/admin-login.component';

var myRoutes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'created',component:AccountCreatedComponent},
  {path:'open',component:CreateAccountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    AccountCreatedComponent,
    HomeComponent,
    HeaderComponent,
    AdminLoginComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [CreateAccountService,AdminLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
