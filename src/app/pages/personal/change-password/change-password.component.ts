import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.less',
})
export class ChangePasswordComponent implements OnInit {
  isCurrentPasswordVisible: boolean = false;
  isNewPasswordVisible: boolean = false;
  isConfirmPasswordVisible: boolean = false;
  isVisible = false;
  modalTitle: string = '';
  modalIcon: string = '';
  backendCurrentPassword = 'Reedwan';
  newPasswordError: string = '';
  confirmPasswordError: string = '';

  Form: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.Form = this.fb.group(
      {
        currentPassword: ['', Validators.required],
        newPassword: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      },
      { validator: this.passwordMatchValidator }
    );
  }
  showModal(img: string, content: string): void {
    this.modalTitle = content;
    this.modalIcon = img;
    this.isVisible = true;
  }
  errorShowModal(): void {
    this.isVisible = true;
  }

  
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.modalTitle = '';
    this.Form.reset();
  }

  toggleCurrentPasswordVisibilty() {
    this.isCurrentPasswordVisible = !this.isCurrentPasswordVisible;
  }

  toggleNewPasswordVisibilty() {
    this.isNewPasswordVisible = !this.isNewPasswordVisible;
  }

  toggleConfirmPasswordVisibilty() {
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword').value;
    const confirmPassword = formGroup.get('confirmPassword').value;

    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }

  checkCurrentPassword(currentPassword: string) {
    return this.backendCurrentPassword === currentPassword;
  }

  onBlur(field: string) {
    console.log("blur fired", field)
    const control = this.Form.get(field);
    if (control) {
      if (control.invalid && (control.dirty || control.touched)) {
        if (field === 'newPassword' && control.errors && control.errors['minlength']) {
          console.log("not long enouf")
          this.newPasswordError = 'Password must be at least 8 characters long.';
        } else if (field === 'confirmPassword' && control.errors && control.errors['minlength']) {
          this.confirmPasswordError = 'Password must be at least 8 characters long.';
        }
      } else {
        if (field === 'newPassword') {
          this.newPasswordError = '';
        } else if (field === 'confirmPassword') {
          this.confirmPasswordError = '';
        }
      }
    }
  }

  validateInput(value: string) {
    console.log('Input is less than 8 characters:', value);
    if (value.length < 8) {
      console.log('Input is less than 8 characters:', value);
      // Perform validation logic or show error message
    }
  }

  onSubmit() {
    this.Form.markAllAsTouched();
    const currentPassword = this.Form.get('currentPassword').value;
    const newPassword = this.Form.get('newPassword').value;
    const confirmPassword = this.Form.get('confirmPassword').value;

    if (this.Form.valid) {
      // Perform save action or show modal
      if (currentPassword !== this.backendCurrentPassword) {
        this.showModal('assets/svg/failed.svg', 'Server error');
        return;
      }

      if (newPassword === confirmPassword) {
        // Passwords match, perform save action or show success modal
        this.showModal(
          'assets/svg/check_circle.svg',
          'Password changed successfully'
        );
      }
    }
  }
}
