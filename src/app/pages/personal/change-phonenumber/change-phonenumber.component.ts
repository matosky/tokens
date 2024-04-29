import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryInputProps } from '../../../shared/components/common/flags/flags.component';
import { countries } from '../../../shared/components/common/flags/countries';
import { SelectOptions } from '../../../shared/components/common/select-dropdown/select-dropdown.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


interface CountryCodeOptions{
  label?:string;
  image?:string;
}
@Component({
  selector: 'app-change-phonenumber',
  templateUrl: './change-phonenumber.component.html',
  styleUrl: './change-phonenumber.component.less',
})
export class ChangePhonenumberComponent implements OnInit {
  userPhoneNumber: number = 8132186204;
  isEditMode = true;
  isVerificationMode = false;
  verificationCode: string[] = ['', '', '', ''];
  isOtpMode = false;
  isTimer: boolean = true;
  isVisible = false;
  modalTitle: string = 'Phone Number Changed Successfully';
  countries: CountryInputProps[];
  currentFlag: string;
  otp: string;
  showOtpComponent = true;
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '*',
    inputStyles: { width: '40px', height: '40px' },
  };
  Form: FormGroup;

  constructor(private fb: FormBuilder) {}
 
  editPhoneNumber() {
    this.isEditMode = false;
    this.isVerificationMode = true;
  }

  verifyPhoneNumber(): void {
    // Additional logic for verification (e.g., send verification code)
    this.isVerificationMode = false;
    // Toggle to the verification mode and re-render the second block
    this.isOtpMode = true;
  }


  ngOnInit(): void {
    this.activitySelectOptions = this.getCountries()
    this.Form = this.fb.group(
      {
        currentNumber: [''],
        newNumber: ['', [Validators.required, Validators.minLength(8)]],
        otp: ['', [Validators.required, Validators.minLength(8)]],
      },
    )

    this.Form.get('currentNumber').patchValue('08160835244')
    this.Form.get('newNumber').patchValue('08160835244')
  }


  onSubmit():void{
    this.showModal()
    if(this.isVisible){
      this.isOtpMode = false;
      this.isVerificationMode = false;
      this.isEditMode = true;
    }
  }

  countryCodes = [
    { label: 'Nigeria', value: 'NG', flag: '🇳🇬', code: '+234' },
    { label: 'United Kingdom', value: 'UK', flag: '🇬🇧', code: '+44' },
    { label: 'United States', value: 'US', flag: '🇺🇸', code: '+1' },
    { label: 'Ghana', value: 'GH', flag: '🇬🇭', code: '+233' },
    { label: 'Kenya', value: 'KE', flag: '🇰🇪', code: '+254' },
  ];

  defaultCode:string = `${this.countryCodes[0].flag} (${this.countryCodes[0].code})`

  activitySelectOptions: CountryCodeOptions[] = [];

  getCountries(): CountryCodeOptions[] {
    let country: CountryCodeOptions[] = [{}];
    countries.map((value, id) => {
      country.push({
        label: value.dial_code,
        image: `https://flagsapi.com/${value.code}/flat/64.png`,
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
      // this.store.dispatch(new SwitchCountry( {countryName:selectedCountry.name, countryFlag: selectedCountry.image} ));
    }
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOtpMode = false;
    this.isVerificationMode = false;
    this.isEditMode = true;
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isOtpMode = false;
    this.isVerificationMode = false;
    this.isEditMode = true;
    this.isVisible = false;
  }
}
