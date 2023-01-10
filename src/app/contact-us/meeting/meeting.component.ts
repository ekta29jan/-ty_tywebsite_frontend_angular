import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
})
export class MeetingComponent implements OnInit {
  selected: any;
  constructor(private _fb: FormBuilder) {}
  meetingDetailsForm: any = this._fb.group({
    fname: this._fb.control('', Validators.required),
    lname: this._fb.control('', Validators.required),
    email: this._fb.control('', [Validators.required, Validators.email]),
    companyName: this._fb.control('', Validators.required),
    reasonOfVisit: this._fb.control('', Validators.required),
  });
  @ViewChild('timeBtn1') btn15Min:ElementRef;
  @ViewChild('timeBtn2') btn30Min:ElementRef;
  @ViewChild('timeBtn3') btn45Min:ElementRef;
  pageChangeIndex: Array<number> = [0, 1, 2, 3, 4];
  timing: Array<string> = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '01:00 PM',
    '01:30 PM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
    '04:30 PM',
    '05:00 PM',
    '05:30 PM',
    '06:00 PM',
    '06:30 PM',
    '07:00 PM',
    '07:30 PM',
    '08:00 PM',
    '08:30 PM',
    '09:00 PM',
    '09:30 PM',
  ];
  linksOfPhoto: string = '../../../assets/images/team/praveen.png';
  nameOfTeam: string = 'Praveen Dyamappa';
  index: number = 0;
  meetingTiming: string;
  ngOnInit(): void {}

  nextIndex() {
    this.index++;
  }
  previousIndex() {
    this.index--;
  }
  nextPhoto() {
    this.linksOfPhoto = '../../../assets/images/team/Madhan.jpg';
    this.nameOfTeam = 'Madhan';
  }
  previousPhoto() {
    this.linksOfPhoto = '../../../assets/images/team/praveen.png';
    this.nameOfTeam = 'Praveen Dyamappa';
  }

  submit() {
    console.log(this.meetingDetailsForm.status);

    if (this.meetingDetailsForm.status == 'VALID') {
      this.index++;
    }
  }
  timefun(time) {
    this.meetingTiming = this.timing[time];
    console.log(this.meetingTiming);
  }
  backToFirst() {
    this.index = 0;
  }
  date() {
    const date1 = this.selected.toString();
    this.selected = date1.substr(0, 15);
    console.log(this.selected);
    this.index++;
  }
  timeBtn(num: any) {
    if (num == 1) {
      this.btn15Min.nativeElement.style.background = 'white'
      this.btn15Min.nativeElement.style.color = '#363D46'
      this.btn30Min.nativeElement.style.background = '#363D46';
      this.btn30Min.nativeElement.style.color = 'white'
      this.btn45Min.nativeElement.style.background = '#363D46';
      this.btn45Min.nativeElement.style.color = 'white'
    }
    if (num == 2) {
      this.btn15Min.nativeElement.style.background = '#363D46'
      this.btn15Min.nativeElement.style.color = 'white'
      this.btn30Min.nativeElement.style.background = 'white';
      this.btn30Min.nativeElement.style.color = '#363D46'
      this.btn45Min.nativeElement.style.background = '#363D46';
      this.btn45Min.nativeElement.style.color = 'white'
    }
    if (num == 3) {
      this.btn15Min.nativeElement.style.background = '#363D46'
      this.btn15Min.nativeElement.style.color = 'white'
      this.btn30Min.nativeElement.style.background = '#363D46';
      this.btn30Min.nativeElement.style.color = 'white'
      this.btn45Min.nativeElement.style.background = 'white';
      this.btn45Min.nativeElement.style.color = '#363D46'
    }
  }
}
