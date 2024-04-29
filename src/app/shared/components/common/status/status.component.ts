import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.less'
})
export class StatusComponent {
@Input() status:string = "completed";
}
