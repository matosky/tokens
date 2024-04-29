import { Component } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrl: './profile-dropdown.component.less'
})
export class ProfileDropdownComponent {
  dropdownIcon: string = 'assets/svg/header/arrow_drop_down.svg';
  userIcon: string = 'assets/svg/header/user_icon.svg';
  constructor(private notification: NotificationService){}

  logOut():void{
    this.notification.showInfo("You logged out successfully", "log out")
  }


}
