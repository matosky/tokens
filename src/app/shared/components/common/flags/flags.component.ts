import { Component, OnInit } from '@angular/core';
import { SelectOptions } from '../select-dropdown/select-dropdown.component';
import { countries } from './countries';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { CountryProp, SwitchCountry } from '../../../../layouts/actions/layout.actions';
import { Subscription } from 'rxjs';
import { getCurrentCountry } from '../../../../layouts/reducers/layout.selector';


export type CountryInputProps = {
  image?: string;
  value?: string;
  label?: string;
  name?: string;
  dialCode?: string;
  countryName?: string;
};

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrl: './flags.component.less'
})
export class FlagsComponent implements OnInit {
  dropdownIcon: string = 'assets/svg/header/arrow_drop_down.svg';
  userIcon: string = 'assets/svg/header/person_add.svg';
  flagIcon: string = 'assets/svg/header/emoji_flags.svg';
  countries: CountryInputProps[];
  currentFlag: string;
  walletOptions: SelectOptions[] = [
    { label: 'Reward', value: 'reward' },
  ];
  private countrySubscription: Subscription;

  constructor(private store: Store<AppState>) {} 

  ngOnInit(): void {
    this.countries = this.getCountries();
      this.countrySubscription = this.store.select(getCurrentCountry).subscribe((data: CountryProp) => {
        const activeCountry = this.getCountries()?.find((c:CountryInputProps)=>c.name===data.countryName);
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

  getCurrentFlag(value: string): void{
    const selectedCountry = this.countries.find(country => country.image === value);
    if (selectedCountry) {
      this.currentFlag = value;
      // Dispatch the action to update the country state
      this.store.dispatch(new SwitchCountry( {countryName:selectedCountry.name, countryFlag: selectedCountry.image} ));
    }
  }

}
