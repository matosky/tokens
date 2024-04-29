import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-mobile-sidebar',
  templateUrl: './mobile-sidebar.component.html',
  styleUrl: './mobile-sidebar.component.less',
})
export class MobileSidebarComponent implements OnInit {
  isMobileSidebarOpen: boolean = false;
  @Input() currentPage: string = '';

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.activeItem = this.currentPage;
    this.sidebarService.isMobileSidebarOpen$.subscribe((isOpen) => {
      this.isMobileSidebarOpen = isOpen;
    });
  }

  toggleMobileSidebar() {
    this.sidebarService.closeMobileSidebar();
  }

  dashIcon: string = 'assets/svg/menu/dashboard.svg';
  logo: string = 'assets/svg/app_logo.svg';
  activeItem: string = 'overview';

  menuData = [
    {
      title: '',
      items: [
        { icon: 'overview', text: 'Overview', route: '/' },
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
        { icon: 'featured', text: 'Featured', route: '/wallet' },
        { icon: 'others', text: 'Others', route: '/wallet' },
      ],
    },
    {
      title: '',
      items: [{ icon: 'refer', text: 'Referral', route: '/wallet' }],
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
    this.toggleMobileSidebar();
  }
}
