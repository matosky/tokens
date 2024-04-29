import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

import { interval } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent implements OnInit {
  logo: string = 'assets/svg/app_logo.svg';
  dropdownIcon: string = 'assets/svg/header/arrow_drop_down.svg';
  userIcon: string = 'assets/svg/header/person_add.svg';
  flagIcon: string = 'assets/svg/header/emoji_flags.svg';
  @Input() pageTitle: string = '';
  userProfilePopup: boolean = false;
  currentCountry: string;
  constructor(private sidebarService: SidebarService) {}

  toggleMobileSidebar() {
    this.sidebarService.openMobileSidebar();
  }

  currentDate!: Date;

  ngOnInit() {
    // Set the initial date
    this.currentDate = new Date();

    // Update the current date every minute (adjust the interval as needed)
    interval(60000).subscribe(() => {
      this.currentDate = new Date();
    });
  }


  toggleUserProfile(): void {
    this.userProfilePopup = !this.userProfilePopup;
  }
}
