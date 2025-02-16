import { Routes } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ReadersComponent} from './components/readers/readers.component';
import {SettingComponent} from './components/setting/setting.component';
import {ProductsComponent} from './components/products/products.component';
import {TraceProductsComponent} from './components/trace-products/trace-products.component';
import {ClearApiUrlComponent} from './shared/clear-api-url/clear-api-url.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
    data: {
      place: 'sidebar',
      roles: ['user', 'admin'],
    },
  },
  {
    path: 'readers',
    title: 'Readers',
    component: ReadersComponent,
    data: {
      place: 'sidebar',
      roles: ['user', 'admin'],
    },
  },
  {
    path: 'products',
    title: 'products',
    component: ProductsComponent,
    data: {
      place: 'sidebar',
      roles: ['user', 'admin'],
    },
  },
  {
    path: 'traceProducts',
    title: 'Trace Products',
    component: TraceProductsComponent,
    data: {
      place: 'sidebar',
      roles: ['user', 'admin'],
    },
  },
  {
    path: 'settings',
    title: 'Settings',
    component: SettingComponent,
    data: {
      place: 'sidebar',
      roles: ['user', 'admin'],
    },
  },
  { path: 'clear-api-url',
    component: ClearApiUrlComponent },
];
