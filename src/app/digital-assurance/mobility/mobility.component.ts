import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobility',
  templateUrl: './mobility.component.html',
  styleUrls: ['./mobility.component.css']
})
export class MobilityComponent implements OnInit {

  constructor() {
    document.title = "Support Services | TechnoElevate";
  }

  ngOnInit(): void {
  }

}
