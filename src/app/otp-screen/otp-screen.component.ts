import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-otp-screen',
  templateUrl: './otp-screen.component.html',
  styleUrls: ['./otp-screen.component.css'],
  providers: [MessageService],
})
export class OtpScreenComponent implements OnInit {
  disabled = false;
  constructor(private router: Router, private route: ActivatedRoute ,public message: MessageService) { }

  ngOnInit(): void {
  }

  onOtpChange(value: any) {
    if (value.length == 5)
      this.disabled = true;
    else
      this.disabled = false;
  }
  Verify() {
    this.router.navigate(['/otp'],{ queryParams: { otpVerify: 3 } });
    this.message.add({ severity: 'success', summary: 'Success Message', detail: "register successfully" });
  }
}
