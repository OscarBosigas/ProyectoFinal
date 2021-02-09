import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgregarMateriaAdminComponent } from './agregar-materia-admin.component';

describe('AgregarMateriaAdminComponent', () => {
  let component: AgregarMateriaAdminComponent;
  let fixture: ComponentFixture<AgregarMateriaAdminComponent>;

  beforeEach(waitForAsync(() => {
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
