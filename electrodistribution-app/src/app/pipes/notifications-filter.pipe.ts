import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notificationsFilter',
  pure: false
})
export class NotificationsFilterPipe implements PipeTransform {

  transform(list: any[], value: string): any[]{

    if(value === "All"){
      return list;
    }

    if(value === "Unread"){
      return list.filter(item => item.status === value);
    }
/*
    if(value === "Clear"){
      return [];
    }

    if(value === "Mark"){
      return list.filter(item => item.status = 'Read');
    }
*/
    return value ? list.filter(item => item.type === value) : list;

    
  }

}
