import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

const routes: Routes =[
  {path: '', component: InicialComponent},
  {path: 'Principal', component: TelaPrincipalComponent} /*simplifica o caminho para a tela */
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
