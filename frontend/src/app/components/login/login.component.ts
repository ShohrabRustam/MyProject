import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form={
    'email': null,
    'password':null
  };

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){}

}
