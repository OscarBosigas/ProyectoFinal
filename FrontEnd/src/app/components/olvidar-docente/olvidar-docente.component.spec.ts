import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OlvidarDocenteComponent } from './olvidar-docente.component';

describe('OlvidarDocenteComponent', () => {
  let component: OlvidarDocenteComponent;
  let fixture: ComponentFixture<OlvidarDocenteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OlvidarDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvidarDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
