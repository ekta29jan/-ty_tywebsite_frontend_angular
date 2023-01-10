import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-solution',
  templateUrl: './web-solution.component.html',
  styleUrls: ['./web-solution.component.css']
})
export class WebSolutionComponent implements OnInit {

  constructor() {
    document.title = 'Web Solution | TechnoElevate';
  }

  ngOnInit(): void {
  }

}
