import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regression',
  templateUrl: './regression.component.html',
  styleUrls: ['./regression.component.css']
})
export class RegressionComponent implements OnInit {

  constructor() {
    document.title = "Regression Testing | Test Yantra";
  }

  ngOnInit(): void {
  }

}
