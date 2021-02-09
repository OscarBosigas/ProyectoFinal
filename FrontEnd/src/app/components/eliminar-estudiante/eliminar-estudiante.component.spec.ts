import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EliminarEstudianteComponent } from './eliminar-estudiante.component';

describe('EliminarEstudianteComponent', () => {
  let component: EliminarEstudianteComponent;
  let fixture: ComponentFixture<EliminarEstudianteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
