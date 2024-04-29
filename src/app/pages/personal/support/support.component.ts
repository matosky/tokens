import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectOptions } from '../../../shared/components/common/select-dropdown/select-dropdown.component';
interface CardData {
  id: number;
  icon: string;
  title: string;
}

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.less',
})
export class SupportComponent implements OnInit {
  @Output() cardClicked = new EventEmitter<void>();
  currentTab: number = 1;
  checked = false;

  // is;
  // isEmailSectionVisible = false;
  // isRequestSectionVisible = false;
  optionsArray: SelectOptions[] = [
    { label: 'Can not access my account', value: 'Can not access my account' },
    {
      label: 'Can not view my wallet balance',
      value: 'Can not view my wallet balance',
    },
    { label: 'How can i fund my account', value: 'How can i fund my account' },
  ];

  cardData: CardData[] = [
    {
      id: 1,
      icon: 'assets/svg/card_icons/Group 1699.svg',
      title: 'Live Chat',
    },
    {
      id: 2,
      icon: 'assets/svg/card_icons/envelope.svg',
      title: 'Email us',
    },
    {
      id: 3,
      icon: 'assets/svg/card_icons/phone_android.svg',
      title: 'Request a call',
    },
  ];

  onClickCard(id: number) {
    this.cardClicked.emit();
    this.currentTab = id;
  }

  activateBtn(btnId: number): void {
    // Activate the corresponding button based on btnId
    this.currentTab = btnId;
  }

  ngOnInit(): void {}
}
