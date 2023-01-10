import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.css']
})
export class DevopsComponent implements OnInit {

  constructor() {
    document.title = 'Case Study | DevOps | TechnoElevate';
  }

  ngOnInit(): void {
  }

}
