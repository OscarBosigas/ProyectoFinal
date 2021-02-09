import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CalificarEstudianteComponent } from './calificar-estudiante.component';

describe('CalificarEstudianteComponent', () => {
  let component: CalificarEstudianteComponent;
  let fixture: ComponentFixture<CalificarEstudianteComponent>;

  beforeEach(waitForAsync(() => {
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
