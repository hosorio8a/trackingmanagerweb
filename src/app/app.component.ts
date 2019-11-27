import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trackingmanagerweb';

  constructor(private authService: AuthService, private router: Router) {
    this.authService.validateAuth()
      .subscribe(data => {}, error => {
        this.authService.logout();
        this.router.navigateByUrl('/login');
        return false;
      });
  }
}
