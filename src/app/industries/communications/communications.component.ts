import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.css']
})
export class CommunicationsComponent implements OnInit {

  constructor() {
    document.title = "Communications Industry | TechnoElevate";
  }

  ngOnInit(): void {
  }

}
