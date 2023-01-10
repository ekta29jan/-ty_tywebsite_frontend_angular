import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-optimize',
  templateUrl: './test-optimize.component.html',
  styleUrls: ['./test-optimize.component.css']
})
export class TestOptimizeComponent implements OnInit {

  constructor() {
    document.title = "Test Optimize | Test Yantra";
  }

  ngOnInit(): void {
  }

}
