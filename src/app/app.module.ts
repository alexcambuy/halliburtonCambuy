import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { FuncionarioService } from './pages/shared/funcionario.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
    {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'cadastro',
      component: CadastroComponent
  },
  {
    path: 'listagem',
    component: ListagemComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ FuncionarioService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
