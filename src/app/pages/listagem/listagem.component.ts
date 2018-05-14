import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../shared/funcionario.service';
import { Funcionario } from '../shared/funcionario.model';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.getAll();
  }

  desembarcar(index: number) {
    this.funcionarioService.remove(index);
  }

}
