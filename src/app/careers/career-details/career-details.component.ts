import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactFormService } from 'src/app/services/contact-form.service';
import * as allCareers from '../../../assets/career.json'

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.css']
})
export class CareerDetailsComponent implements OnInit,OnDestroy {
  listOfCareers = (allCareers as any).default;
  currentDetails: any;
  currentRoleValue: string;
  currentRoleIndex: string;

  constructor(private activatedRoute:ActivatedRoute,private service:ContactFormService) {



  }

  ngOnInit(): void {
    // console.log(this.currentDetails);
    this.activatedRoute.queryParams.subscribe((res:any) => {
      console.log(res);
      sessionStorage.setItem('role', res['role']);
      sessionStorage.setItem('index' ,res['index']);
      this.currentRoleValue = sessionStorage.getItem('role');
      this.currentRoleIndex =sessionStorage.getItem('index');
     this.currentDetails=(this.listOfCareers[this.currentRoleValue][this.currentRoleIndex]);


    })
  }

  ngOnDestroy():void{
  setTimeout(() => {
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('index');
    sessionStorage.clear();
  });

  }

}
