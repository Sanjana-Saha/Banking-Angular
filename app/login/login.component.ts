import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ChangeStatus } from '../models/changestatus';
import { User } from '../models/user';
import { LoginService } from '../services/LoginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 myForm:FormGroup;
 user:User;
 message;
 status;
 changeStatus:ChangeStatus;

 userwlcm:string;
  constructor(private loginService:LoginService) { 
    // this.changeStatus=new ChangeStatus();
    this.user=new User();
    this.myForm=new FormGroup({
      username:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      password:new FormControl(null,Validators.required)
    });
  }
  get username(){
    return this.myForm.get("username");
  }
  get password(){
    return this.myForm.get("password");
  }

  checkPassword(){
  //  this.changeStatus.logincount++;
 // this.user.logincount++;
    this.user.UserId=this.username.value;
    this.user.UserPass=this.password.value;
    // this.changeStatus.user.UserId=this.username.value;
    // this.changeStatus.user.UserPass=this.password.value;
    // this.changeStatus.user=this.user;
    this.loginService.getLockStatusFromAPI(this.user).subscribe((data)=>{
         this.message=data;
         if(this.message==null){
           console.log("Invalid user")
           this.userwlcm="Invalid user";
         }
         //  this.status=!this.message;
     //     console.log(this.message);
         // console.log(this.status);
          if(this.message==false){
       //  this.welcome="Login Succesfull";
         this.userwlcm="Login Successfull!!"
       //  console.log(this.welcome);
          }
          if(this.message==true){
     //  this.nowelcome="Account Lock";
       this.userwlcm="Locked Account"
          }

    })

  }

  ngOnInit(): void {
  }

}
