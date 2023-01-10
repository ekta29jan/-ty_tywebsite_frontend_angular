import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor(public router:Router ) { }

  ngOnInit(): void {
  }

  goToTop() {
    window.scroll(0, 0);
  }



  // show(link, dropdown) {
    // link.nativeElement.classList.push('show');
    // dropdown.nativeElement.classList.push('show');
    // if (link.className.includes('show')) {
    //   return;
    // }
    // console.log(link.className)
    // link.className += " show";
    // dropdown.className += " show";
    // dropdown.classList.push('show');
  // }




  // hide(link, dropdown) {
  //   console.log('mouse leave');
    // (link.className as string).replace("show", "");
  //   console.log((dropdown.className as string).split(' ').filter(a => a!=="show").join(" "));
  //   (dropdown.className as string).split(' ').filter(a => a!=="show").join(" ");
  //   (link.className as string).split(' ').filter(a => a!=="show").join(" ");
  //   console.log(link.className);
  // }


}
