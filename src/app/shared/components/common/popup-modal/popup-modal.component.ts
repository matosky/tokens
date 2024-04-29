import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrl: './popup-modal.component.less'
})
export class PopupModalComponent {
  @Input() dropdownVisible: boolean = true;
  @Input() nzDropdownMenu: string;
  change(value: boolean): void {
    console.log(value);
  }

  toggleDropdown(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
