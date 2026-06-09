import { Component } from '@angular/core';

interface Experience {
  position: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      position: 'Web Developer',
      company: 'IT Hub Software',
      companyUrl: 'https://drive.google.com/drive/u/0/folders/1RuV043pRfCXsMMfSQucUfNY5Of6QTU2_',
      startDate: 'Jun 2024',
      endDate: 'Jul 2024',
      achievements: [
        'Designed and developed responsive websites using HTML, CSS, and JavaScript.',
        'Ensured cross-browser compatibility and mobile optimization.',
        'Assisted with backend integration and database connectivity.',
        'Collaborated with team members to deliver client projects on time.'
      ]
    },
    {
      position: 'Android Developer',
      company: 'Kryosync',
      companyUrl: 'https://drive.google.com/file/d/13QDmsRZCfJUhAbX3cqjyv4LPL1EwIM5Z/view?usp=sharing',
      startDate: 'Jun 2025',
      endDate: 'Jul 2025',
      achievements: [
        'Designed UI and core features using Java, XML, and Android Studio.',
        'Integrated REST APIs for dynamic content and real-time updates.',
        'Identified and fixed bugs, improving app performance and stability.'
      ]
    }
  ];
}

