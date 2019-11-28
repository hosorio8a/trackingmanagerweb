import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {ForexService} from '../../../services/forex.service';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  items = [];
  itemsMap = new Map();

  constructor(private fs: ForexService, private as: AuthService) {
    const email = this.as.getCurrentUser().email;
    this.fs.getAlerts(email).subscribe(actions => {
        actions.forEach(action => {
          const item: any = action.payload.val();
          item.id = action.key;
          this.itemsMap.set(action.key, item);
          this.items = Array.from( this.itemsMap.values());
        });
      });
  }

  ngOnInit() {
  }

}
