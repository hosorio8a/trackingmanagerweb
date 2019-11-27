import { Routes } from '@angular/router';
import {AlertsComponent} from '../../pages/forex/alerts/alerts.component';

export const HOME_ROUTES: Routes = [
  { path: 'forex/alerts', component: AlertsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'forex/alerts'}]
