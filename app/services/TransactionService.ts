import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
<<<<<<< HEAD
=======
import {Transaction} from '../models/transaction';
>>>>>>> 329936e063bfee463b4550e11667a5767cd43ef7

@Injectable()
export class TransactionService{
    constructor(private http:HttpClient){
    }
<<<<<<< HEAD

=======
    TransactionsToAPI(transaction:Transaction)
    {
        return this.http.post("http://localhost:52376/api/Transaction",transaction);
    }
>>>>>>> 329936e063bfee463b4550e11667a5767cd43ef7
    
}