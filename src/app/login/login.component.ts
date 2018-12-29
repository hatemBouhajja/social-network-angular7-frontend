import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { ApiService } from '../api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class LoginComponent implements OnInit {

  @ViewChild('divShake') divShake: ElementRef;
  @ViewChild('divSquare') divSquare: ElementRef;

  private data: Array<object> = [];
  myForm: FormGroup;

  passwordStrength = 0;
  inputType = 'password';
  registerButtonText = "Register"
  showDetails: boolean;
  viewSource: boolean;
  color = '';
  responseError = false;
  loading = false;
  tabGroupTogglePrimary = 'primary';
  tabGroupToggleLight = 'light';
  afterSubmit = false;
  startDate = new Date(1990, 0, 1);

  gender = null;
  password: string;
  firstName = '';
  lastName = '';
  phone: number;
  email = '';
  birthday = '';

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstNameValidation: new FormControl(null, [Validators.required]),
      lastNameValidation: new FormControl(null, [Validators.required]),
      birthdayValidation: new FormControl(null, [Validators.required]),
      passwordValidation: new FormControl(null, [Validators.required]),
      phoneValidation: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      emailValidation: new FormControl(null, [Validators.required, Validators.email])
    });

    this.apiService.getData().subscribe((data: Array<Object>) => {
      this.data = data;
      console.log(this.data);
    });

  }

  onStrengthChanged(strength: number) {
    this.passwordStrength = strength;
  }
  onSlideToggleChange() {
    this.inputType = this.inputType === 'text' ? 'password' : 'text';
  }

  getUrl() {
    return "url('https://img.wallpaper.sc/desktop/images/5k/thumbnail/desktop-pc-1920x1080-thumbnail_00010.jpg')";
  }

  isFormValid() {
    if ((this.myForm.invalid) || (this.gender == null) || (this.passwordStrength < 100)) {
      return false;
    } else {
      return true;
    }
  }

  onSubmit() {
    this.afterSubmit = true;
    if (this.isFormValid()) {
      this.post();
    }
    else {
      this.divShake.nativeElement.classList.add('divShakeClass');
      setTimeout(() => {
        this.divShake.nativeElement.classList.remove('divShakeClass');
      }, 1000)
    }
  }

  post() {
    var user = {
      birhDate: moment(this.myForm.get("birthdayValidation").value).format('YYYY-MM-DD'),
      email: this.myForm.get("emailValidation").value,
      firstName: this.myForm.get("firstNameValidation").value,
      gender: this.gender,
      lastName: this.myForm.get("lastNameValidation").value,
      phone: this.myForm.get("phoneValidation").value,
      pwd: this.password
    };

    this.loading = true;
    this.registerButtonText = '';
    this.apiService.postData(user).subscribe((response) => {
      this.loading = false;
      this.registerButtonText = 'Register';
      console.log(response);
      if (response == 'Status 200') {
        console.log("reg success");
      } else {
        this.responseError = true;
      }

    }, error => {
      this.responseError = true;
      this.loading = false;
      this.registerButtonText = 'Register';
    });

  }

  onLogin() {
    this.divSquare.nativeElement.classList.add('loading');
  }

}
