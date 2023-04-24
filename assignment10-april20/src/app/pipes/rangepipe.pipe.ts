import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangepipe'
})
export class RangepipePipe implements PipeTransform {

  transform(products:any, min:any ,max:any): any {

    console.log(min,max)
    return products.filter(
      (x:any)=> parseInt(x.price)>=min && parseInt(x.price)<=max)
  }

}
