import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SearchModel} from '../models/searchmodel';
import {UpdateModel} from '../models/updatemodel';

@Injectable()
export class AdminDecisionService
{
    constructor(private http:HttpClient,private http1:HttpClient,private http2:HttpClient)
    {

    }
    GetAllAccountsFromAPI()
    {
        return this.http.get("http://localhost:52376/api/AdminDecision");
    }
    GetSelectedAccountDetails(value:SearchModel)
    {
        return this.http1.post("http://localhost:52376/api/AdminDecision",value);
    }
    UpdateAdminStatusFromAPI(update:UpdateModel)
    {
        return this.http2.put("http://localhost:52376/api/AdminDecision",update);
    }
}