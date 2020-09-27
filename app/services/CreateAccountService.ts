import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateAccount} from '../models/createAccount';

@Injectable()
export class CreateAccountService{
    constructor(private http:HttpClient){
    }

    insertIntoOpenAccount(createAccount:CreateAccount){
        return this.http.post("http://localhost:52636/api/CreateSavingsAccounts",createAccount);
    }
}