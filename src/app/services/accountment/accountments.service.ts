import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Grids} from '../../objects/grids';
import {Details} from '../../objects/details';

@Injectable()
export class AccountmentsService {
result: Grids[];
result2: Grids[];
  constructor(private http: HttpClient) { }
  getAccountmentData(phone, subscrNum, startDate, endDate) {
    return this.http.get('api/accountmentData',
      {params: {phone: phone, subscr: subscrNum, startDate: startDate, endDate: endDate}});
  }
  getAcctsCharge(subscr) {
    return this.http.get('api/accountmentCharge',
      {params: {subscriber: subscr}});
  }
  getGridsData(subscr) {
    return this.http.get('api/accountmentGrids',
      {params: {subscriber: subscr}}).subscribe(res => {
      return this.result = <Grids[]> res;
    });
  }

  getGridsDataYear(subscr) {
    return this.http.get('api/accountmentGridsYear',
      {params: {subscriber: subscr}}).subscribe(res => {
      return this.result2 = <Grids[]> res;
    });
  }
}
