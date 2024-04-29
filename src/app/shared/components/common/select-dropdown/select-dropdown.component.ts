import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import { CountryInputProps } from '../flags/flags.component';
import { BooleanInput } from 'ng-zorro-antd/core/types';

export interface SelectOptions  {
  label: string;
  value: string;
  image?:string;
} 
interface CountryCodeOptions{
  label?:string;
  image?:string;
  value?:string;
}
@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrl: './select-dropdown.component.less',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectDropdownComponent),
      multi: true,
    },
  ],
})
export class SelectDropdownComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() options: SelectOptions[] | CountryCodeOptions[]  = [];
  @Input() size: NzSelectSizeType = 'small';
  @Input() isCountryOptions: Boolean = false;
  @Input() disabled = false;
  @Input() hasLabel?: boolean = true;

  // @Input() nzShowSearch: boolean = false;
  // @Input() nzAllowClear: boolean = false;
  control!: FormControl;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.control = this.fb.control('');
    this.control.valueChanges.subscribe((value) => {
      this.onChange(value);
      this.onTouched();
    });
  }


  renderCustomOption(option: any): string {
    return `${option.flag} (${option.code})`;
  }

  // Function to call when the input value changes
  onChange: any = () => {};

  // Function to call when the input is touched
  onTouched: any = () => {};

  // Write value to the input
  writeValue(value: any): void {
    this.control.setValue(value);
  }

  // Set the function to be called when the control receives a change event
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Set the function to be called when the control receives a touch event
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
