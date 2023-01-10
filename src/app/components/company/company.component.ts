import { Component, OnInit, Output } from '@angular/core';
import { SlickConfigService } from 'src/app/shared/slick-config.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  readbutton=true;
  read=false;
  cardname: any;
  customer: false;
  customer_centric:any;
  businessExperence:any;
  quarlity_guarantee:any;
  technology_up_to_date:any
  automation_accomplishment:any;
  QG=false;
  BE=false;
  CA=false;
  TU=false;
  AA=false;
  constructor(public slick: SlickConfigService) {
    document.title = "About | TechnoElevate";
  }

  readMore(cardname){


    switch(cardname){
      case'customer_centric':
      this.CA=!this.CA;
      break;
      case'quarlity_guarantee':
      this.QG=!this.QG;
      break;
      case'technology_up_to_date':
      this.TU=!this.TU;
      break;
      case'automation_accomplishment':
      this.AA=!this.AA;
      break;
      case'businessExperence':
      this.BE=!this.BE;

    }

  }


}

