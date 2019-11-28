import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ForexService {
  urlBackend = 'http://localhost:8090/trackingmanager/api/v1';
  urlFirebase = 'https://loginapp-e8484.firebaseio.com';
  apiAlerts = this.urlBackend  + '/alerts';
  headers = {
    authorization: localStorage.getItem('authorization')
  };

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  getAlerts(owner: string) {
    const itemsRef = this.db.list('alerts', ref => ref.orderByChild('owner').equalTo(owner));
    return itemsRef.snapshotChanges();
  }
}
