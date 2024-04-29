import { Component } from '@angular/core';

export type User = {
  label:string;
  value: string;
}
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.less'
})
export class ProfileDetailsComponent {
  user: User[] = [
    {label: "Fisrt Name", value: "David"},
    {label: "Last Name", value: "Ogale"},
    {label: "Email Name", value: "David@yahooboy.com"},
    {label: "Gender Name", value: "M"},
    {label: "Phone Number", value: "08160835244"},
  ]
}
