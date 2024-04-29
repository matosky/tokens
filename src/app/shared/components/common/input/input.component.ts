import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.less',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = '';
  @Input() name: string = '';
  control!: FormControl;
  @Output() blurEvent = new EventEmitter<void>(); 
  @Input() defaultValue: string = "";
  @Input() readOnlyMode: Boolean = false;

  // @Output() valueChange = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {

  }

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

  onBlur(): void {
    this.blurEvent.emit();
  }
}
