import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgregarDocenteComponent } from './agregar-docente.component';

describe('AgregarDocenteComponent', () => {
  let component: AgregarDocenteComponent;
  let fixture: ComponentFixture<AgregarDocenteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
