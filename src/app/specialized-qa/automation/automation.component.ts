import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automation',
  templateUrl: './automation.component.html',
  styleUrls: ['./automation.component.css']
})
export class AutomationComponent implements OnInit {

  constructor() {
    document.title = "Managed Services | TechnoElevate";
  }

  ngOnInit(): void {
  }

}
