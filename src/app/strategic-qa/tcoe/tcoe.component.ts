import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tcoe',
  templateUrl: './tcoe.component.html',
  styleUrls: ['./tcoe.component.css']
})
export class TcoeComponent implements OnInit {

  constructor() {
    document.title = "TCOE | Test Yantra";
  }

  ngOnInit(): void {
  }

}
