import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getAllUsersURL = 'http://localhost:8080/user/get/all';
  registerUserURL = 'http://localhost:8080/user/reg';
  loginUserURL = 'http://localhost:8080/user/login';
  UserUpdateURL = 'http://localhost:8080/user/update';
  ProfileUpdateURL = 'http://localhost:8080/profile/update';
  userByIdURL = 'http://localhost:8080/user/get/id/';
  profileByIdURL = 'http://localhost:8080/profile/get/id/';


  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get(this.getAllUsersURL);
  }

  getUserByidApi(id) {
    return this.httpClient.get(this.userByIdURL + id);
  }

  getProfileByidApi(id) {
    return this.httpClient.get(this.profileByIdURL + id);
  }

  registerApi(user) {
    return this.httpClient.post(this.registerUserURL, user, { responseType: 'text' });
  }

  loginApi(loginCredentials) {
    return this.httpClient.post(this.loginUserURL, loginCredentials, { responseType: 'json' });
  }

  updateUserApi(newUser) {
    return this.httpClient.put(this.UserUpdateURL, newUser, { responseType: 'text' });
  }

  updateProfileApi(newProfile) {
    return this.httpClient.put(this.ProfileUpdateURL, newProfile, { responseType: 'text' });
  }

}
