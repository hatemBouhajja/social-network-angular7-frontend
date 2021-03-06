import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileSetupComponent } from './profile-setup/profile-setup.component';
import { DialogOverviewProfile } from './profile-setup/profile-setup.component';
import { DialogOverviewHome } from './home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { ProfileViewComponent } from './profile-view/profile-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileSetupComponent,
    DialogOverviewProfile,
    DialogOverviewHome,
    HomeComponent,
    ProfileViewComponent
  ],
  entryComponents: [
    DialogOverviewProfile,
    DialogOverviewHome
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatPasswordStrengthModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    MatRadioModule,
    MatTabsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatDividerModule,
    MatDialogModule,
    SweetAlert2Module.forRoot(),
    MatSelectModule,
    MatAutocompleteModule,
    MatBadgeModule
  ],

  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]

})
export class AppModule { }
