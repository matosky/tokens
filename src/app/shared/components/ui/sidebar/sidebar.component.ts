import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutState } from '../../../../layouts/reducers/layout.state';
import { getView } from '../../../../layouts/reducers/layout.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.less',
})
export class SidebarComponent implements OnInit {
  dashIcon: string = 'assets/svg/menu/dashboard.svg';
  logo: string = 'assets/svg/app_logo.svg';
  logout: string = 'assets/svg/menu/logout.svg';
  activeItem: string = 'overview';
  layoutState$: Boolean;
  menuData: any;
  viewText: string;
  constructor(private store: Store<AppState>) {}
  @Input() currentPage: string = '';

  ngOnInit() {
    this.activeItem = this.currentPage;
    this.store.select(getView).subscribe((data: boolean) => {
      this.menuData =
        data === false
          ? this.enterpriseViewSidebarItem
          : this.personalViewSidebarItem;
      this.viewText =
        data === true ? 'Enterprise' : 'Dashboard';
    });
  }

  personalViewSidebarItem = [
    {
      title: '',
      items: [
        { icon: 'wallet', text: 'Wallet', route: '/wallet' },
        { icon: 'cashtoken', text: 'Gift CashToken', route: '/gift-cashtoken' },
      ],
    },
    {
      title: 'My Rewards',
      items: [
        { icon: 'logs', text: 'Gift Logs', route: '/gift-logs' },
        { icon: 'win', text: 'Win History', route: '/win-history' },
        { icon: 'points', text: 'Point Balance', route: '/wallet' },
      ],
    },
    {
      title: 'Campaigns',
      items: [
        { icon: 'featured', text: 'Ongoing', route: '/wallet' },
        { icon: 'others', text: 'Upcoming', route: '/wallet' },
      ],
    },
    // {
    //   title: '',
    //   items: [{ icon: 'refer', text: 'Referral', route: '/referrals' }],
    // },
    {
      title: '',
      items: [
        { icon: 'refer', text: 'Referral', route: '/referrals' },
        { icon: 'support', text: 'Support', route: '/support' },
        { icon: 'settings', text: 'Settings', route: '/settings' },
      ],
    },
  ];

  enterpriseViewSidebarItem = [
    {
      title: '',
      items: [
        { icon: 'overview', text: 'Overview', route: '/overview-ent' },
        { icon: 'cashtoken', text: 'Gift CashToken', route: '/gift-cashtoken' },
      ],
    },
    {
      title: 'Campaigns',
      items: [
        { icon: 'featured', text: 'Featured', route: '/wallet' },
        { icon: 'others', text: 'Others', route: '/wallet' },
      ],
    },
    {
      title: '',
      items: [
        { icon: 'support', text: 'Support', route: '/support' },
        { icon: 'settings', text: 'Settings', route: '/settings' },
      ],
    },
  ];

  isActive(item: string): boolean {
    const storedItem = localStorage.getItem('activeItem');
    return item === (storedItem || this.activeItem);
  }

  setActiveItem(item: string): void {
    this.activeItem = item;
    this.currentPage = item;
    // Store the active item in localStorage
    localStorage.setItem('activeItem', this.activeItem);
  }
}
