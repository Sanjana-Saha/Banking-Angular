import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Register} from '../models/register';
import {ForgotPassword} from '../models/forgot-password';
import { SetPass } from '../models/setpass';

@Injectable()
export class RegisterService{
    constructor(private http:HttpClient){
    }
    updateUserThroughAPI(register:Register){
        return this.http.post("http://localhost:49794/api/RegInternetBanking",register);
    }
    setUserThroughAPI(setpassword:SetPass){
        return this.http.post("http://localhost:49794/api/SetPassword",setpassword);
       
    }
}
