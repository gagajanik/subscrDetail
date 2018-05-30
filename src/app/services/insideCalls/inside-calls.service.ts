import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../../objects/person';
import {Details} from '../../objects/details';
import {Charge} from '../../objects/charge';


@Injectable()
export class InsideCallsService {
  result: Person[];
  result2: Details[];
  result3: Charge;
  constructor(private http: HttpClient) {}

/*  getSubscrDetailsDialog(phone) {
    return this.http.get('api/test', {params: {phone: phone}});
}*/

  getSubscrDetailsDialog(phone) {
    return this.http.get('api/subscrDet', {params: {'phone': phone}}).subscribe(res => {
      return this.result = <Person[]> res;
    });
  }

  getSubscrDetailsTab1Ok1(phone, startDate, endDate) {
    return this.http.get('api/subscrDetTab1Ok1',
      {params: {phone: phone, startDate: startDate, endDate: endDate}}).subscribe(res => {
      return this.result2 = <Details[]> res;
    });
  }
  getSubscrDetailsTab1Ok2(phone, subscrNum, startDate, endDate) {
    return this.http.get('api/subscrDetTab1Ok2',
      {params: {phone: phone, subscr: subscrNum, startDate: startDate, endDate: endDate}});
  }
}
