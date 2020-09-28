import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Register } from '../models/register';
import { RegisterService } from '../services/RegisterService';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import {Router} from '@angular/router';
import { from,of } from 'rxjs';


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

  constructor(private router:Router,private registerservice:RegisterService){ 
    this.register=new Register();
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
      
    }

    submit(){
       this.register.AccountNumber=this.accountnumber.value;
      this.register.UserPass=this.password.value;
       this.register.UserTransactionpass=this.transactionpwd.value;
       this.register.ConfirmTransPass=this.confirmtpwd.value;
       this.register.ConfirmUserPass=this.confirmpassword.value;
      this.register.OTP=this.OTP.value;
      //console.log(this.myRegisterForm)
      this.submitstatus=true;
      this.registerservice.updateUserThroughAPI(this.register).subscribe((data)=>{
        this.message=data;
        
    })
    this.router.navigate(['registered']);
  }
}
