import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SearchModel } from '../models/searchmodel';
import {AdminDecisionService} from '../services/AdminDecisionService';
import {UpdateModel} from '../models/updatemodel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-decision',
  templateUrl: './admin-decision.component.html',
  styleUrls: ['./admin-decision.component.css']
})
export class AdminDecisionComponent implements OnInit,OnChanges {
  userId:SearchModel;
  update:UpdateModel;
  Accounts;
  AccountDetails;
  val:number;
  private sub:any;
  adminid : string;
  constructor(private admindecisionservice:AdminDecisionService,private myRouter:Router,private route : ActivatedRoute) {
    this.admindecisionservice.GetAllAccountsFromAPI().subscribe((data)=>{
      this.Accounts=data;
    })
    this.userId=new SearchModel();
    this.update=new UpdateModel();
    this.val=0;
   }
   changeId(uid)
   {
     this.val=1;
     this.userId.message=uid.value;
     this.admindecisionservice.GetSelectedAccountDetails(this.userId).subscribe((data)=>{
       this.AccountDetails=data;
     })
   }
   changeindatabase(value:number)
   {
     this.update.id=value;
     console.log(this.update.id);
     this.update.userid=this.userId.message;
     console.log(this.update.userid);
     this.update.adminid="adm2020";
     console.log(this.update.adminid);
     this.admindecisionservice.UpdateAdminStatusFromAPI(this.update).subscribe((data)=>{

     })
     window.location.reload();
   }
   ToHome()
   {
    this.myRouter.navigate(['home']);
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.admindecisionservice.GetAllAccountsFromAPI().subscribe((data)=>{
      this.Accounts=data;
    })

  }

  ngOnInit(): void {
    this.sub=this.route.params.subscribe(params =>{
      this.adminid=params['id'];
      //console.log(this.adminid);
    })
  }

}
