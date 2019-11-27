import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  hide = true;

  user = {
    name: '',
    lastname: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', []),
      email: new FormControl('', [Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required])
    });

    this.form.setValue(this.user);
  }

  onSubmit() {
    if (this.form.valid) {
      Swal.fire('Wait', 'Sending informacion...', 'info');
      Swal.showLoading();
      this.user = this.form.getRawValue();
      this.authService.postUser(this.user)
        .subscribe((data: any) => {
          Swal.fire('Ok', 'Email registered', 'info');
          this.router.navigateByUrl('/login');
        }, error => {
          Swal.fire('Error', error.error, 'error');
        });
    }
  }

  ngOnInit() {
  }

}
