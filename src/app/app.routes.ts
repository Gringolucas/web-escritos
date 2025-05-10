import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TextosComponent } from './pages/textos/textos.component';
import { NuevoEscritoComponent } from './pages/nuevo-escrito/nuevo-escrito.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'textos', 
    component: TextosComponent },
  { path: 'nuevo', 
    component: NuevoEscritoComponent },

];

