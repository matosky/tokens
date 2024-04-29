import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BooleanInput } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent {
  @Input() showPagination: boolean = false;
  @Input() tableHeaders: any; // Assuming you have a data structure for table headers
  @Input() bodyBackground: string = '#FFF';
  @Input() tableData: any[] = [];

  totalPages = 0;
  currentPage = 1;
  pageSize = 10;
  pageIndex = 0;
  @Input() loading: BooleanInput = false;
  isVisible: boolean = false;
  modalData: any;
  selectedValue: String = '';
  eyeIcon: string = 'assets/svg/visibility.svg';


}
