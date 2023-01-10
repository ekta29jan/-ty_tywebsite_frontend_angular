import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-stack-development',
  templateUrl: './full-stack-development.component.html',
  styleUrls: ['./full-stack-development.component.css']
})
export class FullStackDevelopmentComponent implements OnInit {

  constructor() {
    document.title = "Full Stack Development Services | TechnoElevate";
  }

  ngOnInit(): void {
  }

}
