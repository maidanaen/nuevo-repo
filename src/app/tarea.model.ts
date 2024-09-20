// Definición de la interfaz ITarea que establece el "contrato" para los objetos que representan tareas.
// Cualquier objeto que implemente esta interfaz debe tener las siguientes propiedades:
export interface ITarea {
    id: number;        // Un identificador único para la tarea, de tipo numérico.
    titulo: string;    // El título o nombre de la tarea, de tipo string.
    completada: boolean; // Indica si la tarea está completada (true) o no (false).
  }
  
  // Definición de la clase Tarea que implementa la interfaz ITarea.
  // Esto significa que la clase Tarea debe cumplir con las propiedades y tipos definidos en ITarea.
  export class Tarea implements ITarea {
    
    // El constructor de la clase Tarea inicializa las propiedades de la tarea.
    // Se definen como públicas para que sean accesibles directamente desde fuera de la clase.
    // El parámetro 'completada' tiene un valor predeterminado de 'false', indicando que la tarea no está completada al crearla.
    constructor(
      public id: number,               // Identificador único de la tarea.
      public titulo: string,           // Título o descripción de la tarea.
      public completada: boolean = false // Estado de la tarea, false indica que no está completada por defecto.
    ) {}
  }
  