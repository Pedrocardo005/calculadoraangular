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
    var nada = '';
    this.digitadas += valor;
  }
}
