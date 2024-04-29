import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.less',
})
export class CardComponent {
  @Input() width: string = '100%';
  @Input() borderColor: string = '1px solid #d9d9d9';
  @Input() paddingStyles: string = '10px';
}
