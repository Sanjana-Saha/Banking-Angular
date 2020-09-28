import { Component, OnInit } from '@angular/core';
import { SetPass } from '../models/setpass';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { RegisterService } from '../services/RegisterService';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {
  setpassword:SetPass;
  message;
  err;
  myRegForm:FormGroup;
  submitstatus:boolean;

  constructor(private router:Router,private registerservice:RegisterService){ 
    this.setpassword=new SetPass();
      this.myRegForm=new FormGroup({
       password:new FormControl(null,Validators.required),
       confirmpassword:new FormControl(null,Validators.required),
      });
      this.submitstatus=false;
    }
    public get password(){
      return this.myRegForm.get("password");
    }
    public get confirmpassword(){
      return this.myRegForm.get("confirmpassword");
    }
    ngOnInit(): void {
      
    }

    submit(){
       this.setpassword.UserPass=this.password.value;
       this.setpassword.ConfirmUserPass=this.confirmpassword.value;

      //console.log(this.myRegisterForm)
      this.submitstatus=true;
      this.registerservice.setUserThroughAPI(this.setpassword).subscribe((data)=>{
      
        this.message=data;
        
    })
    this.router.navigate(['registered']);
  }
}