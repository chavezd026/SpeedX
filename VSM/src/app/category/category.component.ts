import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  services:any=[];

    constructor(private ds:DataService,private cart:CartService){

    }

    searchTerm:string=''

    ngOnInit(): void {
      this.ds.getservices().subscribe(
        (data:any)=>{
          this.services = data.services;
        }
      ) 

      this.ds.searchKey.subscribe(
        (data:any)=>{
          this.searchTerm = data
        }
      )
    }

    addtocart(service:any){
      this.cart.addtocart(service)
      alert('service added')
    }

    search(event:any){
      let searchKey=event.target.value
      this.ds.searchKey.next(searchKey)
    }
}
