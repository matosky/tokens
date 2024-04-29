import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { CountryInputProps } from '../flags/flags.component';
import { countries } from '../flags/countries';
import {
  CountryProp,
  SwitchCountry,
} from '../../../../layouts/actions/layout.actions';
import { getCurrentCountry } from '../../../../layouts/reducers/layout.selector';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-collapse',
  templateUrl: './custom-collapse.component.html',
  styleUrl: './custom-collapse.component.less',
})
export class CustomCollapseComponent implements OnDestroy {
  isMobileView: boolean = false;
  countries: CountryInputProps[];
  currentFlag: string = '';
  @Output() navLinkClicked: EventEmitter<string> = new EventEmitter<string>();
  private countrySubscription: Subscription;

  constructor(private router: Router, private store: Store<AppState>) {}

  @Input() panels: {
    name: string;
    active: boolean;
    content: { subcontent: string; route: string; icon?: string }[];
  }[] = [
    {
      active: true,
      name: 'Account Profile',
      content: [
        { subcontent: 'Profile Details', route: '/settings/profile' },
        { subcontent: 'Country', route: '/settings/country', icon: '' },
        { subcontent: 'Notification Settiings', route: '/notifications' },
      ],
    },
    {
      active: true,
      name: 'Security Settings',
      content: [
        { subcontent: 'Change Phone Number', route: '/settings/phone-number' },
        { subcontent: 'Change Password', route: '/settings/password' },
      ],
    },
    {
      active: true,
      name: 'Others',
      content: [
        { subcontent: 'About CashToken', route: '/about' },
        { subcontent: 'Privacy Policy', route: '/privacy' },
        { subcontent: 'Terms and Conditions', route: '/notifications' },
      ],
    },
  ];

  detectMobileView() {
    this.isMobileView = window.innerWidth < 768;
  }

  onNavLinkClick(c: string) {
    this.navLinkClicked.emit(c);
  }

  toggleCollapse(panelIndex: number): void {
    this.panels[panelIndex].active = !this.panels[panelIndex].active;
  }
  handleLinkClick(route: string, subcontent: string): void {
    this.detectMobileView();
    if (this.isMobileView === true) {
      if (subcontent === 'Country') {
        this.onNavLinkClick('Country');
        return;
      }
      this.onNavLinkClick('');
      this.router.navigateByUrl(route);
      return;
    }

    this.onNavLinkClick('');
    this.router.navigateByUrl(route);
  }

  ngOnInit(): void {
    this.countrySubscription = this.store
      .select(getCurrentCountry)
      .subscribe((data: CountryProp) => {
        const activeCountry = this.getCountries()?.find(
          (c: CountryInputProps) => c.name === data.countryName
        );
        this.currentFlag = activeCountry?.image;
      });
  }

  ngOnDestroy(): void {
    if (this.countrySubscription) {
      this.countrySubscription.unsubscribe();
    }
  }

  getCountries(): CountryInputProps[] {
    let country: CountryInputProps[] = [{}];
    countries.map((value, id) => {
      country.push({
        value: value.dial_code,
        label: value.dial_code,
        image: `https://flagsapi.com/${value.code}/flat/64.png`,
        countryName: value.code as string,
        name: value.name,
      });
    });

    country.shift();
    return country;
  }
}
