import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Transaction} from '../models/transaction';


@Injectable()
export class TransactionService{
    constructor(private http:HttpClient){
    }



    TransactionsToAPI(transaction:Transaction)
    {
        return this.http.post("http://localhost:52376/api/Transaction",transaction);
    }

    
}