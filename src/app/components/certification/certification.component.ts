import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Certificate {
  title: string;
  issuer: string;
  learned: string;
  topics: string[];
  image: string;
  alt: string;
}

@Component({
  selector: 'app-certification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css'
})
export class CertificationComponent {
  certificates: Certificate[] = [
    {
      title: 'DSA using JAVA',
      issuer: 'IIT Kharagpur (NPTEL)',
      learned: 'Strengthened data structures, recursion, time complexity, and structured problem-solving in Java so I can approach technical problems with a clearer algorithmic mindset.',
      topics: ['Problem Solving', 'Data Structures', 'Java'],
      image: '/assets/certificates/dsa-using-java.png',
      alt: 'Certificate artwork for DSA using JAVA'
    },
    {
      title: 'Foundations of AI With MicroSoft',
      issuer: 'Microsoft Edunet',
      learned: 'Learned the core foundations of AI, model workflows, and responsible automation practices that support data-driven applications.',
      topics: ['AI Basics', 'Model Workflow', 'Responsible AI'],
      image: '/assets/certificates/foundations-ai.png',
      alt: 'Certificate artwork for Foundations of AI With Microsoft'
    },
    {
      title: 'Intro. Ethical Hacking',
      issuer: 'Great Learning',
      learned: 'Understood common attack surfaces, vulnerability thinking, and defensive security basics for safer web and software development.',
      topics: ['Security Basics', 'Web Risks', 'Defensive Mindset'],
      image: '/assets/certificates/ethical-hacking.png',
      alt: 'Certificate artwork for Intro. Ethical Hacking'
    },
    {
      title: 'Intro. Dark web, Annonymity',
      issuer: 'EC Council',
      learned: 'Explored privacy tools, anonymity concepts, and the risk landscape around hidden-network activity and online safety.',
      topics: ['Privacy', 'Anonymity', 'Threat Awareness'],
      image: '/assets/certificates/dark-web-anonymity.png',
      alt: 'Certificate artwork for Intro. Dark web, Annonymity'
    },
    {
      title: 'Digital Marketing',
      issuer: 'WsCube Tech',
      learned: 'Learned SEO, campaign planning, and performance tracking so I can think about products through a growth and analytics lens.',
      topics: ['SEO', 'Campaigns', 'Analytics'],
      image: '/assets/certificates/digital-marketing.png',
      alt: 'Certificate artwork for Digital Marketing'
    }
  ];
}
