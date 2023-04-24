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
      'email':["", Validators.compose([
        Validators.required
      ])],
      'password':["", Validators.compose([
        Validators.required
      ])],
      'confirm':["", Validators.compose([
        Validators.required
      ])]
    });
    
  }

  saveUser(){
    this.userService.registerUser(this.onRegisterForm.value).subscribe((data:any) => {
      console.log(data);
    });
  }

}
