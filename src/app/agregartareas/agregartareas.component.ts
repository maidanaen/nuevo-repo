import { Component, EventEmitter, Output } from '@angular/core'; // Importa los decoradores y clases necesarias de Angular
import { FormsModule } from '@angular/forms'; // Importa FormsModule para trabajar con formularios

@Component({
  selector: 'app-agregartareas', // Selector del componente para su uso en templates
  standalone: true, // Indica que este componente es independiente
  imports: [FormsModule], // Agrega FormsModule para habilitar el uso de ngModel
  templateUrl: './agregartareas.component.html', // Ruta al archivo de plantilla HTML del componente
  styleUrls: ['./agregartareas.component.scss'] // Ruta al archivo de estilos SCSS del componente
})
export class AgregartareasComponent {
  titulo: string = ''; // Propiedad para almacenar el título de la nueva tarea
  @Output() nuevaTarea = new EventEmitter<string>(); // Evento que emitirá el nuevo título de tarea

  agregarTarea(): void { // Método para agregar una nueva tarea
    if (this.titulo.trim()) { // Verifica que el título no esté vacío o solo contenga espacios
      this.nuevaTarea.emit(this.titulo); // Emite el título a los componentes padres
      this.titulo = ''; // Reinicia el campo de entrada a una cadena vacía
    }
  }
}
