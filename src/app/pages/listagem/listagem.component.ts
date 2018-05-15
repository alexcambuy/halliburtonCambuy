import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../shared/funcionario.service';
import { Funcionario } from '../shared/funcionario.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  DataEmbarqueForm: FormGroup;
  DataDesembarqueForm: FormGroup;
  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.getAll();
    this.DataEmbarqueForm = new FormGroup({
      dataEmbarque: new FormControl(),
      dataDesembarque: new FormControl()
   });
  }

  excluir(index: number) {
    this.funcionarioService.remove(index);
  }

}
