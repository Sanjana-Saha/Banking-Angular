import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AddBeneficiary} from '../models/add-beneficiary';
import { AddBeneficiaryService } from '../services/AddBeneficiaryService';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {

  addbenef:AddBeneficiary;
  myForm:FormGroup;
  message;
  welcome:string;
  constructor(private addBeneficiaryService:AddBeneficiaryService) { 
    this.addbenef=new AddBeneficiary();
    this.myForm=new FormGroup({
      beneficiaryname:new FormControl(null,Validators.required),
      benefac:new FormControl(null,Validators.required),
      confirmbenefac:new FormControl(null,Validators.required),
      benefnickname:new FormControl(null)
    });
  }

  public get beneficiaryname()
  {
    return this.myForm.get("beneficiaryname");
  }
  public get benefac()
  {
    return this.myForm.get("benefac");
  }
  public get confirmbenefac()
  {
    return this.myForm.get("confirmbenefac");
  }
  public get benefnickname()
  {
    return this.myForm.get("benefnickname");
  }

  ngOnInit(): void {
  }

  add(){
    if(this.myForm.valid)
    {
      this.addbenef.BeneficiaryAccountNumber=this.benefac.value;
      this.addbenef.BeneficiaryName=this.beneficiaryname.value;
      this.addbenef.Nickname=this.beneficiaryname.value;
      this.addBeneficiaryService.addBeneficiaryAPI(this.addbenef).subscribe((data)=>{
        this.message=data;
        this.welcome="Saved successfully";
      })
    }
  }
}
