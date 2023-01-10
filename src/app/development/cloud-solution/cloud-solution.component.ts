import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud-solution',
  templateUrl: './cloud-solution.component.html',
  styleUrls: ['./cloud-solution.component.css']
})
export class CloudSolutionComponent implements OnInit {

  constructor() {
    document.title = "Cloud Solution | TechnoElevate";
  }

  ngOnInit(): void {
  }

}
