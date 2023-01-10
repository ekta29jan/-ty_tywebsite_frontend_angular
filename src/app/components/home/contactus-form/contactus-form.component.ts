import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormService } from 'src/app/services/contact-form.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-contactus-form',
  templateUrl: './contactus-form.component.html',
  styleUrls: ['./contactus-form.component.css']
})
export class ContactusFormComponent implements OnInit {
  contactForm: FormGroup;
  isSubmit = false;
  toster = false;
  showLoadingIndicator = false;
  errormessage: any;
  key = environment.secretKey;


  constructor(private fb: FormBuilder, private clientservice: ContactFormService) { }


  ngOnInit(): void {

    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+'), Validators.maxLength(50)]],
      // email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9+_.-.]+@+[a-zA-Z0-9]+[.]+[a-z]{2,4}')]],
      phone: ['', [Validators.required, Validators.pattern('(0|91)?[6-9][0-9]{9}')]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      recaptcha: ['', [Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.contactForm);

    this.isSubmit = true;
    if (this.contactForm.valid) {
      this.isSubmit = true;
      this.showLoadingIndicator = true;
      this.clientservice.postClientForm(this.contactForm.value).subscribe(res => {
        this.toster = true;
        this.isSubmit = false;
        this.showLoadingIndicator = false;
        this.errormessage = res.message;
        this.contactForm.reset()
        setTimeout(() => {
          this.toster = false;
          this.showLoadingIndicator = false;
        }, 3000);
        this.showLoadingIndicator = false;
      }, err => {
        this.toster = true;
        this.isSubmit = false;
        this.errormessage = 'Error connecting Server.Please try again after sometime.'
        this.contactForm.reset()
        setTimeout(() => {
          this.toster = false;
          this.showLoadingIndicator = false;
        }, 3000);
        this.showLoadingIndicator = false;
      })
    }
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
