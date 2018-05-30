import { Component, OnInit } from '@angular/core';
import {AccountmentsService} from '../../services/accountment/accountments.service';
import {GlobalsService} from '../../services/global/globals.service';
import {Incomming} from '../../objects/incomming';
import {Accts} from '../../objects/accts';
import {AcctCharges} from '../../objects/acctCharges';
import {Charge} from '../../objects/charge';

@Component({
  selector: 'app-accountments',
  templateUrl: './accountments.component.html',
  styleUrls: ['./accountments.component.css']
})
export class AccountmentsComponent implements OnInit {
result: Accts[];
  details: AcctCharges = {
    amount: null,
    currentBalance: null,
    prevBalance: null,
    operationDate: null,
  };
  constructor(public accts: AccountmentsService, private glob: GlobalsService) { }
  incomingCallsData() {
    this.getAcctsCharge();
    return this.accts.getAccountmentData(this.glob.phone, this.glob.subscrNum, this.glob.startDate, this.glob.endDate).subscribe(res => {
      this.result =  <Accts[]> res;
    });
  }
  getAcctsCharge() {
     this.accts.getAcctsCharge(this.glob.subscrNum).subscribe(res => {
      this.details =  <AcctCharges> res;
    });
  }

  getGridsData(d2) {
    d2.open();
   return this.accts.getGridsData(this.glob.subscrNum);
  }
  getGridsDataYear(d3) {
    d3.open();
    return this.accts.getGridsDataYear(this.glob.subscrNum);
  }

  ngOnInit() {
  }

}
