import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditarCalificacionComponent } from './editar-calificacion.component';

describe('EditarCalificacionComponent', () => {
  let component: EditarCalificacionComponent;
  let fixture: ComponentFixture<EditarCalificacionComponent>;

  beforeEach(waitForAsync(() => {
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
