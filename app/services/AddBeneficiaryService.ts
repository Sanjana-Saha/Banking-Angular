import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AddBeneficiary} from '../models/add-beneficiary';

@Injectable()
export class AddBeneficiaryService{
    constructor(private http:HttpClient){
    }

    addBeneficiaryAPI(benef:AddBeneficiary){
        return this.http.post("http://localhost:52636/api/AddBeneficiaries",benef);
    }
}