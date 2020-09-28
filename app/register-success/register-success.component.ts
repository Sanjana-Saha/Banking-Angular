import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent implements OnInit {

  constructor(private router:Router) { }
  goToLogin(){
    this.router.navigate(['login']);
  }
  ngOnInit(): void {
  }

}
