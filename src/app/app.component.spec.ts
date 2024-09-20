import { TestBed } from '@angular/core/testing'; // Importa TestBed para configurar el entorno de pruebas
import { AppComponent } from './app.component'; // Importa el componente que se va a probar

// Describe el conjunto de pruebas para AppComponent
describe('AppComponent', () => {
  // Se ejecuta antes de cada prueba
  beforeEach(async () => {
    // Configura el módulo de prueba
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Importa el componente a probar
    }).compileComponents(); // Compila los componentes
  });

  // Prueba 1: Verifica si el componente se crea correctamente
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Crea una instancia del componente
    const app = fixture.componentInstance; // Obtiene la instancia del componente
    expect(app).toBeTruthy(); // Verifica que la instancia del componente sea verdadera (exista)
  });

  // Prueba 2: Verifica si el título del componente es 'miniApp'
  it(`should have the 'miniApp' title`, () => {
    const fixture = TestBed.createComponent(AppComponent); // Crea una instancia del componente
    const app = fixture.componentInstance; // Obtiene la instancia del componente
    expect(app.title).toEqual('miniApp'); // Verifica que el título sea 'miniApp'
  });

  // Prueba 3: Verifica que el título se renderice correctamente en la plantilla
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // Crea una instancia del componente
    fixture.detectChanges(); // Detecta cambios para que se actualice la vista
    const compiled = fixture.nativeElement as HTMLElement; // Obtiene el elemento nativo del componente
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, miniApp'); // Verifica que el contenido del h1 contenga 'Hello, miniApp'
  });
});
