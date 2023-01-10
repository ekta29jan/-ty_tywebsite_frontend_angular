import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  readbutton = true;
  read = false;
  cardname: any;
  customer: false;
  location_staffing: any;
  on_demand_works: any
  engineer_site: any;
  LS = false;
  DW = false;
  ES = false;
  constructor() {
    document.title = "Professional Services  | TechnoElevate";
  }

  readMore(cardname) {


    switch (cardname) {
      case 'location_staffing':
        this.LS = !this.LS;
        break;
      case 'on_demand_works':
        this.DW = !this.DW;
        break;
      case 'engineer_site':
        this.ES = !this.ES;
        break;

    }

  }
  ngOnInit(): void {}

}
