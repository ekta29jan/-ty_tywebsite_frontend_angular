import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-force',
  templateUrl: './sales-force.component.html',
  styleUrls: ['./sales-force.component.css']
})
export class SalesForceComponent implements OnInit {

  constructor() {
    document.title = 'Case Study | Salesforce | Test Yantra';
  }

  ngOnInit(): void {
  }

}
