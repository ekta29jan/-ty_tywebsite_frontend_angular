import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactFormService } from 'src/app/services/contact-form.service';
import * as allCareers from '../../../assets/career.json';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
listOfCareers = (allCareers as any).software
Recruiter= (allCareers as any).IT_Recruiter
BusinessDevelopment= (allCareers as any).Business_Development
SuitUp = (allCareers as any).Suit_Up
  constructor(private route: ActivatedRoute,  private router: Router,private contactService:ContactFormService) {
    document.title = "Careers | TechnoElevate";
  }
  data:any;
  ngOnInit(): void {  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(data => {
      if (data === 'india') {
        document.getElementById('india').click();
      } else if (data === 'usa') {
        document.getElementById('usa').click();
      } else if (data === 'uk') {
        document.getElementById('uk').click();
      } else if (data === 'netherlands') {
        document.getElementById('netherlands').click();
      } else if (data === 'poland') {
        document.getElementById('poland').click();
      } else if (data === 'ireland') {
        document.getElementById('ireland').click();
      } else {
        window.scroll(0,0);
      }
    })
  }

  checkCollapse(id) {
   return document.querySelector(`#${id}`).matches('.collapsed');
  }
  careerdata(role,i){
    // let data  = this.listOfCareers[i]
    this.router.navigate(["careers","career-details"],{
      queryParams:{role:role,index:i}
    });
  }
}
