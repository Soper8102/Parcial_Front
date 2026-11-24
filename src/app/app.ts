import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './Components/menu/menu';
import { MateriasComponent } from './Views/materias/materias';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuComponent, MateriasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
