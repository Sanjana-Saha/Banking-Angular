import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Register } from '../models/register';
import { RegisterService } from '../services/RegisterService';
import { FormsModule } from '@angular/forms';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:Register;
  message;
  err;
  myRegisterForm:FormGroup;
  submitstatus:boolean;

  constructor(){ 
      this.myRegisterForm=new FormGroup({
        accountnumber:new FormControl(null,Validators.required),
        password:new FormControl(null,Validators.required),
        confirmpassword:new FormControl(null,Validators.required),
        transactionpwd:new FormControl(null,Validators.required),
        confirmtpwd:new FormControl(null,Validators.required),
        OTP:new FormControl(null,Validators.required),
      });
      this.submitstatus=false;
    }
    public get accountnumber(){
      return this.myRegisterForm.get("accountnumber");
    }
    public get password(){
      return this.myRegisterForm.get("password");
    }
    public get confirmpassword(){
      return this.myRegisterForm.get("confirmpassword");
    }
    public get transactionpwd(){
      return this.myRegisterForm.get("transactionpwd");
    }
    public get confirmtpwd(){
      return this.myRegisterForm.get("confirmtpwd");
    }
    public get OTP(){
      return this.myRegisterForm.get("OTP");
    }
    ngOnInit(): void {
      console.log(this.myRegisterForm)
    }

    submit(){
      this.submitstatus=true;
    }
  
  }