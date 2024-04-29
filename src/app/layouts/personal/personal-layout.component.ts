import {
  ChangeDetectorRef,
  Component,
  OnInit,
  NgZone,
  Input,
} from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { filter, interval } from 'rxjs';

@Component({
  selector: 'personal-layout',
  templateUrl: './personal-layout.component.html',
  styleUrls: ['./personal-layout.component.less'],
})
export class PersonalLayoutComponent implements OnInit {
  isCollapsed = false;
  pageTitle: string = '';
  currentDate!: Date;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    const path = window.location.pathname;
    if (path === '/') {
      this.pageTitle = 'Dashboard Overview';
    }
    this.setPageTitle();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setPageTitle();
        this.ngZone.run(() => {
          this.setPageTitle();
        });
      });

    // Set the initial date
    this.currentDate = new Date();
    // Update the current date every minute (adjust the interval as needed)
    interval(60000).subscribe(() => {
      this.currentDate = new Date();
    });
  }

  private setPageTitle(): void | string {
    const path = window.location.pathname;
    let pageTitle = '';
    if (path === '/' || path === '/overview-ent') {
      return (this.pageTitle = 'Dashboard Overview');
    }
    if (path.includes('-')) {
      // Remove the leading slash if present and split the path by hyphen
      const parts = path.replace(/^\//, '').split('-');
      // Transform each part to capitalize first letter and join with space
      pageTitle = parts
        .map((part) => this.capitalizeFirstLetter(part))
        .join(' ');
    } else {
      // No hyphen found, use the path directly
      pageTitle = path.split('/').pop() || 'Default Title';
    }
    this.pageTitle = this.capitalizeFirstLetter(pageTitle);
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
