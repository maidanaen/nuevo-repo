import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importa las herramientas necesarias para pruebas en Angular
import { TareaComponent } from './tarea.component'; // Importa el componente Tarea que se va a probar

// Describe el conjunto de pruebas para TareaComponent
describe('TareaComponent', () => {
  let component: TareaComponent; // Declara una variable para el componente a probar
  let fixture: ComponentFixture<TareaComponent>; // Declara una variable para la instancia del componente

  // Se ejecuta antes de cada prueba
  beforeEach(async () => {
    // Configura el módulo de prueba
    await TestBed.configureTestingModule({
      imports: [TareaComponent] // Importa el componente a probar en el módulo de prueba
    })
    .compileComponents(); // Compila los componentes incluidos

    // Crea una instancia del componente y su correspondiente fixture
    fixture = TestBed.createComponent(TareaComponent);
    component = fixture.componentInstance; // Obtiene la instancia del componente
    fixture.detectChanges(); // Detecta cambios para que se actualice la vista
  });

  // Prueba 1: Verifica si el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que la instancia del componente exista
  });
});
