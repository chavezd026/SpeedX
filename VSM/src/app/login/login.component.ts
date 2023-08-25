import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router:Router, private ds:DataService,private fb:FormBuilder,private http:HttpClient){

  }

  ngOnInit(): void {
    
  }

  //model for login
  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })


    login(){
      var email=this.loginForm.value.email;
      var pswd=this.loginForm.value.pswd;
      if(this.loginForm.valid){
        this.ds.login(email,pswd).subscribe(
          (result:any)=>{
            alert(result.message);
            this.router.navigateByUrl('homepage');
          },
          result=>{
            alert(result.error.message)
          }
        )
      }
      else{
        alert("Login failed")
      }
    } 

    register(){
      window.location.href='register';
    }
}
