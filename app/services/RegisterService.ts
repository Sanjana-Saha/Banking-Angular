import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Register} from '../models/register';
import {ForgotPassword} from '../models/forgot-password';

@Injectable()
export class RegisterService{
    constructor(private http:HttpClient){
    }
    updateUserThroughAPI(register:Register){
        return this.http.put("http://localhost:57967/api/SavingsAccountDetails"+register.AccountNumber,register);
    }
}
