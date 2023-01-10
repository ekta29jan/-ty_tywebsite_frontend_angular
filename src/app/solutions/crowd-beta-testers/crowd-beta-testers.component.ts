import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crowd-beta-testers',
  templateUrl: './crowd-beta-testers.component.html',
  styleUrls: ['./crowd-beta-testers.component.css']
})
export class CrowdBetaTestersComponent implements OnInit {

  constructor() {
    document.title = "Crowd Beta Testers | TechnoElevate ";
  }

  ngOnInit(): void {
  }

}
