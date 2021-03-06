import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLogin } from '../models/adminLogin';
import { AdminLoginService } from '../services/AdminLoginService';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm:FormGroup;
  adminLogin:AdminLogin;
  message;
  welcome;

  constructor(private adminLoginService:AdminLoginService,private router:Router) { 
    this.adminLogin=new AdminLogin();
    this.loginForm=new FormGroup({
      adminname:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required)
    });
  }

  public get adminname(){
    return this.loginForm.get("adminname");
  }

  public get password(){
    return this.loginForm.get("password");
  }

  ngOnInit(): void {
  }

  checkAdmin(){
    this.adminLogin.AdminId=this.adminname.value;
    this.adminLogin.AdminPassword=this.password.value;
    this.adminLoginService.checkAdmin(this.adminLogin).subscribe((data)=>{
      this.message=data;
      if(this.message==false)
      {
       // console.log("Invalid");
        this.welcome="Invalid credentials";
      }
      if(this.message==true)
      {
        this.welcome="Login successful";
        this.router.navigate(['admindashboard',this.adminLogin.AdminId]);
      }

    })
  }
}
