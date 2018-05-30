import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class IncomingCallsService {

  constructor(private http: HttpClient ) {}

  incomingCallsData(phone, startDate, endDate) {
    return this.http.get('api/incomingCallsData',
      {params: {phone: phone, startDate: startDate, endDate: endDate}});
  }
}
