import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-test-life-cycle',
  templateUrl: './full-test-life-cycle.component.html',
  styleUrls: ['./full-test-life-cycle.component.css']
})
export class FullTestLifeCycleComponent implements OnInit {

  constructor() {
    document.title = "Full Test Life Cycle | Test Yantra";
  }

  ngOnInit(): void {
  }

}
