import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormService } from '../services/contact-form.service';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  applicationForm: FormGroup;
  isSubmit = false;
  formData: any;
  file: any;
  toster = false;
  showLoadingIndicator = false;
  errormessage: any;
  pdf: any
  key=environment.secretKey;


  constructor(private fb: FormBuilder, private careerService: ContactFormService) { }
  ngOnInit(): void {
    // this.spinner.show();
    this.applicationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+'), Validators.maxLength(50)]],
      file: ['', [Validators.required]],
      emailId: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9+_.-.]+@+[a-zA-Z0-9]+[.]+[a-z]{2,4}')]],
      phoneNo: ['', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]],
      currentCompany: ['', [Validators.required, Validators.maxLength(60), Validators.pattern('^[A-Za-z0-9? ,_-]+$')]],
      additionalInfo: ['',],
      recaptcha: ['', [Validators.required]],
    })
  }

  onSubmit(applicationForm) {
    this.isSubmit = true;
    if (this.applicationForm.valid) {
      this.isSubmit = true;
      const formData = {
        ...this.applicationForm.value,
        file :  this.pdf,
      }
      this.showLoadingIndicator = true;
      this.careerService.postcareerForm(formData).subscribe(res => {
        this.toster = true;
        this.isSubmit = false;
        this.errormessage = res.message;
        this.applicationForm.reset();
        setTimeout(() => {
          this.toster = false;
          this.showLoadingIndicator = false;
        }, 3000);
        this.showLoadingIndicator = false;
      }, err => {
        this.toster = true;
        this.isSubmit = false;
        this.errormessage = 'Error connecting Server.Please try again after sometime.'
        this.applicationForm.reset();
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


  onUploadingCaseStudies(event: Event) {
    this.file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.pdf = reader.result
    };
  }

  keyPressAlphanumeric(event) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }


  keyPressNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

}
