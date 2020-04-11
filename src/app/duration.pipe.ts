import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any,): any {
    
//     let currentDate:any=new Date();
//     let today:any=new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
//     let dateDifference = Math.abs(today- value) //returns value in miliseconds
//     const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
//     let milisecondsToSeconds= dateDifference*0.001; //converts miliseconds to seconds
//     let duration = milisecondsToSeconds/secondsInDay;
//     let less:string='less than a year ago'
//     if (duration>=1){
//       return duration;
//     }else{
//       return less;
//     }


//   }

// }
  if (value) {
    const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
    if (seconds < 29)
    return 'Just now';
    const intervals = {
      'year': 31536000,
      'month': 2592000,
      'week': 604800,
      'day': 86400,
      'hour': 3600,
      'minute': 60,
      'second': 1
    };
    let counter;
    for (const i in intervals) {
      counter = Math.floor(seconds / intervals[i]);
      if (counter > 0)
      if (counter === 1) {
        return counter + ' ' + i + ' ago';
      } else {
        return counter + ' ' + i + 's ago';
      }
    }
  }
  return value;
}

}
