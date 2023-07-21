import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  operacoes: string = '/x-+';
  digitadas: string = '';
  operacaoSelecionada: string = '';
  primeiroNumero: string = '';
  segundoNumero: string = '';
  resultados: Number[] = [];

  getValueOperations(event: any) {
    const valor = String(event.target.value);

    // Impede que operações venham antes que números
    if (this.operacoes.indexOf(valor) >= 0 && !this.digitadas) {
      return;
    }

    // Impede que o usuário digite operação duas vezes
    if (this.operacoes.indexOf(valor) >= 0 && this.hasOperacao()) {
      return;
    }

    this.operacaoSelecionada = valor;
    this.digitadas += valor;
  }

  getValueNumbers(event: any) {
    const valor = String(event.target.value);
    
    this.digitadas += valor;
  }

  doOperation() {
    let firstNumber, secondNumber, numeros = this.digitadas.split(this.operacaoSelecionada);

    if (numeros.length !== 2) {
      return;
    }

    firstNumber = numeros[0];
    secondNumber = numeros[1];

    switch (this.operacaoSelecionada) {
      case '+':
        let soma = Number(firstNumber) + Number(secondNumber);
        this.resultados.push(soma);
        break;
      
      case '-':
        let subtracao = Number(firstNumber) - Number(secondNumber);
        this.resultados.push(subtracao);
        break;

      case 'x':
        let multiplicacao = Number(firstNumber) * Number(secondNumber);
        this.resultados.push(multiplicacao);
        break;

      case '/':
        let divisao = Number(firstNumber) / Number(secondNumber);
        this.resultados.push(divisao);
        break;
    
      default:
        break;
    }

    this.digitadas = '';
    return;
  }

  hasOperacao() {
    for (let i = 0; i < this.operacoes.length; i++) {
      if (this.digitadas.indexOf(this.operacoes[i]) >= 0) {
        return true;
      }      
    }

    return false;
  }
}
