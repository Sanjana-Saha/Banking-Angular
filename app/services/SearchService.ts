import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SearchModel} from '../models/searchmodel';

@Injectable()
export class SearchService
{
    constructor(private http:HttpClient,private http1:HttpClient)
    {

    }
    GetSearchStatusFromAPI(value:SearchModel)
    {
        return this.http.post("http://localhost:52376/api/Search",value);
    }

}