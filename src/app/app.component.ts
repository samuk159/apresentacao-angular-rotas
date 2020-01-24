import { AuthService } from './services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apresentacao-angular-rotas';
  mostrarMenu = false;

  constructor(
    private authService: AuthService
  ) {

  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(mostrar => {
      this.mostrarMenu = mostrar;
    });
  }
}
