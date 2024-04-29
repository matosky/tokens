import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HeaderComponent } from './components/ui/header/header.component';
import { SidebarComponent } from './components/ui/sidebar/sidebar.component';
// Pipes
import { RandomPipe } from './pipes/random.pipe';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { InputComponent } from './components/common/input/input.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ToggleSwitchComponent } from './components/common/toggle-switch/toggle-switch.component';
import { CardComponent } from './components/common/card/card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PrimaryButtonComponent } from './components/common/button/primary/primary-button.component';
import { TableComponent } from './components/common/table/table.component';
import { FilterComponent } from './components/common/filter/filter.component';
import { SearchInputComponent } from './components/common/search-input/search-input.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SelectDropdownComponent } from './components/common/select-dropdown/select-dropdown.component';

// Services
import { SessionStorageService } from './services/auth/session-storage.service';
import { RouteGuard } from './services/auth/routeGuard.service';
import { AdminOnlyService } from './services/auth/adminOnlyGuard.service';
import { AuthService } from './services/auth/auth.service';
import { NotificationService } from './services/notification.service';
import { ServerInteractorService } from './services/server-interactor.service';
import { LocalService } from './services/local.service';
import { DatePickerComponent } from './components/common/date-picker/date-picker.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionsService } from './services/transaction.service';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AccordionComponent } from './components/common/accordion/accordion.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { SupportFooterComponent } from './components/common/support-footer/support-footer.component';
import { TextareaComponent } from './components/common/textarea/textarea.component';

import { OverviewIconComponent } from './components/ui/sidebar/icons/overview-icon/overview-icon.component';
import { WalletIconComponent } from './components/ui/sidebar/icons/wallet-icon/wallet-icon.component';
import { WinIconComponent } from './components/ui/sidebar/icons/win-icon/win-icon.component';
import { GiftIconComponent } from './components/ui/sidebar/icons/gift-icon/gift-icon.component';
import { ReferalIconComponent } from './components/ui/sidebar/icons/referal-icon/referal-icon.component';
import { SupportIconComponent } from './components/ui/sidebar/icons/support-icon/support-icon.component';
import { DashIconComponent } from './components/ui/sidebar/icons/dash-icon/dash-icon.component';
import { CashtokenIconComponent } from './components/ui/sidebar/icons/cashtoken-icon/cashtoken-icon.component';
import { PointIconComponent } from './components/ui/sidebar/icons/point-icon/point-icon.component';
import { SettingsIconComponent } from './components/ui/sidebar/icons/settings-icon/settings-icon.component';
import { MobileSidebarComponent } from './components/ui/sidebar/mobile-sidebar/mobile-sidebar.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { PopupModalComponent } from './components/common/popup-modal/popup-modal.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FlagsComponent } from './components/common/flags/flags.component';
import { ProfileDropdownComponent } from './components/common/profile-dropdown/profile-dropdown.component';
import { ToastrModule } from 'ngx-toastr';
import { CustomCollapseComponent } from './components/common/custom-collapse/custom-collapse.component';
import { StatusComponent } from './components/common/status/status.component';
import { AirtimeTopUpComponent } from './components/common/withdrawal-methods/airtime-top-up/airtime-top-up.component';
import { BankTransferComponent } from './components/common/withdrawal-methods/bank-transfer/bank-transfer.component';
@NgModule({
  imports: [
    CommonModule,
    NzCardModule,
    RouterModule,
    NzSwitchModule,
    NzMenuModule,
    NzIconModule,
    NzLayoutModule,
    NzButtonModule,
    NzModalModule,
    NzTableModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    NzPaginationModule,
    NzCollapseModule,
    NzDrawerModule,
    NzDropDownModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      preventDuplicates: true,
    }),
  ],
  providers: [
    SessionStorageService,
    AuthService,
    AdminOnlyService,
    RouteGuard,
    NotificationService,
    ServerInteractorService,
    LocalService,
    TransactionsService,
  ],
  declarations: [
    // components
    // pipes
    SidebarComponent,
    HeaderComponent,
    RandomPipe,
    InputComponent,
    ToggleSwitchComponent,
    CardComponent,
    PrimaryButtonComponent,
    TableComponent,
    FilterComponent,
    SearchInputComponent,
    SelectDropdownComponent,
    DatePickerComponent,
    TruncatePipe,
    CapitalizePipe,
    AccordionComponent,
    SupportFooterComponent,
    TextareaComponent,
    OverviewIconComponent,
    WalletIconComponent,
    WinIconComponent,
    GiftIconComponent,
    ReferalIconComponent,
    SupportIconComponent,
    DashIconComponent,
    CashtokenIconComponent,
    PointIconComponent,
    SettingsIconComponent,
    MobileSidebarComponent,
    PopupModalComponent,
    FlagsComponent,
    ProfileDropdownComponent,
    CustomCollapseComponent,
    StatusComponent,
    AirtimeTopUpComponent,
    BankTransferComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports: [
    CardComponent,
    PrimaryButtonComponent,
    HeaderComponent,
    TableComponent,
    SearchInputComponent,
    FilterComponent,
    SidebarComponent,
    SelectDropdownComponent,
    CommonModule,
    NzModalModule,
    RandomPipe,
    InputComponent,
    DatePickerComponent,
    NzPaginationModule,
    TruncatePipe,
    CapitalizePipe,
    AccordionComponent,
    NzCollapseModule,
    SupportFooterComponent,
    TextareaComponent,
    OverviewIconComponent,
    WalletIconComponent,
    WinIconComponent,
    GiftIconComponent,
    ReferalIconComponent,
    SupportIconComponent,
    DashIconComponent,
    CashtokenIconComponent,
    PointIconComponent,
    SettingsIconComponent,
    MobileSidebarComponent,
    NzDrawerModule,
    PopupModalComponent,
    FlagsComponent,
    ProfileDropdownComponent,
    CustomCollapseComponent,
    StatusComponent,
    AirtimeTopUpComponent,
    BankTransferComponent,
  ],
})
export class SharedModule {}
