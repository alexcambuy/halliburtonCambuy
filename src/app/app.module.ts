import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { EmbarqueComponent } from './pages/embarque/embarque.component';

const appRoutes: Routes = [
  //home
  {
    path: '',
    component: HomeComponent
},
  {
    path: 'home',
    component: HomeComponent
},
//Cadastro
{
    path: 'cadastro',
    component: CadastroComponent
},
//Listagem
{
  path: 'listagem',
  component: ListagemComponent
},
//Cadastro
{
  path: 'embarque',
  component: EmbarqueComponent
}   
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    HomeComponent,
    ListagemComponent,
    EmbarqueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
