import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EasyUIModule } from 'angular-easyui/components/easyui/easyui.module';
import { InsideCallsComponent } from './components/inside-calls/inside-calls.component';
import {InsideCallsService} from './services/insideCalls/inside-calls.service';
import { OutsideCallsComponent } from './components/outside-calls/outside-calls.component';
import {OutsideCallsService} from './services/outsideCalls/outside-calls.service';
import {GlobalsService} from './services/global/globals.service';
import { IncomingCallsComponent } from './components/incoming-calls/incoming-calls/incoming-calls.component';
import {IncomingCallsService} from './services/incomingService/incoming-calls.service';
import { LocalCallsComponent } from './components/local-calls/local-calls.component';
import {LocalCallsService} from './services/localCalls/local-calls.service';
import { AccountmentsComponent } from './components/accountments/accountments.component';
import {AccountmentsService} from './services/accountment/accountments.service';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    InsideCallsComponent,
    OutsideCallsComponent,
    IncomingCallsComponent,
    LocalCallsComponent,
    AccountmentsComponent
  ],
  imports: [
    BrowserModule,
    EasyUIModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [InsideCallsService, OutsideCallsService, GlobalsService, IncomingCallsService, LocalCallsService, AccountmentsService]
})
export class AppModule { }
