// Angular Import
import { Component, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'full-version';
  
  // Add the renderer property to the class
  constructor(private router: Router, private renderer: Renderer2) {}

  // life cycle event
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    // Listen for route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Remove all previous page classes
        const classesToRemove = Array.from(document.body.classList)
          .filter(className => className.startsWith('page-'));
        classesToRemove.forEach(className => this.renderer.removeClass(document.body, className));

        // Add the current page's class
        const currentClass = this.getClassFromUrl(event.urlAfterRedirects || event.url);
        this.renderer.addClass(document.body, currentClass);
      }
    });
  }

  private getClassFromUrl(url: string): string {
    // Convert URL to a class name (you may need to customize this logic)
    return 'page-' + url.replace(/\//g, '-').replace(/^\-|\-$/g, '');
  }
}