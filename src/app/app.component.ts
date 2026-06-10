import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GoogleAnalyticsService } from './service/google-analytics.service';
import { SeoService } from './service/seo.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    RouterOutlet, RouterLink, RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSplash = true;
  splashName = 'Bhavik Vavadiya';
  displayedChars: string[] = [];
  splashFading = false;
  animStates: string[] = [];
  lastStart = 0;
  lastLength = 0;
  private randomChars = ['@', '#', '$', '%', '&', '*', '+', '-', '=', '<', '>', '?', '!', '•', '★', '¤', '§', '♪', '♫'];

  constructor(
    private googleAnalyticsService: GoogleAnalyticsService,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.googleAnalyticsService.loadGoogleAnalytics();
    this.initSplash();



    // Set default SEO meta tags
    this.seoService.updateMetaTags({
      title: 'Bhavik Vavadiya | Data Analyst | Machine Learning Engineer | Portfolio',
      description: 'Data Analyst and Machine Learning Engineer with experience in Python, SQL, Power BI, and predictive modeling. Browse projects, dashboards, and analyses.',
      url: '/',
      image: '/assets/logo.jpg',
      keywords: 'Bhavik Vavadiya, Data Analyst, Machine Learning Engineer, Python, SQL, Power BI, Data Science, Portfolio'
    });

    // Ensure canonical URL is set for current page
    this.seoService.setCanonicalForCurrentPage();
  }

  private initSplash() {
    // Two-stage reveal: first reveal full first name normally, then reveal last name
    const parts = this.splashName.split(' ');
    const firstName = parts[0] || this.splashName;
    const lastName = parts.slice(1).join(' ') || '';

    // expose last name indices for template/class targeting
    this.lastStart = firstName.length + 1;
    this.lastLength = lastName.length;

    // Initialize display arrays
    this.displayedChars = Array.from(this.splashName).map(char => (char === ' ' ? ' ' : ''));
    this.animStates = new Array(this.displayedChars.length).fill('idle');

    // Reveal first name one character at a time with the existing scrambled-frames effect
    let i = 0;
    const revealFirst = () => {
      if (i >= firstName.length) {
        // ensure first name visible, then start revealing last name after a short pause
        for (let j = 0; j < firstName.length; j++) {
          this.displayedChars[j] = firstName[j];
        }
        setTimeout(() => revealLast(0), 180);
        return;
      }

      if (firstName[i] === ' ') {
        this.displayedChars[i] = ' ';
        i += 1;
        revealFirst();
        return;
      }

      const totalFrames = 4 + Math.floor(Math.random() * 3);
      let frame = 0;
      const step = () => {
        if (frame >= totalFrames) {
          this.displayedChars[i] = firstName[i];
          i += 1;
          setTimeout(revealFirst, 60);
          return;
        }
        this.displayedChars[i] = this.randomChars[Math.floor(Math.random() * this.randomChars.length)];
        frame += 1;
        setTimeout(step, 60);
      };
      step();
    };

    // Reveal last name left-to-right with a strong per-letter pop (no scrambling)
    const revealLast = (posIndex: number) => {
      if (!lastName || posIndex >= lastName.length) {
        setTimeout(() => this.hideSplash(), 700);
        return;
      }

      const globalPos = this.lastStart + posIndex;

      // reveal the letter immediately and trigger the "last name" pop animation
      this.displayedChars[globalPos] = lastName[posIndex];
      this.animStates[globalPos] = 'active-last';

      // keep the active state briefly so CSS animation can play
      setTimeout(() => { this.animStates[globalPos] = 'idle'; }, 560);

      // stagger next letter for a brisk left-to-right reveal
      setTimeout(() => revealLast(posIndex + 1), 100);
    };

    revealFirst();
  }

  private hideSplash() {
    // fade first, then remove from DOM so animations can start smoothly
    this.splashFading = true;
    setTimeout(() => {
      this.showSplash = false;
      if (typeof window !== 'undefined') {
        window.document.documentElement.classList.add('splash-done');
        window.dispatchEvent(new Event('splashEnd'));
      }
    }, 360);
  }
}
