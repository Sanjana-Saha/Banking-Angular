import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AcSummary} from '../models/accountsummary';

@Injectable()
export class AccountSummaryService{
  
    constructor(private http:HttpClient){

    }
    getAccountSummaryFromAPI(asummary:AcSummary){
        return this.http.post("http://localhost:57148/api/AccountSummary",asummary);
    }
}