import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-wrap',
  templateUrl: './page-wrap.component.html',
  styleUrl: './page-wrap.component.less',
})
export class PageWrapComponent {
  @Input() customStyles: { [key: string]: string } = {};
}
