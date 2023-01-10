import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-telecom',
  templateUrl: './telecom.component.html',
  styleUrls: ['./telecom.component.css']
})
export class TelecomComponent implements OnInit {

  constructor() {
    document.title = 'Case Study | Telecom | Test Yantra';
  }

  ngOnInit(): void {
  }

}
