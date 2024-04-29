import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.less']
})
export class PrimaryButtonComponent {
  @Input() text: string;
  @Input() width: string;
  @Input() height: string;
  @Input() padding: string;
  @Input() margin: string;
  @Input() color: string;
  @Input() background: string;
  @Input() radius: string;
  @Input() contained: boolean = false;
  @Input() disabled: boolean = false;
  @Output() clickEvent: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    this.clickEvent.emit();
  }
}
