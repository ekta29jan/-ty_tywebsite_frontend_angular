import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-global-presence',
  templateUrl: './global-presence.component.html',
  styleUrls: ['./global-presence.component.css']
})
export class GlobalPresenceComponent implements OnInit {

  constructor() {
    document.title = "Contact us | TechnoElevate";
  }

  formSubmit(f: NgForm) {
    console.log(f);
  }

  @ViewChild('recaptcha', {static: true }) recaptchaElement: ElementRef;

  ngOnInit() {
    // this.addRecaptchaScript();
  }

  renderReCaptch() {
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : '6LcS6qsZAAAAAPDNkvZRy9oMyZr1SaXDWzBj4LHz',
      'callback': (response) => {
          console.log(response);
      }
    });
  }

  addRecaptchaScript() {

    window['grecaptchaCallback'] = () => {
      this.renderReCaptch();
    }

    (function(d, s, id, obj){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { obj.renderReCaptch(); return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));

  }

}
