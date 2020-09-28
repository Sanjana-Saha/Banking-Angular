import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {ChangeStatus} from '../models/changestatus';
 @Injectable()
export class LoginService{
  //  chang:ChangeStatus;
    constructor(private http:HttpClient){

    }
//User login and Account lock
    getLockStatusFromAPI(user:User){
        return this.http.post("http://localhost:57148/api/Login",user);
    }
//Change Password
    postChangePassFromAPI(user:User){
        return this.http.post("http://localhost:57148/api/ChangePass",user);
    }
}