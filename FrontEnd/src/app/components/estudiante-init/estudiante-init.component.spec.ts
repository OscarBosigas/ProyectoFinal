import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EstudianteInitComponent } from './estudiante-init.component';

describe('EstudianteInitComponent', () => {
  let component: EstudianteInitComponent;
  let fixture: ComponentFixture<EstudianteInitComponent>;

  beforeEach(waitForAsync(() => {
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
