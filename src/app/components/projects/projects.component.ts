import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';

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
export class ProjectsComponent implements OnDestroy {
  isMobile = false;
  visibleCount = 4;

  constructor() {
    if (typeof window !== 'undefined') {
      this.updateViewportState();
      window.addEventListener('resize', this.handleResizeBound);
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResizeBound);
    }
  }

  private handleResizeBound = () => this.updateViewportState();

  private updateViewportState(): void {
    if (typeof window === 'undefined') {
      this.isMobile = false;
      this.visibleCount = this.projects.length;
      return;
    }

    this.isMobile = window.innerWidth <= 640;
    if (!this.isMobile) {
      this.visibleCount = this.projects.length;
    } else {
      this.visibleCount = Math.min(Math.max(this.visibleCount, 4), this.projects.length);
    }
  }

  get displayedProjects() {
    return this.isMobile ? this.projects.slice(0, this.visibleCount) : this.projects;
  }

  toggleProjects() {
    if (this.visibleCount >= this.projects.length) {
      this.visibleCount = 4;
      return;
    }

    this.visibleCount = Math.min(this.visibleCount + 4, this.projects.length);
  }

  projects: Project[] = [
          {
        title: 'Credit Card Fraud Detection',
        description: [
          'Built a machine learning model to detect fraudulent credit card transactions using transaction-related features.',
          'Performed data cleaning, preprocessing, model comparison, and hyperparameter tuning to improve prediction performance.',
          'Developed and deployed a Flask web application for real-time fraud prediction with an interactive interface.'
        ],
        techStack: ['Python', 'Pandas', 'Scikit-learn', 'Flask'],
        image: '/assets/credit-card-fraud.jpg',

        aosImage: 'fade-right',
        sourceUrl: 'https://github.com/Xphantom07/CreditCard_Fraud_Prediction',
        liveUrl: 'https://creditcard-fraud-prediction.onrender.com/'
    },
      {
        title: 'Heart Disease Prediction',
        description: [
          'Built a machine learning model to predict heart disease using patient health parameters and clinical features.',
          'Performed data cleaning, preprocessing, feature engineering, model comparison, and evaluation to improve prediction accuracy.',
          'Developed and deployed a Streamlit web application for real-time heart disease prediction with an interactive interface.'
        ],
        techStack: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
        image: '/assets/heart-disease-prediction.jpg',

        aosImage: 'fade-left',
        sourceUrl: 'https://github.com/Xphantom07/Heart-Disease-Prediction',
        liveUrl: 'https://heart-disease-prediction-123456.streamlit.app/'
    },

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
      image: '/assets/rentify.webp',
      aosImage: 'fade-right',
      sourceUrl:'https://github.com/Xphantom07/Rentify',
      liveUrl: 'https://rentify-tau-ten.vercel.app/'
    },
  
    {
      title: 'Krishna Chatbot',
      description: [
        'Built a devotional chatbot experience focused on Krishna-related conversations.',
        'Designed a simple and accessible interface for quick interactions in the browser.',
        'Deployed as a lightweight static web app for fast loading and easy sharing.'
      ],
      techStack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      image: '/assets/murli.webp',
      aosImage: 'fade-right',
      liveUrl: 'https://xphantom07.github.io/Krishna-Bot/'
    }
  ];
}
