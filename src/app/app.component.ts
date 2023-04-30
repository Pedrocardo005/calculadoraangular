import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  // Posso criar um array de string que irá conter os resultados

  getValue(evento: any) {
    console.log(evento.target.value);
    
  }
}
