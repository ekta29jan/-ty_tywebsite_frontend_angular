import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usability',
  templateUrl: './usability.component.html',
  styleUrls: ['./usability.component.css']
})
export class UsabilityComponent implements OnInit {

  constructor() {
    document.title = "Usability Testing | Test Yantra";
  }

  ngOnInit(): void {
  }

}
