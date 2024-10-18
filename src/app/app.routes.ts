import { Routes } from '@angular/router';
import { CrearRecordatorioComponent } from './components/crear-recordatorio/crear-recordatorio.component';
import { AgendarCitaComponent } from './components/agendar-cita/agendar-cita.component';
import { MisRegistrosComponent } from './components/mis-registros/mis-registros.component';
import { PedirAyudaComponent } from './components/pedir-ayuda/pedir-ayuda.component';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'crear-recordatorio', component: CrearRecordatorioComponent },
  { path: 'agendar-cita', component: AgendarCitaComponent },
  { path: 'mis-registros', component: MisRegistrosComponent },
  { path: 'pedir-ayuda', component: PedirAyudaComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a 'crear-recordatorio' por defecto
  { path: '**', redirectTo: '/login' } // Redirige a una ruta por defecto si no se encuentra la ruta
];

