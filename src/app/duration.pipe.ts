import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any,): any {
    console.log(value)
    let currentDate:any=new Date();
    let today:any=new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
    // new Date(today.getFullYear(), today.getMonth(), today.getDate())
    let createdDate:any=new Date(value).getFullYear().getMonth().getDate();
    let duration= currentDate-createdDate;

    return duration;
  }

}
