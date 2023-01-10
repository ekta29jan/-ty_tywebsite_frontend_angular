import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TechnoElevate';
  public showLoadingIndicator: boolean = true;
  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationStart) {
        window.scroll(0,0);
        this.showLoadingIndicator = true;
      }

      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
        this.showLoadingIndicator = false;
      }
    });
  }
  ngOnInit() {

  }

}
