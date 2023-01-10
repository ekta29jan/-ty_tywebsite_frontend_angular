import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IotComponent implements OnInit {

  constructor() {
    document.title = "IOT Services | TechnoElevate";
  }

  ngOnInit(): void {
  }

}
