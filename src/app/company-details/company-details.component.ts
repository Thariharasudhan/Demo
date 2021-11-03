import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  form: FormGroup;
  constructor( public fb: FormBuilder ,private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      companyName: ['', [Validators.required] ],
      Emailid:['', [Validators.required]],
      JobTitle:['', [Validators.required] ],
      Experience:['', [Validators.required] ],
    });
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        console.log(params);
      }
    );
  }


  onSubmit(){
    let companyDetails = {
      "companyName": this.form.controls['companyName'].value,
      "Emailid": this.form.controls['Emailid'].value,
      "JobTitle": this.form.controls['JobTitle'].value,
      "Experience": this.form.controls['Experience'].value,
    }
    if(!this.form.invalid){
      console.log('companyDetails',companyDetails);
      localStorage.setItem('companyDetails', JSON.stringify(companyDetails));
      this.router.navigate(['/otp'],{ queryParams: { detailVerify: 2 } });
    }
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
