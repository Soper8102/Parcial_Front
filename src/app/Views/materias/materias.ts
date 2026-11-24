import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MateriasService } from '../../Services/materias';
import { Materia } from '../../Models/materia';
import { TableComponent } from '../../Components/table/table';

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    TableComponent
  ],
  templateUrl: './materias.html',
  styleUrl: './materias.css'
})
export class MateriasComponent implements OnInit {
  private materiasService = inject(MateriasService);

  materias = signal<Materia[]>([]);
  cargando = signal<boolean>(false);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.cargarMaterias();
  }

  cargarMaterias(): void {
    this.cargando.set(true);
    this.error.set(null);

    this.materiasService.getMaterias().subscribe({
      next: (data) => {
        this.materias.set(data);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al consultar materias:', err);
        this.error.set('No fue posible conectar con el backend (puerto 3000). Asegúrate de tener el backend corriendo.');
        this.cargando.set(false);
      }
    });
  }

  cargarDatosLocales(): void {
    this.error.set(null);
    this.cargando.set(false);
    this.materias.set([
      { id_materia: 1, nombre_materia: 'Desarrollo de Plataformas', carrera: 'Ingenieria de Sistemas' },
      { id_materia: 2, nombre_materia: 'Ingenieria sin Fronteras', carrera: 'Ingenieria de Sistemas' },
      { id_materia: 3, nombre_materia: 'Arquitectura de Datos', carrera: 'Ingenieria de Sistemas' },
      { id_materia: 4, nombre_materia: 'Sistemas Distribuidos', carrera: 'Ingenieria de Sistemas' },
      { id_materia: 5, nombre_materia: 'Pratica Responsabilidad Social', carrera: 'Ingenieria de Sistemas' },
      { id_materia: 6, nombre_materia: 'Ecuaciones Diferenciales', carrera: 'Ingenieria de Sistemas' }
    ]);
  }
}
