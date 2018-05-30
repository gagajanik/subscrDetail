import { Component, OnInit } from '@angular/core';
import {InsideCallsService} from '../../services/insideCalls/inside-calls.service';
import {Person} from '../../objects/person';
import {Details} from '../../objects/details';
import {Charge} from '../../objects/charge';
import {GlobalsService} from '../../services/global/globals.service';


@Component({
  selector: 'app-inside-calls',
  templateUrl: './inside-calls.component.html',
  styleUrls: ['./inside-calls.component.css']
})
export class InsideCallsComponent implements OnInit {
  data: Details[] ;
  phone = '';
    reqObject = {
      phone: '',
      startDate: '',
      endDate: '',
      subscrNum: ''
    };
  details: Charge = {
    currentBalance: null,
    estimateBalance: null,
    creditBalance: null,
    dowPaymentBalance: null,
  };
  subscriber = '';
  constructor(public ics: InsideCallsService, public glob: GlobalsService) {
  }
  getSubscrDetailsDialog(d1) {
    d1.open();
    return this.ics.getSubscrDetailsDialog(this.glob.phone);
  }
  getSubscrDetailsTab1Ok1(d1) {
    this.getSubscrDetailsTab1Ok2();
    d1.close();
    return this.ics.getSubscrDetailsTab1Ok1(this.glob.phone,
      this.glob.startDate, this.glob.endDate);
  }

  getSubscrDetailsTab1Ok2() {
    this.ics.getSubscrDetailsTab1Ok2(this.glob.phone, this.glob.subscrNum,
      this.glob.startDate, this.glob.endDate).subscribe(res => {
        this.details =  <Charge> res;
    });
  }
  change(event: any) {
    this.glob.subscrNum = event.target.value;
  }

  onNavigate() {
    window.open('api/repo?phone=' + this.glob.phone + '&subscr=' + this.glob.subscrNum + '&startDate=' +
                 this.glob.startDate + '&endDate=' + this.glob.endDate, '_blank', 'widow1');
    window.open('api/repo1?phone=' + this.glob.phone + '&subscr=' + this.glob.subscrNum + '&startDate=' +
      this.glob.startDate + '&endDate=' + this.glob.endDate, '_blank', 'widow2');
  }

  oneNumberPrintReports() {
    window.open('api/oneNumberRepo?phone=' + this.glob.phone +
      '&subscr=' + this.glob.subscrNum + '&startDate=' +
      this.glob.startDate + '&endDate=' + this.glob.endDate, '_blank', 'widow1');
    window.open('api/oneNumberRepo1?phone=' + this.reqObject.phone +
      '&subscr=' + this.glob.subscrNum + '&startDate=' +
      this.glob.startDate + '&endDate=' + this.glob.endDate, '_blank', 'widow2');
  }
  anatherTwiceReport() {
    window.open('api/anatherTwiceRepo?phone=' + this.glob.phone +
       '&startDate=' + this.glob.startDate + '&endDate=' + this.glob.endDate, '_blank', 'widow1');
  }
  ngOnInit(): void {
  }
}
