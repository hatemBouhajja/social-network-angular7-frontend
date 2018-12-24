import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class LoginComponent implements OnInit {


  password: string;
  inputType = 'password';
  showDetails: boolean;
  viewSource: boolean;
  color = '';
  gender = true;
  startDate = new Date(1990, 0, 1);
  constructor() { }


  ngOnInit() {
  }

  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }
  onSlideToggleChange() {
    this.inputType = this.inputType === 'text' ? 'password' : 'text';
  }

}
