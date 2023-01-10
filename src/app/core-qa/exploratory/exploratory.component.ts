import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exploratory',
  templateUrl: './exploratory.component.html',
  styleUrls: ['./exploratory.component.css']
})
export class ExploratoryComponent implements OnInit {

  constructor() {
    document.title = "Exploratory Testing | Technoelevate";
  }

  ngOnInit(): void {
  }

}
