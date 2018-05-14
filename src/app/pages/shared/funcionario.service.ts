// Angular
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Funcionario } from './funcionario.model';

// Application

@Injectable()
export class FuncionarioService {

    private _funcionarios: Funcionario[] = [];

    constructor() { }

    get(index: number): Funcionario {
        const funcionario = this._funcionarios[index];
        return funcionario;
    }

    getAll(): Funcionario[] {
      return this._funcionarios;
    }

    add(funcionario: Funcionario) {
      this._funcionarios.push(funcionario);
    }

    remove(index: number) {
      this._funcionarios.splice(index, 1);
    }
}
