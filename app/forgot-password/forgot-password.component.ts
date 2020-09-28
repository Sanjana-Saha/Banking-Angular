import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ForgotPassword } from '../models/forgot-password';
import { RegisterService } from '../services/RegisterService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
forgotpassword:ForgotPassword
forgotpasswordForm:FormGroup
  constructor() { 
    this.forgotpasswordForm=new FormGroup({
      userid:new FormControl(null,Validators.required),
      OTP:new FormControl(null,Validators.required),
    });
  }
  public get userid(){
    return this.forgotpasswordForm.get("userid");
  }
  public get OTP(){
    return this.forgotpasswordForm.get("OTP");
  }

  OnProceed()
  {
    console.log(this.OTP.value);
  }
  OnBack(){

  }
  ngOnInit(): void {
    
  }
}