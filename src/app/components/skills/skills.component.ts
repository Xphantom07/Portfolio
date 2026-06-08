import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  logo: string;
  isInvertLogo: boolean;
  proficiency: 'Expert' | 'Intermediate' | 'Beginner';
  experience: number;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styles: [`
    .skill-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }
  `]
})
export class SkillsComponent {

  frontends = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 5 },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 5 },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 5 },
    { name: 'Responsive Design', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/bootstrap/bootstrap-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 4 }
  ];

  backends = [
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'XML', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/xml/xml-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'Android Studio', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/androidstudio/androidstudio-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 3 },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg', isInvertLogo: true, proficiency: 'Intermediate', experience: 2 },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'MERN Stack', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 }
  ];

  databases = [
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
   ];

  opss = [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 5 },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/github/github-original.svg', isInvertLogo: false, proficiency: 'Expert', experience: 5 },
    { name: 'Power BI', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/powerbi/powerbi-original.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 2 },
    { name: 'Excel', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', isInvertLogo: false, proficiency: 'Intermediate', experience: 3 },
    { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vercel/vercel-original.svg', isInvertLogo: true, proficiency: 'Intermediate', experience: 2 },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/firebase/firebase-original.svg', isInvertLogo: false, proficiency: 'Beginner', experience: 1 }
  ];

}
