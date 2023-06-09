import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.api;

  constructor(private http:HttpClient) { }

  registerUser(form:any){

    let request;

    return this.http.post(this.url + '/users/createO', form);

  }

  loginUser(form:any){
    
    let request;

    return this.http.post(this.url+'/users/login', form);

  }

  recoverPass(form:any){
    
    let request;

    return this.http.post(this.url+'/users/forgotpass', form);

  }
}
