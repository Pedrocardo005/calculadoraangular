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

  // Posso criar um array de string que irá conter os resultados

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

    if (valor === "=") {
      // Percorrer digitadas até parar em uma operação
      // Converter aqueles caracteres para número de fato
      // Realizar a operação daqueles números
      // Penso em realizar com uma função recursiva as operações 
    }

    if (valor === "=" || valor === ".") {
      return;
    }
    
    this.digitadas += valor;
  }
}
