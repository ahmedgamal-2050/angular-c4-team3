import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
// Pipes
import { TranslocoPipe } from '@jsverse/transloco';


@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css'],
  imports:[TranslocoPipe,
    ReactiveFormsModule,
    FormsModule,
  ],
  standalone: true,
})
export class OtpPageComponent  implements OnInit {
    otpForm!: FormGroup;

  ngOnInit() {
    this.otpForm = new FormGroup({
      digit1: new FormControl('', [Validators.required]),
      digit2: new FormControl('', [Validators.required]),
      digit3: new FormControl('', [Validators.required]),
      digit4: new FormControl('', [Validators.required]),
      digit5: new FormControl('', [Validators.required]),
      digit6: new FormControl('', [Validators.required]),
    });
  }

    // Move focus automatically to next input
  moveFocus(event: any, nextInputName?: string) {
    const input = event.target;
    if (input.value.length === 1 && nextInputName) {
      const nextInput = document.querySelector(`input[formcontrolname="${nextInputName}"]`) as HTMLElement;
      nextInput?.focus();
    }
  }

    // Submit OTP
  verifyOtp() {
    if (this.otpForm.invalid) {
      this.otpForm.markAllAsTouched();
      return;
    }

    
    const otp = Object.values(this.otpForm.value).join('');
    console.log('OTP entered:', otp);

    // هنا ممكن تبعت OTP للـ backend للتحقق
  }

  // Resend OTP
  resendOtp() {
    console.log('Resend OTP clicked');
    // هنا تبعت طلب للـ backend لإرسال OTP جديد
  }
}
