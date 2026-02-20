import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

const DARK_KEY = 'app-dark-mode';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    const darkMode = localStorage.getItem(DARK_KEY) === 'true';
    setTimeout(() => {
      const app = document.querySelector('ion-app');
      if (app) app.classList.toggle('ion-palette-dark', darkMode);
    }, 0);
  }
}
