import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.less',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
  ],
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {
  @Input()  label:string = ''; 
  @Input()  placeholder:string = ''; 

  control!: FormControl;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.control = this.fb.control('');
    this.control.valueChanges.subscribe((value) => {
      this.onChange(value);
      this.onTouched();
    });
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
