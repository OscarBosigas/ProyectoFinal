import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidarEstudianteComponent } from './olvidar-estudiante.component';

describe('OlvidarEstudianteComponent', () => {
  let component: OlvidarEstudianteComponent;
  let fixture: ComponentFixture<OlvidarEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlvidarEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvidarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
