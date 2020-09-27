import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/LoginService';
import { User } from '../models/user';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  myForm:FormGroup;
  user:User;
  message;
  printmessage;
  constructor(private loginService:LoginService) { 
    this.user=new User();
    this.myForm=new FormGroup({
      password:new FormControl(null,[Validators.required,Validators.minLength(5)]),
      newpassword:new FormControl(null,[Validators.required,Validators.minLength(5)]),
      userid:new FormControl(null,Validators.required)
    });
  }
  get password(){
    return this.myForm.get("password");

  }
  get userid(){
    return this.myForm.get("userid");
  }
  get newpassword(){
    return this.myForm.get("newpassword");
  }
  changePassword(){
    this.user.UserId=this.userid.value;
    this.user.UserPass=this.password.value;
    this.user.NewPass=this.newpassword.value;
    this.loginService.postChangePassFromAPI(this.user).subscribe((data)=>{
      this.message=data;
      if(this.message==1){
      this.printmessage="Password Changed Successfully!!"
      }
      else{
        this.printmessage="Invalid User Id or Password!!"
      }

    })
  }

    
  

  ngOnInit(): void {
  }

}
