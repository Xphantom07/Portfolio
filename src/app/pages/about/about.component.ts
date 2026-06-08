import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, AboutMeComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'About Me – Bhavik Vavadiya',
      description: 'Learn about Bhavik Vavadiya, a Data Analyst and Machine Learning practitioner. Discover my journey, skills, and professional background in analytics and modeling.',
      url: '/about',
      keywords: 'About Bhavik Vavadiya, Data Analyst Background, Machine Learning, Python, SQL, Power BI'
    });
  }
}
