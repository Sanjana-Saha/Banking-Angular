import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AdminLogin} from '../models/adminLogin';

@Injectable()
export class AdminLoginService{
    constructor(private http:HttpClient){

    }

    checkAdmin(adminLogin:AdminLogin){
        return this.http.post("http://localhost:52636/api/AdminLogin",adminLogin);
    }
}