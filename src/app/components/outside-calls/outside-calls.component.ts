import { Component, OnInit } from '@angular/core';
import {OutsideCallsService} from '../../services/outsideCalls/outside-calls.service';
import {Charge} from '../../objects/charge';
import {OutsideCall} from '../../objects/outsideCall';
import {InsideCallsService} from '../../services/insideCalls/inside-calls.service';
import {GlobalsService} from '../../services/global/globals.service';

@Component({
  selector: 'app-outside-calls',
  templateUrl: './outside-calls.component.html',
  styleUrls: ['./outside-calls.component.css']
})
export class OutsideCallsComponent implements OnInit {
  reqObject = {
    phone: '',
    startDate: '',
    endDate: '',
    subscrNum: ''
  };
  result: OutsideCall[];
  constructor(private octd: OutsideCallsService, public glob: GlobalsService) { }

  ngOnInit() {
  }

  getOutsideTabData() {
    return this.octd.getOutsideCallTabData(1, 10, this.glob.phone, this.glob.startDate, this.glob.endDate).subscribe(res => {
     return this.result = <OutsideCall[]> res;
    });
  }

  tab2PrintReport() {
    window.open('api/tab2Print?phone=' + this.glob.phone +
      '&startDate=' + this.glob.startDate + '&endDate=' + this.glob.endDate, '_blank', 'widow1');
  }
}
