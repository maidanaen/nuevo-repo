import { Component } from '@angular/core'; // Importa el decorador Component de Angular
import { Tarea, ITarea } from '../tarea.model'; // Importa la clase Tarea y la interfaz ITarea
import { TareaComponent } from '../tarea/tarea.component'; // Importa el componente Tarea
import { AgregartareasComponent } from '../agregartareas/agregartareas.component'; // Importa el componente Agregartareas
import { CommonModule } from '@angular/common'; // Importa CommonModule para utilizar directivas comunes como *ngIf, *ngFor, etc.

// Define el componente que maneja la lista de tareas
@Component({
  selector: 'app-listatareas', // Selector que se utilizará para insertar este componente en la plantilla
  standalone: true, // Indica que este componente es autónomo
  imports: [TareaComponent, AgregartareasComponent, CommonModule], // Importa otros componentes y módulos necesarios
  templateUrl: './listatareas.component.html', // Define la ubicación de la plantilla HTML del componente
  styleUrls: ['./listatareas.component.scss'] // Define la ubicación de los estilos SCSS asociados a este componente
})
export class ListatareasComponent {
  tareas: ITarea[] = []; // Inicializa un arreglo de tareas utilizando la interfaz ITarea
  contadorId: number = 1; // Contador inicial para los IDs

  // Método para agregar una tarea
  agregarTarea(nombre: string) {
    if (nombre.trim()) {
      const nuevaTarea = new Tarea(this.contadorId, nombre, false);
      this.tareas.push(nuevaTarea);
      this.contadorId++; // Incrementa el contador después de agregar la tarea
    }
  }
  // Método para eliminar una tarea por su ID
  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(t => t.id !== id); // Filtra el arreglo de tareas para eliminar la tarea con el ID especificado
  }

  // Método para completar o descompletar una tarea
  completarTarea(id: number): void {
    const tarea = this.tareas.find(t => t.id === id); // Busca la tarea por su ID
    if (tarea) {
      tarea.completada = !tarea.completada; // Cambia el estado de completada de la tarea
    }
  }
}
