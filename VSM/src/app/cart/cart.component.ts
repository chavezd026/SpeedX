import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartitem:any=[]
  // bookingForm !: FormGroup
  constructor(private cart:CartService,private route:Router,private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.cart.cartlist.subscribe(
      (data:any)=>{
        this.cartitem=data
      }
    )
    
  }

  removecart(service:any){
    this.cart.removecart(service)
  }

  removeall(){
    this.cart.removeall()
  }

  bookingForm=this.fb.group({
    ownername:['',Validators.required],
    mobno:['',Validators.required],
    vehname:['',Validators.required],
    modname:['',Validators.required],
    vehregno:['',Validators.required],
    address:['',Validators.required],
  })

  Booking(){
    var ownername=this.bookingForm.value.ownername;
    var mobileno=this.bookingForm.value.mobno;
    var vehiclename=this.bookingForm.value.vehname;
    var modelname=this.bookingForm.value.modname;
    var regnumber=this.bookingForm.value.vehregno;
    var address=this.bookingForm.value.address;
    if(this.bookingForm.valid){
      this.cart.postbooking(ownername,mobileno,vehiclename,modelname,regnumber,address).subscribe(
        (result:any)=>{
          alert(result.message)
          console.log(this.bookingForm);
          this.route.navigateByUrl('homepage')
        },
        result=>{
          alert(result.error.message)
        }
      )
    }
  }
}
