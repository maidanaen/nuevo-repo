import { Component } from '@angular/core'; // Importa el decorador Component de Angular
import { ListatareasComponent } from './listatareas/listatareas.component'; // Importa el componente Listatareas
import { FormsModule } from '@angular/forms'; // Importa FormsModule para manejar formularios

// Define el componente principal de la aplicación
@Component({
  selector: 'app-root', // Selector que se utilizará para insertar este componente en la plantilla
  standalone: true, // Indica que este componente es autónomo y no necesita ser declarado en un NgModule
  imports: [ListatareasComponent, FormsModule], // Importa otros componentes y módulos necesarios
  template: `<app-listatareas></app-listatareas>`, // Define la plantilla del componente, que incluye el componente Listatareas
  styleUrls: ['./app.component.scss'] // Define los estilos asociados a este componente
})
export class AppComponent {
  // Método que parece no estar implementado correctamente
  title(title: any) {
    throw new Error('Method not implemented.'); // Lanza un error indicando que el método no está implementado
  }
}
