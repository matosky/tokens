import { Component, Input } from '@angular/core';
import { CountryInputProps } from '../../../shared/components/common/flags/flags.component';
import { countries } from '../../../shared/components/common/flags/countries';
import { SelectOptions } from '../../../shared/components/common/select-dropdown/select-dropdown.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


export type CountryProps = {
  label:string;
  value:string;
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.less'
})
export class SettingsComponent {
  countries: CountryProps[] = [];
  currentFlag: string;
  isMobileView = false;
  isNavHideMode:boolean = false;
  isRouteHideMode:boolean = false;
  isCountryModal: boolean = false;
  constructor(private location: Location) {}
  ngOnInit(): void {
    this.detectMobileView();
    this.countries = this.getCountries();
    if(this.isMobileView){
      this.isRouteHideMode = true;
      this.isNavHideMode = false;
    }
  }
  getCountries(): CountryProps[] {
    let country: CountryProps[] = [];
    // Check if countries is defined and is an array
    if (Array.isArray(countries)) {
      country = countries.map((value, id) => ({
        value: value.name,
        label: value.dial_code,
        // image: `https://flagsapi.com/${value.code}/flat/64.png`,
        // countryName: value.code as string,
        // name: value.name,
      }));
    }
  
    country.shift();
    return country;
  }



  detectMobileView() {
    this.isMobileView = window.innerWidth < 768; 
  }

  onNavLinkClick(navLink) {
    this.detectMobileView()
    if (this.isMobileView) {
      if(navLink==="Country"){
        this.toggleIsCountryModal()
      }
      this.toggleIsRouteHideMode();
    }
  }

  hideNavOnMobile() {
    this.isNavHideMode = !this.isNavHideMode;
  }

  toggleIsNavHideMode():void{
    this.isNavHideMode = false;
    this.isRouteHideMode = false;
  }
  
  toggleIsRouteHideMode():void{
    this.isNavHideMode = true;
    this.isRouteHideMode = !this.isRouteHideMode;
    console.log("after click", this.isRouteHideMode)

  }

 
  toggleIsCountryModal():void{
    this.isCountryModal = !this.isCountryModal;
    this.isRouteHideMode = false;
    if(this.isCountryModal===false){
      this.isNavHideMode = false;
      this.isRouteHideMode = true;
    }
  }

  // goBack(): void {
  //   this.location.back();
  // }

}
