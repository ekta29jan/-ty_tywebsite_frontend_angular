import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce-development',
  templateUrl: './ecommerce-development.component.html',
  styleUrls: ['./ecommerce-development.component.css']
})
export class EcommerceDevelopmentComponent implements OnInit {

  constructor() {
    document.title = 'E-commerce Development | TechnoElevate';
  }

  ngOnInit(): void {
  }

}
