import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  lastScrollTop = 0;
  isHeaderHidden = false;
  currentRoute = '';
  private scrollRafId: number | null = null;
  private handleScrollBound = () => this.handleScroll();

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
        if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
          return;
        }

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
          return;
        }

        const isMobile = window.innerWidth < 1024;

        import('aos').then(AOS => AOS.default.init({
          duration: isMobile ? 420 : 900,
          once: true,
          mirror: false,
          offset: isMobile ? 24 : 60,
          delay: isMobile ? 0 : 50
        }));
      };

      if (document.documentElement.classList.contains('splash-done')) {
        initAos();
      } else {
        window.addEventListener('splashEnd', initAos, { once: true });
      }

      window.addEventListener('scroll', this.handleScrollBound, { passive: true });
      window.scrollTo(0, 0);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.handleScrollBound);
      if (this.scrollRafId !== null) {
        window.cancelAnimationFrame(this.scrollRafId);
      }
    }
  }

  private handleScroll() {
    if (typeof window === 'undefined') {
      return;
    }

    if (this.scrollRafId !== null) {
      return;
    }

    this.scrollRafId = window.requestAnimationFrame(() => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > this.lastScrollTop) {
        this.isHeaderHidden = true;
      } else {
        this.isHeaderHidden = false;
      }
      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      this.scrollRafId = null;
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (isPlatformBrowser(this.platformId)) {
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
        document.body.classList.add('no-scroll', 'menu-open');
        // move the mobile menu wrapper to document.body to escape header stacking contexts
        setTimeout(() => {
          try {
            const menuRoot = document.getElementById('mobile-menu-root');
            if (menuRoot && menuRoot.parentElement !== document.body) {
              document.body.appendChild(menuRoot);
            }
          } catch (e) {
            // ignore DOM errors
          }
        }, 0);
      } else {
        document.body.style.overflow = '';
        document.body.classList.remove('no-scroll', 'menu-open');
        // move the mobile menu wrapper back into the header so Angular keeps its structure
        setTimeout(() => {
          try {
            const menuRoot = document.getElementById('mobile-menu-root');
            const headerEl = document.querySelector('header');
            if (menuRoot && headerEl && menuRoot.parentElement !== headerEl) {
              headerEl.appendChild(menuRoot);
            }
          } catch (e) {
            // ignore DOM errors
          }
        }, 0);
      }
    }
  }
}