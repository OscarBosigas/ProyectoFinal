import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteInitComponent } from './estudiante-init.component';

describe('EstudianteInitComponent', () => {
  let component: EstudianteInitComponent;
  let fixture: ComponentFixture<EstudianteInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
