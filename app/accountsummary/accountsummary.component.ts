import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountSummaryService } from '../services/AccountSummaryService';
import {AcSummary} from '../models/accountsummary';

@Component({
  selector: 'app-accountsummary',
  templateUrl: './accountsummary.component.html',
  styleUrls: ['./accountsummary.component.css']
})
export class AccountsummaryComponent implements OnInit {
acsum:AcSummary;
message;
  constructor(private asumryserv:AccountSummaryService,private router:Router) { 
    this.acsum=new AcSummary();
  }

  getAccountSummary(){
    this.acsum.UserId='LTI00101';
    this.asumryserv.getAccountSummaryFromAPI(this.acsum).subscribe((data)=>{
      console.log(data);
  this.message=data;
  // this.message.ToAccountNumber=data['ToAccountNumber'];
    });

  }
  ngOnInit(): void {
  }

}
