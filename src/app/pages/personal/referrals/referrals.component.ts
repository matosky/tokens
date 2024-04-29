import { Component, OnInit } from '@angular/core';
interface Icons {
  icon: string;
  title: string;
  link: string;
}

interface Steps {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrl: './referrals.component.less',
})
export class ReferralsComponent implements OnInit {
  icons: Icons[] = [
    {
      icon: '../../../../assets/svg/referral/whatsapp.svg',
      title: 'Whatsapp',
      link: 'https://www.whatsapp.com/',
    },
    {
      icon: '../../../../assets/svg/referral/insta.svg',
      title: 'Instagram',
      link: 'https://www.instagram.com/',
    },
    {
      icon: '../../../../assets/svg/referral/facebook.svg',
      title: 'Facebook',
      link: 'https://www.facebook.com/',
    },
    {
      icon: '../../../../assets/svg/referral/twitter.svg',
      title: 'Twitter',
      link: 'https://www.twitter.com/',
    },
    {
      icon: '../../../../assets/svg/referral/mail.svg',
      title: 'Email',
      link: 'https://www.gmail.com/',
    },
  ];

  steps: Steps[] = [
    {
      image: '../../../../assets/svg/steps.svg',
      title: 'Step1',
      description:
        'Your friend creates an account on CashToken and adds your referral code.  Please note the referral code must be used within 30 days of it being issued.',
    },
    {
      image: '../../../../assets/svg/steps.svg',
      title: 'Step2',
      description:
        'Your friend creates an account on CashToken and adds your referral code.  Please note the referral code must be used within 30 days of it being issued.',
    },
    {
      image: '../../../../assets/svg/steps.svg',
      title: 'Step3',
      description:
        'Once your friend completes a transaction you will earn a commission on their CashToken purchases and wins.',
    },
  ];

  inputValue: string = 'https://platform.cashtokenreward.com/r/DAVE';
  showSuccessMessage = false;

  ngOnInit(): void {
    console.log(this.steps);
  }

  copyToClipboard() {
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = this.inputValue;

    // Append the input element to the body
    document.body.appendChild(tempInput);

    // Select the input text
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    this.showSuccessMessage = true;

    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 2000);

    // Alert or log a message indicating the copy operation
  }
}
