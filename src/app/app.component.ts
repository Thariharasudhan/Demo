import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';
  personalVerify = true;
  detailVerify = true;
  otpVerify = true;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params.personalVerify == 1) {
        this.personalVerify = false;
      } else if (params.detailVerify == 2) {
        this.detailVerify = false;
      }else if (params.otpVerify == 3) {
        this.otpVerify = false;
      }
    }
    );
  }
}
