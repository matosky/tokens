import { Component, OnInit } from '@angular/core';
import { SelectOptions } from '../../../shared/components/common/select-dropdown/select-dropdown.component';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../interfaces';
import { getCurrentCountry } from '../../../layouts/reducers/layout.selector';
import { CountryProp } from '../../../layouts/actions/layout.actions';
interface CardData {
  icon: string;
  acct: string | number;
  currency?: Boolean;
  balanceLabel: string;
}

export interface TableColumn {
  header: string;
  dataField: string;
}

export interface TableHeaders {
  headers: TableColumn[];
}

export interface Transaction {
  id:number;
  date: string;
  reference: string;
  customer: string;
  quantity: string;
  status: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.less',
})
export class OverviewComponent implements OnInit {
  // customWidth = 280;
  isVisible: boolean = false;
  modalData:any
  selectedValue: String = '';
  constructor(private store: Store<AppState>) {}
  isVisibleEye: boolean = false;

  showModal(id:number): void {
    this.isVisible = true;
    this.modalData = this.personData.find((item)=>item.id===id);
  }

   activitySelectOptions: SelectOptions[] = [
    {
      label: "Today",
      value: "today"
    },
    {
      label: "Last 7 days",
      value: "7-days"
    },
    {
      label: "Last 14 days",
      value: "14-days"
    }
  ];
  
  

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }
  toggleWalletBallance(): void{
    this.isVisibleEye = !this.isVisibleEye;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  calculateAsteriksLength(amt:string): string{
    return '*'.repeat(amt.length);
  }

  campaign:string = "assets/campaign_new.png"
  cardData: CardData[] = [
    {
      icon: 'assets/svg/card_icons/wallet_bal.svg',
      acct: 2000,
      currency: true,
      balanceLabel: 'Wallet Balance',
    },
    {
      icon: 'assets/svg/card_icons/num_wins1.svg',
      acct: 10,
      balanceLabel: 'Number of wins',
    },
    {
      icon: 'assets/svg/card_icons/total_with.svg',
      acct: 14,
      balanceLabel: 'Total Withdrawal',
    },

  ];

  mobileCardData: CardData[] = [
    {
      icon: 'assets/svg/card_icons/wallet_bal.svg',
      acct: 2000,
      currency: true,
      balanceLabel: 'Wallet Balance',
    },
    {
      icon: 'assets/svg/card_icons/total_with.svg',
      acct: 14,
      balanceLabel: 'Total Withdrawn',
    },
    {
      icon: 'assets/svg/card_icons/num_wins1.svg',
      acct: 10,
      balanceLabel: 'Number of wins',
    },
  ];

  totalWidth = {
      icon: 'assets/svg/card_icons/total-withd.svg',
      acct: 1500,
      currency: true,
      balanceLabel: 'Total Withdrawn',
  }

  summaryIcon = 'assets/svg/summarize.svg';
  tracker = 'assets/svg/donot.svg';

  activitySummaryData = [
    {
      icon: 'assets/svg/card_icons/credit_score1.svg',
      acct: '55.0',
      label: 'CashTokens',
    },
    {
      icon: 'assets/svg/card_icons/credit_scoreactivity-card-icon2.svg',
      acct: '100',
      label: 'Instant Cashback',
    },
    {
      icon: 'assets/svg/card_icons/credit_score3.svg',
      acct: '55.0',
      label: 'CashTokens',
    },
    {
      icon: 'assets/svg/card_icons/credit_score4.svg',
      acct: '100',
      label: 'Instant Cashback',
    },
  ];
  eyeIcon: string = 'assets/svg/visibility.svg';

  personData: Transaction[] = [
    {
      id:1,
      date: '2024-01-17',
      reference: '183726096',
      customer: '08160835244',
      quantity: '10',
      status: 'Completed',
    },
    {
      id:2,
      date: '2024-01-17',
      reference: '183726096',
      customer: '08160835244',
      quantity: '11',
      status: 'Pending',
    },
    {
      id:3,
      date: '2024-01-17',
      reference: '183726096',
      customer: '08160835244',
      quantity: '13',
      status: 'Failed',
    },
    {
      id:4,
      date: '2024-01-17',
      reference: '183726096',
      customer: '08160835244',
      quantity: '13',
      status: 'Completed',
    },
  ];

  headers: TableHeaders = {
    headers: [
      { header: 'Date', dataField: 'date' },
      { header: 'Reference', dataField: 'reference' },
      { header: 'Customer', dataField: 'customer' },
      { header: 'Quantity Received', dataField: 'quantity' },
      { header: 'Status', dataField: 'status' },
    ],
  };

  ngOnInit() {
    this.selectedValue = 'today';
    this.store.select(getCurrentCountry).subscribe((data: CountryProp) => {
      console.log({data})
    });
  }
 


  getIconBackgroundColor(index: number): string {
    switch (index) {
      case 0:
        return 'linear-gradient(201deg, #C0FFA3 45.09%, #D4FCFF 86.04%);';
      case 1:
        return '#FFA3CF';
      case 2:
        return '#C0FFA3';
      case 3:
        return '#AAA3FF';
      default:
        return '#FFFFFF';
    }
  }

}
