import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  form: FormGroup;
  GenderOptions: any[];
  StateOption: any[];
  countryOption: any[];
  disabled = false;

  constructor(public fb: FormBuilder, private router: Router, private route: ActivatedRoute) {


    this.form = this.fb.group({
      fullName: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      Phone: ['', [Validators.required]],
      country: [''],
      state: ['']
    });

    this.GenderOptions = [
      { name: 'Male', value: 'Male' },
      { name: 'Female', value: 'Female' },
      { name: 'Other', value: 'Other' }
    ];
    this.StateOption = [
      { name: 'Tamil Nadu', code: 'Tamil Nadu' },
      { name: 'Kerala', code: 'Kerala' }
    ];
    this.countryOption = [
      { name: 'India', code: 'India' },
      { name: 'Iran', code: 'Iran' }

    ];
  }

  ngOnInit(): void { }

  validation() {
    if (!this.form.invalid) {
      this.disabled = true;
    }
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onSubmit() {
    let personalDetails = {
      "fullName": this.form.controls['fullName'].value,
      "Gender": this.form.controls['Gender'].value,
      "country": this.form.controls['country'].value.name,
      "state": this.form.controls['state'].value.name,
      "Phone": this.form.controls['Phone'].value,
    }
    if (!this.form.invalid) {
      setTimeout(() =>{
        return this.disabled = false;
      },3000);
      console.log('personalDetails', personalDetails);
      localStorage.setItem('PersonalDetails', JSON.stringify(personalDetails));
      this.router.navigate(['/company'], { queryParams: { personalVerify: 1} });
    }

  }


}
