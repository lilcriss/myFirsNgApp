import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propriété title qui ressemble à une variable
  title = 'This is my title from TypeScript';
  nb=0

  //méthode alert() qui ressemble à une fonction
  alert(){

    //on peut déclarer des consts et des vars dans les méthodes
  const message = 'This is a message';

  //on peut utiliser tous les outils de Js dans
  // les méthodes
  console.log(message);

  this.nb = this.nb +1;

  console.log('You\'ve clicked :',this.nb +'times')

  alert(message);

  }
}
