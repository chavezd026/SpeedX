import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(services:[],searchKey:string,propName:string): any[] {
    if(!services||searchKey==""||propName==""){
      return services;
    }
    const result:any=[]
    services.forEach((service:any)=>{
      if(service[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(service)
      }
    })
    return result;
  }
}
