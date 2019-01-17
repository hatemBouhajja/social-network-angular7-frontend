import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getAllUsersURL = 'http://localhost:8080/user/get/all';
  registerUserURL = 'http://localhost:8080/user/reg/9995';


  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get(this.getAllUsersURL);
  }
  postData(user) {
    return this.httpClient.post(this.registerUserURL, user, { responseType: 'text' });
  }

}
