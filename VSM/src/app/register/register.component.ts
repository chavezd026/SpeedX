import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private ds:DataService,private fb:FormBuilder,private route:Router){

  }
  ngOnInit(): void {
    
  }

  registerForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    mobno:['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*'),Validators.minLength(6)]]
  })
  
  register(){
    var email=this.registerForm.value.email;
    var mobno=this.registerForm.value.mobno;
    var pswd=this.registerForm.value.pswd;
    if(this.registerForm.valid){
    this.ds.register(email,mobno,pswd).subscribe(
      (result:any)=>{
        alert(result.message);
        this.route.navigateByUrl('');
      },
      result=>{
        alert(result.error.message)
      }
    )
    }
    else{
      alert("Registration failed")
    }
  }

  login(){
    window.location.href='';
  }
}
