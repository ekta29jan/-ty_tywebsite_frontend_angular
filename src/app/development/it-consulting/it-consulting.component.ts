import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it-consulting',
  templateUrl: './it-consulting.component.html',
  styleUrls: ['./it-consulting.component.css']
})
export class ItConsultingComponent implements OnInit {

  constructor() {
    document.title = "IT Consulting | TechnoElevate";
  }

  ngOnInit(): void {
  }

}
