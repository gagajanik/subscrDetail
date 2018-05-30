import { Component, OnInit } from '@angular/core';
import {IncomingCallsService} from '../../../services/incomingService/incoming-calls.service';
import {Charge} from '../../../objects/charge';
import {Incomming} from '../../../objects/incomming';
import {GlobalsService} from '../../../services/global/globals.service';

@Component({
  selector: 'app-incoming-calls',
  templateUrl: './incoming-calls.component.html',
  styleUrls: ['./incoming-calls.component.css']
})
export class IncomingCallsComponent implements OnInit {
result: Incomming[];
  constructor(private ic: IncomingCallsService, private glob: GlobalsService) { }

  ngOnInit() {
  }
  incomingCallsData() {
    return this.ic.incomingCallsData(this.glob.phone, this.glob.startDate, this.glob.endDate).subscribe(res => {
      this.result =  <Incomming[]> res;
    });
  }
  incomingCallsReport() {
    window.open('api/incommingCallsReport?phone=' + this.glob.phone +
      '&startDate=' + this.glob.startDate + '&endDate=' + this.glob.endDate, '_blank', 'widow1');
  }
}
