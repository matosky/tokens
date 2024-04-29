import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectOptions } from '../../../shared/components/common/select-dropdown/select-dropdown.component';
import { TableHeaders } from '../overview/overview.component';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { ServerInteractorService } from '../../../shared/services/server-interactor.service';
interface CardData {
  icon: string;
  amount: string | number;
  label1: string;
  label2: string;
}

interface Transaction {
  id: number;
  status: string;
  reference: string;
  amount: string;
  destination: string;
  createdAt: string;
}

declare var $: any;

@Component({
  selector: 'app-gifts-log',
  templateUrl: './gift-logs.component.html',
  styleUrl: './gift-logs.component.less',
})
export class GiftsLogComponent implements OnInit {
  filterForm!: FormGroup;
  withdrawalForm!: FormGroup;
  startDate!: Date;
  endDate!: Date;
  isWithDrawVisible: boolean = false;
  isConfirmVisible: boolean = false;
  isBeneficialVisible: boolean = false;
  isSuccessVisible: boolean = false;
  isViewMore: boolean = false;
  modalData: any;
  selectedValue: String = '';
  modalTitle: string = 'Withdrawal';
  currentStep: number = 1;

  listOfData: any = [];
  totalPages = 0;
  currentPage = 1;
  pageSize = 5;
  pageIndex = 0;
  loading: BooleanInput = false;
  isVisible: boolean = false;
  eyeIcon: string = 'assets/svg/visibility.svg';
  closeIcon: string = 'assets/svg/close_icon.svg';
  rowBorderColor: string = 'blue';
  cardData: CardData = {
    icon: 'assets/svg/card_icons/gift_logs.svg',
    amount: 5000.00,
    label1: 'Total Cashtoken Gifted',
    label2: 'Total Cashtoken Received',
  };
  isVisibleEye: boolean = false;


  constructor(
    private fb: FormBuilder,
    private serverInteractor: ServerInteractorService
  ) {}

  optionsArray: SelectOptions[] = [
    { label: 'Success', value: 'success' },
    { label: 'Pending', value: 'pending' },
    { label: 'Failed', value: 'failed' },
  ];

  showMoreModal(id: number): void {
    this.isViewMore = true;
    this.modalData = this.personData.find((item) => item.id === id);
  }


  handleOk(): void {
    this.isWithDrawVisible = false;
    this.isViewMore = false;
    this.currentStep = 1;
  }

  handleCancel(): void {
    this.isWithDrawVisible = false;
    this.isViewMore = false;
    this.currentStep = 1;
  }


  headers: TableHeaders = {
    headers: [
      { header: 'S/N', dataField: 'serialId' },
      { header: 'Recipient', dataField: 'recipient' },
      { header: 'Cashtoken Gifted', dataField: 'cashtoken-gifted' },
      { header: 'ID', dataField: 'destination' },
      { header: 'Date', dataField: 'date' },
    ],
  };

  checkIcon = 'assets/svg/check_circle.svg';

  mobileHeaders: TableHeaders = {
    headers: [
      { header: 'S/N', dataField: 'serialId' },
      { header: 'Token Gifted', dataField: 'cashtoken-gifted' },
    ],
  };

 
  toggleWalletBallance(): void{
    this.isVisibleEye = !this.isVisibleEye;
  }

  loadTransactions(page: number, pageSize: number): void {
    this.loading = true;
    this.serverInteractor.dataGetRequestInterceptor('transactions',page, pageSize).subscribe({
      next: (data) => {
        this.loading = false;
        this.personData = data.transactions;
        this.totalPages = data.totalPages;
        this.currentPage = data.currentPage;
      },
      error: (error) => console.error(error),
    });
  }

  onPageChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.loadTransactions(pageIndex, this.pageSize);
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.loadTransactions(this.currentPage, size);
  }

  personData: Transaction[] = [];

  ngOnInit() {
    // $('.datetimepicker').datetimepicker({
    //   icons: {
    //     time: 'fa fa-clock-o',
    //     date: 'fa fa-calendar',
    //     up: 'fa fa-chevron-up',
    //     down: 'fa fa-chevron-down',
    //     previous: 'fa fa-chevron-left',
    //     next: 'fa fa-chevron-right',
    //     today: 'fa fa-screenshot',
    //     clear: 'fa fa-trash',
    //     close: 'fa fa-remove',
    //   },
    // });
    // this.filterForm = this.fb.group({
    //   startDate: ['', Validators.compose([Validators.required])],
    //   endDate: ['', Validators.compose([Validators.required])],
    // });
    this.loadTransactions(this.currentPage, this.pageSize);

    this.filterForm = this.fb.group({
      quantityGifted: [''],
      reference: [''],
      status: [''],
      recipient: [''],
      startDate: [''],
      endDate: [''],
    });

  }


  async onSubmitFilterForm() {
    this.loading = true;
    this.startDate = new Date();
    if (this.filterForm.valid) {
      // Log the form values as an object
      const formValues = this.filterForm.value;
      this.serverInteractor.filterDataGetRequestInterceptor('transactions',this.currentPage, this.pageSize,formValues).subscribe({
        next: (data) => {
          this.loading = false;
          this.personData = data.transactions;
          this.totalPages = data.totalPages;
          this.currentPage = data.currentPage;
        },
        error: (error) => console.error(error),
      });;
    } else {
      // Handle invalid form
      console.log('Form is invalid');
    }
  }


}
