import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uat',
  templateUrl: './uat.component.html',
  styleUrls: ['./uat.component.css']
})
export class UatComponent implements OnInit {

  constructor() {
    document.title = "UAT Testing | Test Yantra";
  }

  ngOnInit(): void {
  }

}
