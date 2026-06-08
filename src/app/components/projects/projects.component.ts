import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string[];
  techStack: string[];
  image: string;
  aosImage: string;
  sourceUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'House Price Prediction Model',
      description: [
        'Built a machine learning model to predict house prices from property attributes.',
        'Performed data cleaning, preprocessing, correlation analysis, and feature selection to improve prediction quality.',
        'Achieved 99% R² accuracy and generated price predictions for custom user inputs.'
      ],
      techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
      image: '/assets/house.jpg',
      aosImage: 'fade-right',
      sourceUrl: 'https://github.com/Xphantom07/House-Price-Prediction-using-Linear-Regression'
    },
    {
      title: 'Email Phishing Detection Pre Processing',
      description: [
        'Built a preprocessing pipeline for phishing email datasets to improve data quality before model training.',
        'Performed text normalization, noise removal, and feature preparation for reliable downstream classification.',
        'Organized the cleaned dataset for analysis and machine learning experimentation.'
      ],
      techStack: ['Python', 'Pandas', 'NumPy', 'Data Preprocessing'],
      image: '/assets/email.jpg',

      aosImage: 'fade-left',
      sourceUrl: 'https://github.com/Xphantom07/Email-Phishing-Preprocessing'
    },
    {
      title: 'Rentify',
      description: [
        'Built a MERN stack web application for renting hostels and PG accommodations.',
        'Added property listings, search and filter options, and booking-focused user flows.',
        'Designed a responsive interface and structured data flow for smooth rental discovery.'
      ],
      techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      image: '/assets/rentify.png',
      aosImage: 'fade-right',
      liveUrl: 'https://rentify-tau-ten.vercel.app/'
    },
    {
      title: 'NatureCart',
      description: [
        'Built NatureCart with separate interfaces for customers and farmers.',
        'Added product management, browsing, and responsive design for an organic shopping experience.',
        'Used a modern web stack to support a clean UI and smooth navigation across devices.'
      ],
      techStack: ['HTML', 'CSS', 'REST API', 'MongoDB'],
      image: '/assets/naturecart.png',
      aosImage: 'fade-left',
      sourceUrl: 'https://github.com/Xphantom07/Meet-NatureCart-Flutter'
    },
    {
      title: 'Krishna Chatbot',
      description: [
        'Built a devotional chatbot experience focused on Krishna-related conversations.',
        'Designed a simple and accessible interface for quick interactions in the browser.',
        'Deployed as a lightweight static web app for fast loading and easy sharing.'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      image: '/assets/murli.png',
      aosImage: 'fade-right',
      liveUrl: 'https://xphantom07.github.io/Krishna-Bot/'
    }
  ];
}
