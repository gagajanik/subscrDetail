import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LocalCallsService {

  constructor(private http: HttpClient) { }
  localCallsData(phone, startDate, endDate) {
    return this.http.get('api/localCallsData',
      {params: {phone: phone, startDate: startDate, endDate: endDate}});
  }
}
