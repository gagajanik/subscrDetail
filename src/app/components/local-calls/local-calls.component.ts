import { Component, OnInit } from '@angular/core';
import {LocalCallsService} from '../../services/localCalls/local-calls.service';
import {Incomming} from '../../objects/incomming';
import {GlobalsService} from '../../services/global/globals.service';

@Component({
  selector: 'app-local-calls',
  templateUrl: './local-calls.component.html',
  styleUrls: ['./local-calls.component.css']
})
export class LocalCallsComponent implements OnInit {
  result: Incomming[];
  constructor(private lcs: LocalCallsService, private glob: GlobalsService) { }
  localCallsData() {
    return this.lcs.localCallsData(this.glob.phone, this.glob.startDate, this.glob.endDate).subscribe(res => {
      this.result =  <Incomming[]> res;
    });
  }
  localCallsReport() {
    window.open('api/localCallsReport?phone=' + this.glob.phone +
      '&startDate=' + this.glob.startDate + '&endDate=' + this.glob.endDate, '_blank', 'widow1');
  }
  ngOnInit() {
  }

}
