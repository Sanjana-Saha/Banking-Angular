import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Transaction} from '../models/transaction';

import { TransactionService } from '../services/TransactionService';

@Component({
  selector: 'app-transaction-imps',
  templateUrl: './transaction-imps.component.html',
  styleUrls: ['./transaction-imps.component.css']
})
export class TransactionIMPSComponent implements OnInit {

  transaction:Transaction;

  transForm:FormGroup;
 

  message:string;

  constructor(private transactionService:TransactionService) { 
    this.transaction=new Transaction();
    this.transForm=new FormGroup({
      fromac:new FormControl(null,Validators.required),
      toac:new FormControl(null,Validators.required),
      amount:new FormControl(null,Validators.required),
      transdate:new FormControl(null,Validators.required)
    })
  }

  public get fromac(){
    return this.transForm.get("fromac");
  }
  public get toac(){
    return this.transForm.get("toac");
  }
  public get amount(){
    return this.transForm.get("amount");
  }
  public get transdate(){
    return this.transForm.get("transdate");
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.transForm.valid)
    {
      this.transaction.FromAccountNumber=this.fromac.value;
      this.transaction.ToAccountNumber=this.toac.value;
      this.transaction.AmountTransferred=this.amount.value;
      this.transaction.TransactionDate=this.transdate.value;

      this.transaction.TransactionType="IMPS";
      this.transactionService.TransactionsToAPI(this.transaction).subscribe((data)=>{
        this.message=data.toString();
        console.log(this.message);
      })

    }
  }
}
