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

  getValue(evento: any) {
    const valor = String(evento.target.value);
    let len = this.digitadas.length;

    // Impede que operações venham antes que números
    if (this.operacoes.indexOf(valor) >= 0 && !this.digitadas) {
      return;
    }

    // Impede que o usuário digite operação seguida de operação
    if (len && 
        this.operacoes.indexOf(this.digitadas[len-1]) >= 0 &&
        this.operacoes.indexOf(valor) >= 0) {
      return;
    }

    if (this.operacoes.indexOf(valor) >= 0 && this.hasOperacao()) {
      return;
    }

    // Divide o texto em número e operação
    if (this.operacoes.indexOf(valor) >= 0) {
          
        this.operacaoSelecionada = valor;
        this.primeiroNumero = this.digitadas;
    }

    if (valor === "=") {
      let numeros = this.digitadas.split(this.operacaoSelecionada);

      if (numeros.length !== 2) {
        return;
      }

      this.segundoNumero = numeros[1];

      switch (this.operacaoSelecionada) {
        case '+':
          let soma = Number(this.primeiroNumero) + Number(this.segundoNumero);
          this.resultados.push(soma);
          break;
        
        case '-':
          let subtracao = Number(this.primeiroNumero) - Number(this.segundoNumero);
          this.resultados.push(subtracao);
          break;

        case 'x':
          let multiplicacao = Number(this.primeiroNumero) * Number(this.segundoNumero);
          this.resultados.push(multiplicacao);
          break;

        case '/':
          let divisao = Number(this.primeiroNumero) / Number(this.segundoNumero);
          this.resultados.push(divisao);
          break;
      
        default:
          break;
      }

      this.digitadas = '';
      return;
    }

    if (valor === ".") {
      return;
    }
    
    this.digitadas += valor;
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
