import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregartareasComponent } from './agregartareas.component';

describe('AgregartareasComponent', () => {
  let component: AgregartareasComponent;
  let fixture: ComponentFixture<AgregartareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregartareasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregartareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
