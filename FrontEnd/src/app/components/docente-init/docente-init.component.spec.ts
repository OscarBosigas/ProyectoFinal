import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteInitComponent } from './docente-init.component';

describe('DocenteInitComponent', () => {
  let component: DocenteInitComponent;
  let fixture: ComponentFixture<DocenteInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
