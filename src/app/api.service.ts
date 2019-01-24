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
  getUserByIdURL = 'http://localhost:8080/user/get/id/';
  profileByIdURL = 'http://localhost:8080/profile/get/id/';
  createPostURL = 'http://localhost:8080/post/create';
  addCommentURL = 'http://localhost:8080/post/comment/add/';
  getPostByIdURL = 'http://localhost:8080/post/get/id/';
  getAllpostsByUserIdURL = 'http://localhost:8080/post/get/all/user/id/';


  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get(this.getAllUsersURL);
  }

  getUserByidApi(id) {
    return this.httpClient.get(this.getUserByIdURL + id);
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

  createPostApi(newPost) {
    return this.httpClient.post(this.createPostURL, newPost, { responseType: 'text' });
  }

  addCommentApi(newComment) {
    return this.httpClient.post(this.addCommentURL, newComment, { responseType: 'text' });
  }

  getPostByIdApi(id) {
    return this.httpClient.get(this.getPostByIdURL + id);
  }

  getAllPostsByUserIdApi(id) {
    return this.httpClient.get(this.getAllpostsByUserIdURL + id);
  }

}
