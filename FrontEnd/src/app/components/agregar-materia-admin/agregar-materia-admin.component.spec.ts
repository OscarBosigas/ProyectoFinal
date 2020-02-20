import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMateriaAdminComponent } from './agregar-materia-admin.component';

describe('AgregarMateriaAdminComponent', () => {
  let component: AgregarMateriaAdminComponent;
  let fixture: ComponentFixture<AgregarMateriaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMateriaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMateriaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
