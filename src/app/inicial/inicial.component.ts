import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent {

  constructor(private router: Router) {}

  onClick() {
    // Redireciona para a página de destino
    this.router.navigate(['/Principal']);
  }
}
