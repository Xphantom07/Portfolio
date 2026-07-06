import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';

interface Certificate {
  title: string;
  issuer: string;
  learned: string;
  topics: string[];
  image: string;
  alt: string;
  link?: string;
}

@Component({
  selector: 'app-certification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certification.component.html',
  styleUrl: './certification.component.css'
})
export class CertificationComponent implements OnInit {
  isMobile = false;
  visibleCount = 5;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    this.updateViewportState();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateViewportState();
  }

  private updateViewportState(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.isMobile = false;
      this.visibleCount = this.certificates.length;
      return;
    }

    this.isMobile = window.innerWidth <= 640;
    if (!this.isMobile) {
      this.visibleCount = this.certificates.length;
    } else if (this.visibleCount > this.certificates.length) {
      this.visibleCount = Math.min(5, this.certificates.length);
    }
  }

  get displayedCertificates() {
    return this.isMobile ? this.certificates.slice(0, this.visibleCount) : this.certificates;
  }

  loadMore() {
    this.visibleCount = Math.min(this.visibleCount + 5, this.certificates.length);
  }

  certificates: Certificate[] = [
    {
      title: 'DSA using JAVA',
      issuer: 'IIT Kharagpur (NPTEL)',
      learned: 'Strengthened data structures, recursion, time complexity, and structured problem-solving in Java so I can approach technical problems with a clearer algorithmic mindset.',
      topics: ['Problem Solving', 'Data Structures', 'Java'],
      image: '/assets/certificates/dsa-using-java.webp',
      alt: 'Certificate artwork for DSA using JAVA',
      link: 'https://drive.google.com/file/d/1RwOJ3I_Trv4Unff2oUM-wFM85C3udFAi/view?usp=sharing'
    },
    {
      title: 'Foundations of AI With MicroSoft',
      issuer: 'Microsoft Edunet',
      learned: 'Learned the core foundations of AI, model workflows, and responsible automation practices that support data-driven applications.',
      topics: ['AI Basics', 'Model Workflow', 'Responsible AI'],
      image: '/assets/certificates/foundations-ai.webp',
      alt: 'Certificate artwork for Foundations of AI With Microsoft',
      link: 'https://drive.google.com/file/d/1rNd7GJY6KYvIYdDJGEhC7rHbYSp9CNID/view?usp=sharing'
    },
    {
      title: 'AI Agent Making Competition 2026',
      issuer: 'AzzipTech',
      learned: 'Secured 1st Position by demonstrating innovation and technical skills in developing autonomous AI agents.',
      topics: ['AI Agents', 'Innovation'],
      image: '/assets/certificates/AzzipTech_Certificate.webp',
      alt: 'First Prize certificate for AI Agent Making Competition',
      link: 'https://drive.google.com/file/d/1XMQsZxyYCtrV87aAcljrshzila_C-RvJ/view?usp=sharing'
    },  
    {
      title: 'TechManjari 2K26',
      issuer: 'Gyanmanjari Innovative University',
      learned: 'Presented the Rentify project during the three-day TechManjari 2K26 exhibition, demonstrating full-stack development, system architecture, and practical problem-solving skills.',
      topics: ['Project Presentation', 'Full-Stack Development', 'Software Engineering'],
      image: '/assets/certificates/TechManjari.jpeg',
      alt: 'TechManjari 2K26 certificate for presenting the Rentify project',
      link: 'https://drive.google.com/file/d/17_tFkPshU66HOrNzMnU8a10OjRv3c2xw/view?usp=sharing'
    },
    {
      title: 'Intro. Ethical Hacking',
      issuer: 'Great Learning',
      learned: 'Understood common attack surfaces, vulnerability thinking, and defensive security basics for safer web and software development.',
      topics: ['Security Basics', 'Web Risks'],
      image: '/assets/certificates/ethical-hacking.webp',
      alt: 'Certificate artwork for Intro. Ethical Hacking',
      link: 'https://drive.google.com/file/d/1SDhHskZMHAd1VnDnN2rc0ABWzBNe-dWr/view?usp=sharing'
    },
    {
      title: 'Intro. Dark web, Annonymity',
      issuer: 'EC Council',
      learned: 'Explored privacy tools, anonymity concepts, and the risk landscape around hidden-network activity and online safety.',
      topics: ['Privacy', 'Anonymity', 'Threat Awareness'],
      image: '/assets/certificates/dark-web-anonymity.webp',
      alt: 'Certificate artwork for Intro. Dark web, Annonymity',
      link: 'https://drive.google.com/file/d/1SIFoYFUXBrULYrEi-0OzInMIotKMT_JL/view?usp=sharing'
    },
    {
      title: 'Digital Marketing',
      issuer: 'WsCube Tech',
      learned: 'Learned SEO, campaign planning, and performance tracking so I can think about products through a growth and analytics lens.',
      topics: ['SEO', 'Campaigns', 'Analytics'],
      image: '/assets/certificates/digital-marketing.webp',
      alt: 'Certificate artwork for Digital Marketing',
      link: 'https://drive.google.com/file/d/1sqs5YZy0wsQFU1k8a6JfAank6NIgYpBa/view?usp=sharing'
    },
    {
      title: 'Android Development Internship',
      issuer: 'Kryosync',
      learned: 'Developed hands-on mobile applications and gained practical experience in the Android development lifecycle.',
      topics: ['Android Development', 'Mobile Apps'],
      image: '/assets/certificates/Internship2_Kryosync.webp',
      alt: 'Internship Completion Certificate for Android Development',
      link: 'https://drive.google.com/file/d/13QDmsRZCfJUhAbX3cqjyv4LPL1EwIM5Z/view?usp=sharing'
    },
    {
      title: 'Web Developer Internship',
      issuer: 'ITHub Software Solutions',
      learned: 'Worked on real-world web projects, focusing on responsive design, SEO optimization, and software development best practices.',
      topics: ['Web Development', 'SEO'],
      image: '/assets/certificates/Internship_ITHUB-Software.webp',
      alt: 'Certificate of Internship for Web Development',
      link: 'https://drive.google.com/file/d/1BVtWFbL7PWO7uH2QbHR7Dmc-c93P6k4e/view?usp=sharing'
    },
    {
      title: 'HACKOPLE 2K25',
      issuer: 'Milople',
      learned: 'Recognized for exceptional skills and dedication in eCommerce development during a competitive hackathon.',
      topics: [ 'Hackathon', 'Problem Solving'],
      image: '/assets/certificates/Milople_Hacathon.webp',
      alt: 'Certificate of Appreciation for HACKOPLE 2K25',
      link: 'https://drive.google.com/file/d/17CF22xyG17l9j9kf0RCEQggiAtIo8oWj/view?usp=sharing'
    },
    {
      title: 'ChatBot Developers Hackathon',
      issuer: 'Floatbot.AI',
      learned: 'Participated in a high-intensity hackathon focused on building conversational AI and automated bot solutions.',
      topics: ['Bot Development', 'Innovation'],
      image: '/assets/certificates/FloatBot_AI_Hackathon.webp',
      alt: 'Participation Certificate for Floatbot Bot Developers Hackathon',
      link: 'https://drive.google.com/file/d/1SMRHWrJhxX42AlZN4w3nbmp3ZJWUFOKF/view?usp=sharing'
    },
    {
      title: 'TechNova Hackathon 2025',
      issuer: 'Google Student Ambassador & GMIU Coding Club',
      learned: 'Collaborated in a high-intensity hackathon environment to build technical solutions, excelling through dedication and teamwork.',
      topics: ['Hackathon', 'Problem Solving'],
      image: '/assets/certificates/TechNova_Heckathon.webp',
      alt: 'Certificate for TechNova Hackathon 2025',
      link: 'https://drive.google.com/file/d/1jcqh6PeSQYlFgRuicHyYl7JVr4nxtEyw/view?usp=sharing'
    },  
    {
      title: 'PAHEL 1.0',
      issuer: 'Gyanmanjari Innovative University',
      learned: 'Engaged with the innovative ecosystem at GMIU, contributing to technical events aimed at student development.',
      topics: ['Innovation', 'Technical Engagement'],
      image: '/assets/certificates/MiniTech_Pahel1.0.webp',
      alt: 'Achievement certificate for PAHEL 1.0',
      link: 'https://drive.google.com/file/d/1kp-OtVICjCns6l9ixOLshIsfdFrTIkTs/view?usp=sharing'
    },
    {
      title: 'Code 2 Impact',
      issuer: 'Gyanmanjari Innovative University',
      learned: 'Participated in a technical challenge focused on using coding skills to create practical, impactful solutions.',
      topics: ['Coding', 'Impactful Tech'],
        image: '/assets/certificates/Code-To-Impact.webp',
        alt: 'Achievement certificate for Code 2 Impact',
        link: 'https://drive.google.com/file/d/1mPMBDeiBoEiwI_sulkrQUMACoBqOMSyZ/view?usp=sharing'
  },
    {
    title: 'Theatre at KalaManjari',
    issuer: 'Gyanmanjari Innovative University',
    learned: 'Developed strong communication and performance skills through participation in the Theatre event during the KalaManjari festival.',
    topics: ['Public Speaking', 'Theatre', 'Soft Skills'],
    image: '/assets/certificates/Kalamanjari_2k25.webp',
    alt: 'Appreciation certificate for Theatre at KalaManjari',
    link: 'https://drive.google.com/file/d/1UZYt8s6Ptwf_7XwR3H8OuT1d9GSdaNhI/view?usp=sharing'
  },
    {
    title: 'Study Abroad - Vocational Course',
    issuer: 'Gyanmanjari Innovative University (VISA tales)',
    learned: 'Completed a specialized course focused on global education pathways and vocational preparation for international opportunities.',
    topics: [ 'Vocational Training', 'Career Planning'],
    image: '/assets/certificates/Visa-Tales_Certificate.webp',
    alt: 'Completion certificate for Study Abroad Vocational Course',
    link: 'https://drive.google.com/file/d/19mDmPpn2AQUKMJqwEopFPyMV9peNOEcl/view?usp=sharing'
  },
  {
    title: 'Academic Excellence Recognition',
    issuer: 'Gyanmanjari Innovative University',
    learned: 'Acknowledged for maintaining high academic standards and demonstrating consistent dedication to engineering studies.',
    topics: ['Academic Excellence', 'Dedication'],
    image: '/assets/certificates/Academic_Excellence.webp',
    alt: 'Recognition of academic success at GMIU',
    link: 'https://drive.google.com/file/d/1Kl5ntLJabiOaPC2ZbSNeSgnvt3JGEvUE/view?usp=sharing'
  }
  ];
}
