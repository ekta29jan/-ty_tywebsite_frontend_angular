import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middleware-integration',
  templateUrl: './middleware-integration.component.html',
  styleUrls: ['./middleware-integration.component.css']
})
export class MiddlewareIntegrationComponent implements OnInit {

  constructor() {
    document.title = "Middleware Integration | TechnoElevate";
  }

  ngOnInit(): void {
  }

}
