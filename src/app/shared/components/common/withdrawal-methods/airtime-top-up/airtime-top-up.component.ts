import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectOptions } from '../../select-dropdown/select-dropdown.component';

@Component({
  selector: 'app-airtime-top-up',
  templateUrl: './airtime-top-up.component.html',
  styleUrl: './airtime-top-up.component.less',
})
export class AirtimeTopUpComponent {
  withdrawalForm!: FormGroup;
  methodError: boolean = false;
  walletError: boolean = false;
  amountError: boolean = false;
  mobileNumberError: boolean = false;
  networkError: boolean = false;
  withdrawalMethod: string = '';
  currentStep: number = 1;
  isFailedTransaction: boolean = true;
  isSuccessTransaction: boolean = false;
  checkIcon = 'assets/svg/check_circle.svg';
  closeIcon: string = 'assets/svg/close_icon.svg';
  failedIcon: string = 'assets/svg/failed.svg';
  @Input() airtimeFlowModal: boolean = true;
  @Input() initialPayload: {
    method: string;
    wallet: string;
    amount: string;
  };
  @Output() modalTitleEmitter: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() modalCloseWithOkEmitter: EventEmitter<void> =
    new EventEmitter<void>();
  @Output() modalCloseWithCancelEmitter: EventEmitter<void> =
    new EventEmitter<void>();
  @Output() modalTitle: string = 'Withdrawal';
  modalHeader: boolean = true;

  confirmWithdrawData = [
    { title: 'Method', info: 'Airtime Topup' },
    { title: 'Wallet', info: 'Reward' },
    { title: 'Amount', info: 'N200.00' },
    { title: 'Beneficiary', info: '0803612727' },
  ];

  methodOptions: SelectOptions[] = [
    { label: 'Airtime Top-up', value: 'airtime' },
    { label: 'myFela Wallet', value: 'myfela' },
    { label: 'Bank Account Transfer', value: 'bank-account' },
    { label: 'Data Bundle Subscription', value: 'data-bundle' },
    { label: 'Master Account Subscription', value: 'master-account' },
    { label: 'Offline Bank Transfer', value: 'offline-transfer' },
  ];

  networktions: SelectOptions[] = [
    { label: 'MTN', value: 'MTN' },
    { label: 'AIRTEL', value: 'AIRTEL' },
    { label: 'ETISALAT', value: 'ETISALAT' },
  ];

  constructor(private router: Router, private fb: FormBuilder) {}

  // Other logic for the child component
  ngOnInit() {
    // Subscribe to form value changes and update error states
    this.initWithdrawalForm();

    if (this.currentStep === 1) {
      this.getModalTitle();
    }

    console.log("initipayload", { ...this.initialPayload });

    // Subscribe to valueChanges after the form is fully initialized
    this.withdrawalForm.valueChanges.subscribe((formValues) => {
      this.updateConfirmWithdrawData(formValues);
    });
  }

  //updates template after view is updated
  ngAfterViewInit(): void {
    this.updateConfirmWithdrawData(this.withdrawalForm.value);
  }

  private updateConfirmWithdrawData(formValues: any): void {
    if (this.withdrawalForm.valid) {
      this.confirmWithdrawData = [
        { title: 'Method', info: formValues.method },
        { title: 'Wallet', info: formValues.wallet },
        { title: 'Amount', info: formValues.amount },
        { title: 'Network', info: formValues.network },
        { title: 'Beneficiary', info: formValues.mobileNumber },
      ];
    } else {
      console.log('Withdrawal form is invalid');
    }
  }

  initWithdrawalForm() {
    // Subscribe to form value changes and update error states
    this.withdrawalForm = this.fb.group({
      mobileNumber: ['', Validators.required],
      network: ['', Validators.required],
    });

    this.withdrawalForm.get('mobileNumber').valueChanges.subscribe((value) => {
      this.mobileNumberError = value === '';
    });
    this.withdrawalForm.get('network').valueChanges.subscribe((value) => {
      this.networkError = value === '';
    });
  }

  handleOk(): void {
    this.currentStep = 1;
    this.isSuccessTransaction = false;
    this.isFailedTransaction = false;
    this.modalCloseWithOkEmitter.emit();
  }

  handleCancel(): void {
    this.currentStep = 1;
    this.isSuccessTransaction = false;
    this.isFailedTransaction = false;
    this.modalCloseWithCancelEmitter.emit();
  }

  // Function to get the next button text based on the current step
  getNextButtonText(): string {
    if (this.currentStep === 1) {
      return 'Next';
    } else if (this.currentStep === 2) {
      return 'Confirm';
    } else {
      return 'Ok';
    }
  }

  // Function to handle the "Next" button click
  onNextClick(): void {
    // Implement logic to navigate to the next step
    if (this.checkFormValidity()) {
      if (this.currentStep < 3) {
        this.withdrawalForm.markAllAsTouched();
        this.currentStep++;
      } else if (this.currentStep === 3) {
        this.onSubmitWithdrawalForm();
        if (this.withdrawalForm.valid) {
          this.withdrawalForm.reset();
        }
        this.currentStep++;
      } else if (this.currentStep === 3) {
        this.modalHeader = false;
        this.currentStep = 1;

        // Force reload form component to reset form values
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigate([window.location.pathname]);
          });
      }
      this.getModalTitle();
    } else {
      console.log('Form inputs are not filled for the current step.');
    }
  }

  checkFormValidity(): boolean {
    const isMobileValid = this.withdrawalForm?.get('mobileNumber').value !== '';
    const isNetworkValid = this.withdrawalForm?.get('network').value !== '';

    // Set error flags based on validation
    this.mobileNumberError = !isMobileValid;
    this.networkError = !isNetworkValid;
    // Return true if all fields are filled
    return isMobileValid && isNetworkValid;
  }

  // Handle form submission
  onSubmitWithdrawalForm(): void {
    // Check if the form is valid
    if (this.withdrawalForm.valid) {
      // Check if at least one control has been touched
      if (this.isFormTouched()) {
        // Log the form values as an object
        const formValues = this.withdrawalForm.value;
        console.log("payload", { ...formValues, ...this.initialPayload });
        // Reset the form to its initial state
        this.withdrawalForm.reset();
        // Display success message
        this.isSuccessTransaction = true;
        // Reset failure flag
        this.isFailedTransaction = false;
      } else {
        // Handle the case where no control has been touched
        console.log('No form control has been touched');
        this.isFailedTransaction = true;
        this.isSuccessTransaction = false;
      }
    } else {
      // Handle invalid form
      console.log('Form is invalid');
      this.isFailedTransaction = true;
    }
  }

  // Function to check if at least one form control has been touched
  isFormTouched(): boolean {
    for (const controlName in this.withdrawalForm.controls) {
      if (this.withdrawalForm.controls.hasOwnProperty(controlName)) {
        const control = this.withdrawalForm.get(controlName);

        // Check if any control has been touched
        if (control && control.touched) {
          return true; // At least one control has been touched
        }
      }
    }
    return false; // No controls have been touched
  }

  // Function to get the modal title based on the current step
  getModalTitle(): void {
    let title = '';
    if (this.currentStep === 1) {
      title = 'Add Beneficiary';
    } else if (this.currentStep === 2) {
      title = 'Confirm Withdrawal';
    }
    // Emit the modal title to the parent component
    this.modalTitleEmitter.emit(title);

    console.log({ title });
  }
}
