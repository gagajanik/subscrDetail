import { Component } from '@angular/core';

import {MessagerService} from 'angular-easyui/components/messager/messager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
  title = 'app';
  phone = '';
  startDate = '';
  endDate = '';
}

