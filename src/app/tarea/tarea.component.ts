// src/app/tarea/tarea.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule si se van a usar directivas comunes (ngIf, ngFor, etc.)
import { ITarea } from '../tarea.model'; // Importa la interfaz ITarea desde su archivo correspondiente

@Component({
  selector: 'app-tarea',
  standalone: true, // Marca el componente como autónomo
  imports: [CommonModule], // Importa CommonModule para poder usar directivas como ngIf, ngFor, etc.
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'] // Archivo de estilos para el componente
})
export class TareaComponent {
  @Input() tarea!: ITarea; // Recibe la tarea del componente padre
  @Output() eliminarTarea = new EventEmitter<number>();
  @Output() completarTarea = new EventEmitter<number>();

  eliminar(): void {
    this.eliminarTarea.emit(this.tarea.id); // Emite el id de la tarea cuando se elimina
  }

  completar(): void {
    this.completarTarea.emit(this.tarea.id); // Emite el id de la tarea cuando se completa
  }
}
