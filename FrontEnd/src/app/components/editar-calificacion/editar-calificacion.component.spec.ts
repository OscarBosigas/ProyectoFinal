import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCalificacionComponent } from './editar-calificacion.component';

describe('EditarCalificacionComponent', () => {
  let component: EditarCalificacionComponent;
  let fixture: ComponentFixture<EditarCalificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCalificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCalificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
