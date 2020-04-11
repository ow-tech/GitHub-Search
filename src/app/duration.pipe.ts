import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any,): any {
    
    let currentDate:any=new Date().getFullYear();
    let newValue= value.getFullYear();
    // let today:any=new Date().getFullYear();
    let duration =(currentDate - newValue)
    console.log(duration)
    if(duration>=1){
      return duration;
    }else{
      return 'less than a year'
    }
  }

}
