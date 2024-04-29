import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectOptions } from '../../../shared/components/common/select-dropdown/select-dropdown.component';
import { TableHeaders } from '../overview/overview.component';
import { Subscription } from 'rxjs';
import { TransactionsService } from '../../../shared/services/transaction.service';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { ServerInteractorService } from '../../../shared/services/server-interactor.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces';
import { getCurrentCountry } from '../../../layouts/reducers/layout.selector';
import { CountryProp } from '../../../layouts/actions/layout.actions';
import { Route, Router } from '@angular/router';
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
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.less',
})
export class WalletComponent implements OnInit {
  filterForm!: FormGroup;
  withdrawalForm!: FormGroup;
  startDate!: Date;
  endDate!: Date;
  isWithDrawVisible: boolean = false;
  airtimeFlowModal: boolean = false;
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
  isVisibleEye: boolean = false;
  isAirtimeVisibleEye: boolean = false;
  closeIcon: string = 'assets/svg/close_icon.svg';
  failedIcon: string = 'assets/svg/failed.svg';
  rowBorderColor: string = 'blue';
  cardData: CardData = {
    icon: 'assets/svg/card_icons/account_balance_wallet.svg',
    amount: 2000000,
    label1: 'Wallet Balance',
    label2: 'Airtime Balance',
  };
  isFailedTransaction: boolean = false;
  isSuccessTransaction: boolean = false;
  currentCountry: string;
  initialWithdrawPayload: {method: string; wallet: string; amount: string};
  withdrawalMethod: string = '';
  modalHeader: boolean = true;

  // form error states
  methodError: boolean = false;
  walletError: boolean = false;
  amountError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private serverInteractor: ServerInteractorService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  optionsArray: SelectOptions[] = [
    { label: 'Completed', value: 'completed' },
    { label: 'Pending', value: 'pending' },
    { label: 'Failed', value: 'failed' },
  ];
  walletOptions: SelectOptions[] = [{ label: 'Reward', value: 'reward' }];
  toggleWalletBallance(): void {
    this.isVisibleEye = !this.isVisibleEye;
  }
  toggleAirtimeBallance(): void {
    this.isAirtimeVisibleEye = !this.isAirtimeVisibleEye;
  }
  showMoreModal(id: number): void {
    this.isViewMore = true;
    this.modalData = this.personData.find((item) => item.id === id);
  }
  showWithdrawModal(): void {
    this.isWithDrawVisible = true;
  }

  handleOk(): void {
    this.isWithDrawVisible = false;
    this.isViewMore = false;
    this.currentStep = 1;
    this.isSuccessTransaction = false;
    this.isFailedTransaction = false;

    // Force reload component to reset values
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([window.location.pathname]);
    });
  }

  handleCancel(): void {
    this.isWithDrawVisible = false;
    this.isViewMore = false;
    this.currentStep = 1;
    this.isSuccessTransaction = false;
    this.isFailedTransaction = false;

    // Force reload component to reset values
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([window.location.pathname]);
    });
  }

  private withdrawalFormSubscription!: Subscription;

  confirmWithdrawData = [
    { title: 'Method', info: 'Airtime Topup' },
    { title: 'Wallet', info: 'Reward' },
    { title: 'Amount', info: 'N200.00' },
    { title: 'Beneficiary', info: '0803612727' },
  ];

  methodOptions: SelectOptions[] = [
    { label: 'Airtime Top-up', value: 'airtime' },
    { label: 'myFela Wallet', value: 'myfela' },
    { label: 'Bank Account Transfer', value: 'bank-transfer' },
    { label: 'Data Bundle Subscription', value: 'data-bundle' },
    { label: 'Master Account Subscription', value: 'master-account' },
    { label: 'Offline Bank Transfer', value: 'offline-transfer' },
  ];

  headers: TableHeaders = {
    headers: [
      { header: 'Status', dataField: 'status' },
      { header: 'Reference', dataField: 'reference' },
      { header: 'Amount', dataField: 'amount' },
      { header: 'Destination', dataField: 'destination' },
      { header: 'Date', dataField: 'date' },
    ],
  };

  checkIcon = 'assets/svg/check_circle.svg';

  mobileHeaders: TableHeaders = {
    headers: [
      { header: 'Status', dataField: 'status' },
      { header: 'Amount', dataField: 'amount' },
    ],
  };

  loadTransactions(page: number, pageSize: number): void {
    this.loading = true;
    this.serverInteractor
      .dataGetRequestInterceptor('transactions', page, pageSize)
      .subscribe({
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
    this.store.select(getCurrentCountry).subscribe((data: CountryProp) => {
      console.log({ data });
      this.currentCountry = data.countryName;
    });

    console.log(this.modalTitle);

    // Initialize withdrawalForm inside the subscription
    this.initWithdrawalForm();

    this.loadTransactions(this.currentPage, this.pageSize);
    const filters = {
      amount: '588.2',
      destination: 'djdjjjdkjskkkskss',
      startDate: '22222',
      endDate: 'dfffff',
      reference: 'ffffff',
      status: 'pending',
    };

    this.filterForm = this.fb.group({
      amount: [''],
      reference: [''],
      destination: [''],
      status: [''],
      startDate: [''],
      endDate: [''],
    });
  }

  // Initialize withdrawalForm and subscribe to valueChanges
  initWithdrawalForm() {
    this.withdrawalForm = this.fb.group({
      method: ['', Validators.required],
      wallet: ['', Validators.required],
      amount: ['', Validators.required],
    });

    // Subscribe to form value changes and update error states
    this.withdrawalForm.get('method').valueChanges.subscribe((value) => {
      this.withdrawalMethod = value;
      this.methodError = value === '';
    });

    this.withdrawalForm.get('wallet').valueChanges.subscribe((value) => {
      this.walletError = value === '';
    });

    this.withdrawalForm.get('amount').valueChanges.subscribe((value) => {
      this.amountError = value === '';
    });
  }


  async onSubmitFilterForm() {
    this.loading = true;
    this.startDate = new Date();
    if (this.filterForm.valid) {
      // Log the form values as an object
      const formValues = this.filterForm.value;
      this.serverInteractor
        .filterDataGetRequestInterceptor(
          'transactions',
          this.currentPage,
          this.pageSize,
          formValues
        )
        .subscribe({
          next: (data) => {
            this.loading = false;
            this.personData = data.transactions;
            this.totalPages = data.totalPages;
            this.currentPage = data.currentPage;
          },
          error: (error) => console.error(error),
        });
    } else {
      // Handle invalid form
      console.log('Form is invalid');
    }
  }

  handleModalTitle(title: string) {
    this.modalTitle = title;
  }

  // Function to handle the "Next" button click
  onNextClick(): boolean {
    console.log('check', this.checkFormValidity());
    if (!this.checkFormValidity()) {
      return false;
    } else {
      // Force reload form component to reset form values
      // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      //   this.router.navigate([window.location.pathname]);
      // });
      this.currentStep = 2;
      return true;
    }
  }

  checkFormValidity(): boolean {
    const isWalletValid = this.withdrawalForm?.get('wallet').value !== '';
    const isMethodValid = this.withdrawalForm?.get('method').value !== '';
    const isAmountValid = this.withdrawalForm?.get('amount').value !== '';

    // Set error flags based on validation
    this.walletError = !isWalletValid;
    this.amountError = !isMethodValid;
    this.methodError = !isAmountValid;
    // Return true if all fields are filled
    return isWalletValid && isMethodValid && isAmountValid;
  }
}