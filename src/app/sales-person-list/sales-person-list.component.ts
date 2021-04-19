import { Component, OnInit } from '@angular/core';
import { SalesPerson} from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

 theSalesPersonList : SalesPerson[]=[new SalesPerson("rajvir pratab","singh","rajvirpratab2001@ymail.com",5678),
                                     new SalesPerson("ashish","kumar","ashishkumar2001@gmail.com",8988),
                                     new SalesPerson("ashutosh","pathak","ashutoshpathak2987@gmail.com",5696),
                                     new SalesPerson("puspak","sharma","puspak5467@gmail.com",9578)];

 

  constructor() { }

  ngOnInit(): void {
  }

}
