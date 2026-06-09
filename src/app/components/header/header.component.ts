import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  lastScrollTop = 0;
  isHeaderHidden = false;
  currentRoute = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router
  ) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        // update current route (path without query/fragment)
        this.currentRoute = this.router.url.split('?')[0].split('#')[0];

        // If navigation includes a fragment, attempt to scroll to it
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment && isPlatformBrowser(this.platformId)) {
          // small delay to ensure element is rendered
          setTimeout(() => this.scrollTo(tree.fragment as string), 60);
        }
      }
    });
  }

  goToSection(id: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }

    if (!isPlatformBrowser(this.platformId)) return;

    // If we're already on the homepage, just scroll
    if (this.currentRoute === '/' || this.currentRoute === '') {
      this.scrollTo(id);
      return;
    }

    // Otherwise navigate to home with fragment, then scroll after navigation
    this.router.navigate(['/'], { fragment: id }).then(() => {
      setTimeout(() => this.scrollTo(id), 80);
    });
  }

  private scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      // If header is fixed, offset the scroll so the section isn't hidden behind it
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? (headerEl as HTMLElement).offsetHeight : 72;
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      // fallback: smooth scroll to top when id not found
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  isRouteActive(route: string): boolean {
    if (route === '/') {
      return this.currentRoute === '/' || this.currentRoute === '';
    }
    return this.currentRoute === route;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const initAos = () => {
        import('aos').then(AOS => AOS.default.init({
          duration: 1000,
          once: true,
          mirror: false
        }));
      };

      if (document.documentElement.classList.contains('splash-done')) {
        initAos();
      } else {
        window.addEventListener('splashEnd', initAos, { once: true });
      }

      window.scrollTo(0, 0);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > this.lastScrollTop) {
      this.isHeaderHidden = true;
    } else {
      this.isHeaderHidden = false;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (isPlatformBrowser(this.platformId)) {
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
        document.body.classList.add('no-scroll');
      } else {
        document.body.style.overflow = '';
        document.body.classList.remove('no-scroll');
      }
    }
  }
}
