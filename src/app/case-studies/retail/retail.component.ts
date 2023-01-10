import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent implements OnInit {

  constructor() {
    document.title = 'Case Study | Retail Domain | TechnoElevate';
  }
  ngOnInit(): void {
  }

}
