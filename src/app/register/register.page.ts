import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class RegisterPage implements OnInit {

  onRegisterForm!: FormGroup;

  constructor(private fromBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    
    this.onRegisterForm = this.fromBuilder.group({
      'name':["", Validators.compose([
        Validators.required
      ])],
      'lastnamep':["", Validators.compose([
        Validators.required
      ])],
      'lastnamem':["", Validators.compose([
        Validators.required
      ])],
      'age':["", Validators.compose([
        Validators.required
      ])],
      'gender':["", Validators.compose([
        Validators.required
      ])],
      'phone':["", Validators.compose([
        Validators.required
      ])],
      'refer':["", Validators.compose([
        Validators.required
      ])],
      'ocupation':["", Validators.compose([
        Validators.required
      ])],
      'email':["", Validators.compose([
        Validators.required
      ])],
      'password':["", Validators.compose([
        Validators.required
      ])],
      'confirm':["", Validators.compose([
        Validators.required
      ])],
      'direction':["", Validators.compose([
        Validators.required
      ])],
      'city':["", Validators.compose([
        Validators.required
      ])],
      'district':["", Validators.compose([
        Validators.required
      ])],
      'postalcode':["", Validators.compose([
        Validators.required
      ])],
    });
    
  }

  saveUser(){
    this.userService.registerUser(this.onRegisterForm.value).subscribe((data:any) => {
      console.log(data);
    });
  }

}
