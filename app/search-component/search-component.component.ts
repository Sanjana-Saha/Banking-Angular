import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/SearchService';
import {SearchModel} from '../models/searchmodel';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
Value:SearchModel;
message;
count:number;
  constructor(private searchService:SearchService) { 
      this.Value=new SearchModel();
      this.count=0;
  }
  GetStatus(Val)
  {
    this.Value.message=Val.value;
    this.count=1;
    this.searchService.GetSearchStatusFromAPI(this.Value).subscribe((data)=>{
      this.message=data;
    })
  }



  ngOnInit(): void {
  }

}
