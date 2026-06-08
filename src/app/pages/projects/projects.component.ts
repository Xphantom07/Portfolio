import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent as ProjectsContentComponent } from '../../components/projects/projects.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, ProjectsContentComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Projects – Bhavik Vavadiya',
      description: 'Explore Bhavik Vavadiya\'s portfolio of data projects, analytical reports, and machine learning case studies.',
      url: '/projects',
      keywords: 'Bhavik Vavadiya Projects, Data Science Portfolio, Machine Learning Case Studies, Power BI Dashboards'
    });
  }
}
