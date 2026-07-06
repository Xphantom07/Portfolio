import { Routes } from "@angular/router";
import { UrlNormalizationGuard } from "./guards/url-normalization.guard";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Home',
      description: 'Bhavik Vavadiya - Data Analyst and Machine Learning Engineer. Explore my portfolio, projects, and data-driven work.',
      keywords: 'Bhavik Vavadiya, Data Analyst, Machine Learning Engineer, Python, SQL, Power BI, Data Science'
    }
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'About Me',
      description: 'Learn about Bhavik Vavadiya, a Data Analyst and ML practitioner specializing in analytics, visualization, and predictive modeling.',
      keywords: 'About Bhavik Vavadiya, Data Analyst Background, Machine Learning Engineer Profile, Projects, Dashboards'
    }
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience.component').then(m => m.ExperienceComponent),
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Experience',
      description: 'Explore Bhavik Vavadiya\'s professional experience in data analysis, machine learning projects, and technical contributions.',
      keywords: 'Bhavik Vavadiya Experience, Data Analyst Career, Machine Learning Projects, Python, SQL'
    }
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Projects',
      description: 'Explore Bhavik Vavadiya\'s portfolio of data projects, dashboards, and analytical case studies.',
      keywords: 'Bhavik Vavadiya Projects, Data Science Portfolio, Machine Learning Projects, Power BI Dashboards'
    }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Contact',
      description: 'Get in touch with Bhavik Vavadiya for data projects, collaborations, or consulting inquiries.',
      keywords: 'Contact Bhavik Vavadiya, Hire Data Analyst, Machine Learning Consultant, Data Science Services'
    }
  },
  {
    path: 'resume',
    loadComponent: () => import('./pages/resume/resume.component').then(m => m.ResumeComponent),
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Resume',
      description: 'Download or view Bhavik Vavadiya\'s professional resume. Comprehensive overview of skills, experience, and projects in data and ML.',
      keywords: 'Bhavik Vavadiya Resume, Data Analyst CV, Machine Learning Engineer Resume, Portfolio Download'
    }
  },
  // Legacy hash-based URL redirects
  {
    path: 'about-me',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'skills',
    redirectTo: '/experience',
    pathMatch: 'full'
  },
  {
    path: 'testimonials',
    redirectTo: '/experience',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '' } // Wildcard route for 404 pages
];
