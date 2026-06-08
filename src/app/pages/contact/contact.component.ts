import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent as ContactFormComponent } from '../../components/contact/contact.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Contact – Bhavik Vavadiya',
      description: 'Get in touch with Bhavik for data projects, collaborations, or consulting inquiries.',
      url: '/contact',
      keywords: 'Contact Bhavik Vavadiya, Hire Data Analyst, Machine Learning Consultant, Data Science Services'
    });
  }
}
