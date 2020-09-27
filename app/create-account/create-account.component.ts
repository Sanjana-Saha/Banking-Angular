import { Component, OnInit } from '@angular/core';
import {CreateAccount} from '../models/createAccount';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {CreateAccountService} from '../services/createAccountService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createAccount:CreateAccount;
  message;
  err;
  myForm:FormGroup;
  showdetails;
  constructor(private createAccountService:CreateAccountService,private myRouter:Router) {
    this.createAccount=new CreateAccount();
    this.myForm=new FormGroup({
      titles:new FormControl(null,Validators.required),
      fname:new FormControl(null,Validators.required),
      mname:new FormControl(null),
      lname:new FormControl(null,Validators.required),
      fthrname:new FormControl(null,Validators.required),
      mob:new FormControl(null,[Validators.required,Validators.pattern("[1-9]{1}[0-9]{9}")]),
      email:new FormControl(null),
      adhrno:new FormControl(null,[Validators.required,Validators.pattern("[0-9]{12}")]),
      dob:new FormControl(null,Validators.required),
      raddr1:new FormControl(null,Validators.required),
      raddr2:new FormControl(null,Validators.required),
      rlm:new FormControl(null),
      rcity:new FormControl(null,Validators.required),
      rstate:new FormControl(null,Validators.required),
      rpin:new FormControl(null,Validators.required),
      paddr1:new FormControl(null,Validators.required),
      paddr2:new FormControl(null,Validators.required),
      plm:new FormControl(null),
      pcity:new FormControl(null,Validators.required),
      pstate:new FormControl(null,Validators.required),
      ppin:new FormControl(null,Validators.required),
      occ:new FormControl(null,Validators.required),
      source:new FormControl(null,Validators.required),
      gross:new FormControl(null,Validators.required),
      agree:new FormControl(null,Validators.required)
    });
    this.showdetails=false;
   } 

  ngOnInit(): void {
  }

  public get titles(){
    return this.myForm.get("titles");
  }
  public get fname(){
    return this.myForm.get("fname");
  }
  public get mname(){
    return this.myForm.get("mname");
  }
  public get lname(){
    return this.myForm.get("lname");
  }
  public get fthrname(){
    return this.myForm.get("fthrname");
  }
  public get mob(){
    return this.myForm.get("mob");
  }
  public get email(){
    return this.myForm.get("email");
  }
  public get adhrno(){
    return this.myForm.get("adhrno");
  }
  public get dob(){
    return this.myForm.get("dob");
  }
  public get raddr1(){
    return this.myForm.get("raddr1");
  }
  public get raddr2(){
    return this.myForm.get("raddr2");
  }
  public get rlm(){
    return this.myForm.get("rlm");
  }
  public get rcity(){
    return this.myForm.get("rcity");
  }
  public get rstate(){
    return this.myForm.get("rstate");
  }
  public get rpin(){
    return this.myForm.get("rpin");
  }
  public get paddr1(){
    return this.myForm.get("paddr1");
  }
  public get paddr2(){
    return this.myForm.get("paddr2");
  }
  public get plm(){
    return this.myForm.get("plm");
  }
  public get pcity(){
    return this.myForm.get("pcity");
  }
  public get pstate(){
    return this.myForm.get("pstate");
  }
  public get ppin(){
    return this.myForm.get("ppin");
  }
  public get occ(){
    return this.myForm.get("occ");
  }
  public get source(){
    return this.myForm.get("source");
  }
  public get gross(){
    return this.myForm.get("gross");
  }
  public get agree(){
    return this.myForm.get("agree");
  }

  optDebitCard(){
    this.createAccount.DebitcardOpted==true;
  }
  agreed(){
    this.createAccount.tnc=true;
  }
  onSubmit(){
    console.log(this.myForm);
    if(this.myForm.valid && this.createAccount.tnc)
    {
      this.createAccount.Title=this.titles.value;
    this.createAccount.FirstName=this.fname.value;
    this.createAccount.MiddleName=this.mname.value;
    this.createAccount.LastName=this.lname.value;
    this.createAccount.FatherName=this.fthrname.value;
    this.createAccount.MobileNumber=this.mob.value;
    this.createAccount.EmailId=this.email.value;
    this.createAccount.AadharNumber=this.adhrno.value;
    this.createAccount.DateOfBirth=this.dob.value;
    this.createAccount.ResAddress1=this.raddr1.value;
    this.createAccount.ResAddress2=this.raddr2.value;
    this.createAccount.ResLandmark=this.rlm.value;
    this.createAccount.ResState=this.rstate.value;
    this.createAccount.ResCity=this.rcity.value;
    this.createAccount.ResPincode=this.rpin.value;
    this.createAccount.PerAddress1=this.paddr1.value;
    this.createAccount.PerAddress2=this.paddr2.value;
    this.createAccount.PerLandmark=this.plm.value;
    this.createAccount.PerState=this.pstate.value;
    this.createAccount.PerCity=this.pcity.value;
    this.createAccount.PerPincode=this.ppin.value;
    this.createAccount.OccupationType=this.occ.value;
    this.createAccount.SourceIncome=this.source.value;
    this.createAccount.GrossIncome=this.gross.value;
    this.createAccount.tnc=this.agree.value;
    this.createAccountService.insertIntoOpenAccount(this.createAccount).subscribe((data)=>{
      this.message=data;
      this.myRouter.navigate(['created']);
    // this.err="Submitted successfully";
    })
    }
    
  }

}
