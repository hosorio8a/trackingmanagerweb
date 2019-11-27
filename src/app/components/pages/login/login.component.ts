import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  credential = {
    email:  '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.form.setValue(this.credential);
  }

  onSubmit() {
    if (!this.form.valid) {
      Swal.fire('Error', 'Email or Password not valid', 'error');
    } else {
      this.credential = this.form.getRawValue();
      this.authService.singIn(this.credential)
        .subscribe((resp: any) => {
          localStorage.setItem('authorization', resp.headers.get('authorization'));
          localStorage.setItem('scuser', resp.headers.get('scuser'));
          this.router.navigateByUrl('/home');
        }, error => {
          Swal.fire('Error', 'Email or Password not valid', 'error');
        });
    }
  }

  ngOnInit() {
  }
}
