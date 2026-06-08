import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent as ResumeContentComponent } from '../../components/resume/resume.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [CommonModule, ResumeContentComponent],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Resume – Bhavik Vavadiya',
      description: 'Download or view Bhavik Vavadiya\'s professional resume. Overview of skills, experience, and projects in data analysis and machine learning.',
      url: '/resume',
      keywords: 'Bhavik Vavadiya Resume, Data Analyst CV, Machine Learning Resume, Portfolio Download'
    });
  }
}
