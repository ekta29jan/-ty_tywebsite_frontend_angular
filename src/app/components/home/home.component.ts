import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SlickConfigService } from 'src/app/shared/slick-config.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id
  constructor(public slick: SlickConfigService,
    private http: HttpClient,
    private router: Router, private AR: ActivatedRoute) {
    document.title = 'Home | TechnoElevate';
    this.id = AR.snapshot.paramMap.get("id")
    console.log(this.id);

  }
  ngOnInit(): void {
    this.downloadPdf()
  }

  downloadPdf(){
    this.http.get(`http://localhost:3000/mail/downloadPdf/${this.id}`).subscribe(res =>{
      console.log(res);
    })
  }
  // onViewMore(){
  //   this.viewMore = !this.viewMore
  // }

  // onViewMorecard(){
  //   this.viewMoreCard =!this.viewMoreCard
  // }

  // onViewMorecard1(){
  //   this.viewMoreCard1 =!this.viewMoreCard1
  // }

  // onViewMorecard2(){
  //   this.viewMoreCard2 =!this.viewMoreCard2
  // }

  // onViewMorecard3(){
  //   this.viewMoreCard3 =!this.viewMoreCard3
  // }
  // onViewMorecard4(){
  //   this.viewMoreCard4 =!this.viewMoreCard4
  // }
  // onViewMorecard5(){
  //   this.viewMoreCard5 =!this.viewMoreCard5
  // }
  // onViewMorecard6(){
  //   this.viewMoreCard6 =!this.viewMoreCard6
  // }

  caseStudies(name){
if(name == 'Managed Services'){
  this.router.navigateByUrl('/specialized-qa/managed-service');
}else if(name == 'Professional Services'){
this.router.navigateByUrl('/specialized-qa/professional-services');
}else if(name == 'Support Services'){
  this.router.navigateByUrl('/specialized-qa/support-services');
  }
  }
}
