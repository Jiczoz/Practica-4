import { Routes } from '@angular/router';
import { Nosotros } from './nosotros/nosotros';
import { Servicios } from './servicios/servicios';

export const routes: Routes = [
  { path: 'nosotros', component: Nosotros },
  { path: 'servicios', component: Servicios },
  { path: '', redirectTo: 'nosotros', pathMatch: 'full' } 
];