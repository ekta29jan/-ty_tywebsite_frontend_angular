import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.css']
})
export class CloudComponent implements OnInit {

  constructor() {
    document.title = "Managed Services  | TechnoElevate";
  }

  ngOnInit(): void {
  }

}
