import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OutsideCallsService {

  constructor(private http: HttpClient) { }
  getOutsideCallTabData(page, rows, phone, startDate, endDate) {
    return this.http.get('api/outsideTabData',
      {params: {page: page, rows: rows, phone: phone, startDate: startDate, endDate: endDate}});
  }
}
