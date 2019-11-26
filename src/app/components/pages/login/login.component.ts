import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    Swal.fire('Wait', 'Sending informacion...', 'info');
    Swal.showLoading();

    if (!this.form.valid) {
      Swal.fire('Error', 'Email or Password not valid', 'error');
    }
    else {
      console.log("OK");
    }
  }

  ngOnInit() {
  }

}
