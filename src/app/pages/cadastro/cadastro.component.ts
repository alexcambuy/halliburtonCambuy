import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../shared/funcionario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Funcionario } from '../shared/funcionario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  funcionarioForm: FormGroup;
  funcionario: Funcionario = new Funcionario();

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.configurarFormulario();
  }

  salvar(): void {
    const funcionario = Object.assign({}, this.funcionario);
    this.funcionarioService.add(funcionario);
    this.funcionarioForm.reset();
    console.log('Funcionário salvo');
  }

  private configurarFormulario(): void {
    this.funcionarioForm = new FormGroup({
      'nome': new FormControl(null, Validators.requiredTrue),
      'funcao': new FormControl(null, Validators.requiredTrue),
      'empresa': new FormControl(null, Validators.requiredTrue),
    });
  }
}
