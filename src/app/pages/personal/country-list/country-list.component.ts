import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryInputProps } from '../../../shared/components/common/flags/flags.component';
import { countries } from '../../../shared/components/common/flags/countries';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../interfaces';
import { Observable } from 'rxjs';
import { getCurrentCountry } from '../../../layouts/reducers/layout.selector';
import { CountryProp, SwitchCountry } from '../../../layouts/actions/layout.actions';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.less',
})
export class CountryListComponent implements OnInit {
  dropdownIcon: string = 'assets/svg/header/arrow_drop_down.svg';
  userIcon: string = 'assets/svg/header/person_add.svg';
  flagIcon: string = 'assets/svg/header/emoji_flags.svg';
  countries: CountryInputProps[];
  currentFlag: string;
  currentCountry$: Observable<CountryProp> = {} as Observable<CountryProp>;
  selectedCountryIndex: number | null = null;
  country: string;
  @Output() countryClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.countries = this.getCountries();
    this.currentFlag = this.getCountries()[0]?.image;

    // Subscribe to the observable
    this.currentCountry$ = this.store.pipe(select(getCurrentCountry));
    this.currentCountry$.subscribe((country) => {
      this.country = country.countryName;
      // Find the index of the selected country in the countries array
      this.selectedCountryIndex = this.countries.findIndex(
        (c) => c.name === country.countryName
      );
    });
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

  getCurrentFlag(value: string): void {
    const selectedCountry = this.countries.find(
      (country) => country.image === value
    );
    if (selectedCountry) {
      this.currentFlag = value;
      // Dispatch the action to update the country state
      this.store.dispatch(new SwitchCountry( {countryName:selectedCountry.name, countryFlag: selectedCountry.image} ));
    }
  }

  selectCountry(index: number,value:string): void {
    this.selectedCountryIndex = index;
    const selectedCountry = this.countries.find(country => country.image === value);
    if (selectedCountry) {
      this.currentFlag = value;
      // Dispatch the action to update the country state
      this.store.dispatch(new SwitchCountry( {countryName:selectedCountry.name, countryFlag: selectedCountry.image} ));
    }
    this.countryClicked.emit();
  }


}
