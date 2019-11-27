import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name: '';
  lastName: '';

  constructor(private authService: AuthService, private router: Router) {
    const user = this.authService.getCurrentUser();
    this.name = user.name;
    this.lastName = user.lastname;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }
}
