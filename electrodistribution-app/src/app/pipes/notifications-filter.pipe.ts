import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notificationsFilter'
})
export class NotificationsFilterPipe implements PipeTransform {

  transform(list: any[], value: string): any[]{

    if(value === "All"){
      return list;
    }

    if(value === "Unread"){
      return list.filter(item => item.status === value);
    }

    return value ? list.filter(item => item.type === value) : list;
  }

}
