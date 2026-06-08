import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent as ExperienceContentComponent } from '../../components/experience/experience.component';
import { SkillsComponent } from '../../components/skills/skills.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [CommonModule, ExperienceContentComponent, SkillsComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Experience – Bhavik Vavadiya',
      description: 'Explore Bhavik Vavadiya\'s professional experience in data analysis, machine learning projects, and technical contributions.',
      url: '/experience',
      keywords: 'Bhavik Vavadiya Experience, Data Analyst Career, Machine Learning Projects, Python, SQL'
    });
  }
}
