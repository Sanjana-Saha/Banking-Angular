import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private loginService:LoginService,private router:Router) { 
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
  this.user.logincount++;
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
           this.user.logincount=0;
         }
  
          if(this.message==false){
       
          this.user.logincount=0;
         this.userwlcm="Login Successfull!!"
// this.router.navigate(['dashboard',this.user.UserId]);

   
          }

          if(this.message=="Invalid Password"){
            this.userwlcm="Invalid Password!! Login attempt left "+(3-this.user.logincount);
          }
          if(this.message==true){
    
       this.userwlcm="Locked Account"
          }

    })

  }

  ngOnInit(): void {
  }

}
