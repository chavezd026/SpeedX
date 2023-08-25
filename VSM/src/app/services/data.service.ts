import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  register(email:any,mobileno:any,password:any){
    const body={
      email,
      mobileno,
      password
    }
    return this.http.post('http://localhost:3000/register',body)
  }

  login(email:any,password:any){
    const body={
      email,
      password
    }
    return this.http.post('http://localhost:3000/login',body)
  }

  getservices(){
    return this.http.get('http://localhost:3000/services')
  }

  searchKey=new BehaviorSubject('')
  

}
