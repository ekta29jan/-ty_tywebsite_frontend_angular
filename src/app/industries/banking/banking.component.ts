import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {

  constructor() {
    document.title = "Banking | TechnoElevate";
  }

  ngOnInit(): void {
  }

}
