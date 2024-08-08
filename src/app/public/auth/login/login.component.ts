import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router, 
    private authService: AuthenticationService
  ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(response => {
        console.log(response)
        if (response) {
          const role = this.authService.getRole();
          if (role === 'Admin' || role === 'admin') {
            this.router.navigate(['/virtual/admin']);
          } else if (role === 'Student' || role === 'student') {
            this.router.navigate(['/virtual/student']);
          } else {
            this.router.navigate(['/']);
          }
        }
      });
    }
  }
  
}
