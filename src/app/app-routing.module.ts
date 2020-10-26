import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'users', component: UsuariosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'users' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
