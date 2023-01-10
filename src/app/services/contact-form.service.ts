import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  currentDetail: any;



  constructor(private http: HttpClient) { }
  postClientForm(formData){
  return  this.http.post<any>(`${environment.baseUrl}/mail/send-client-mail`,formData);
  }

  postcareerForm(formData){
  return  this.http.post<any>(`${environment.baseUrl}/mail/send-career-mail`,formData);
  }

}
