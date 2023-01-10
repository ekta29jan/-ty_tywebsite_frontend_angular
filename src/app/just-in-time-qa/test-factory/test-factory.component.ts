import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-factory',
  templateUrl: './test-factory.component.html',
  styleUrls: ['./test-factory.component.css']
})
export class TestFactoryComponent implements OnInit {

  constructor() {
    document.title = "Test Factory | Test Yantra";
  }

  ngOnInit(): void {
  }

}
