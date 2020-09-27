import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-created',
  templateUrl: './account-created.component.html',
  styleUrls: ['./account-created.component.css']
})
export class AccountCreatedComponent implements OnInit {

  constructor(private myRouter:Router) { }

  ngOnInit(): void {
  }

  goToHome(){
    this.myRouter.navigate(['home']);
  }
}
