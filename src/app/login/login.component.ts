import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins(); // Se puede llamar asi cualquier script que este en un archivo fuera de angular
// cosas que no funcionen en angular o typescript

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar() {
    this.router.navigate(['/dashboard']);
  }

}
