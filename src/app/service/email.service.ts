import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { Observable, from, map, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly serviceId = environment.emailJs.serviceId;
  private readonly templateId = environment.emailJs.templateId;
  private readonly publicKey = environment.emailJs.publicKey;

  constructor() {}

  sendEmail(data: any): Observable<any> {
    if (!this.isEmailJsConfigured()) {
      return throwError(() => new Error('EmailJS is not configured yet. Add serviceId, templateId, and publicKey in environment files.'));
    }

    const templateParams = {
      from_name: data?.name,
      from_email: data?.email,
      message: data?.message,
      to_name: 'Bhavik Vavadiya'
    };

    return from(emailjs.send(this.serviceId, this.templateId, templateParams, this.publicKey))
      .pipe(
        map(() => ({ message: 'Message sent successfully. I will get back to you soon!' })),
        catchError(this.handleError)
      );
  }

  private isEmailJsConfigured(): boolean {
    return Boolean(this.serviceId && this.templateId && this.publicKey)
      && !this.serviceId.includes('YOUR_')
      && !this.templateId.includes('YOUR_')
      && !this.publicKey.includes('YOUR_');
  }

  private handleError(error: any): Observable<never> {
    const errorMessage = error?.text || error?.message || 'Something went wrong while sending your message. Please try again later.';
    return throwError(() => new Error(errorMessage));
  }
}
