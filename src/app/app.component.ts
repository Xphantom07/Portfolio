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
    this.displayedChars = Array.from(this.splashName).map(char => (char === ' ' ? ' ' : ''));
    let index = 0;

    const revealNext = () => {
      if (index >= this.splashName.length) {
        setTimeout(() => this.hideSplash(), 900);
        return;
      }

      if (this.splashName[index] === ' ') {
        this.displayedChars[index] = ' ';
        index += 1;
        revealNext();
        return;
      }

      const totalFrames = 6 + Math.floor(Math.random() * 4);
      let frame = 0;

      const step = () => {
        if (frame >= totalFrames) {
          this.displayedChars[index] = this.splashName[index];
          index += 1;
          setTimeout(revealNext, 120);
          return;
        }

        this.displayedChars[index] = this.randomChars[Math.floor(Math.random() * this.randomChars.length)];
        frame += 1;
        setTimeout(step, 90);
      };

      step();
    };

    revealNext();
  }

  private hideSplash() {
    this.showSplash = false;
    if (typeof window !== 'undefined') {
      window.document.documentElement.classList.add('splash-done');
      window.dispatchEvent(new Event('splashEnd'));
    }
  }
}
