import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{

  cartarray:any=[];
  cartlist=new BehaviorSubject([])

  constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
    
  }

  //add to cart
  addtocart(service:any){
    this.cartarray.push(service)
    this.cartlist.next(this.cartarray)
  }

  //remove a single item from the cart
  removecart(service:any){
    this.cartarray.map((item:any,index:any)=>{
      if(service.id===item.id){
        this.cartarray.splice(index,1)//remove from cart
      }
    })
    this.cartlist.next(this.cartarray)//update cartlist
  }

  //empty the cartlist
  removeall(){
    this.cartarray=[]
    this.cartlist.next(this.cartarray)
  }

  postbooking(ownername:any,mobileno:any,vehiclename:any,modelname:any,regnumber:any,address:any){
    const body={
      ownername,
      mobileno,
      vehiclename,
      modelname,
      regnumber,
      address
      
    }
    return this.http.post('http://localhost:3000/booking',body)
  }
  
}
