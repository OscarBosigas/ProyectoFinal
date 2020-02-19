import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificarEstudianteComponent } from './calificar-estudiante.component';

describe('CalificarEstudianteComponent', () => {
  let component: CalificarEstudianteComponent;
  let fixture: ComponentFixture<CalificarEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificarEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
