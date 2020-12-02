import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MedicoComponent } from './medico/medico.component';
import { SecretariaComponent } from './secretaria/secretaria.component';
import { TesteComponent } from './teste/teste.component';

const routes: Routes = [
  { path: 'app-login', component: LoginComponent },
  { path: 'app-medico', component: MedicoComponent },
  { path: 'app-secretaria', component: SecretariaComponent },
  { path: 'app-teste', component: TesteComponent },
  { path: '**', redirectTo: '/app-login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
