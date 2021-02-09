import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DocenteInitComponent } from './docente-init.component';

describe('DocenteInitComponent', () => {
  let component: DocenteInitComponent;
  let fixture: ComponentFixture<DocenteInitComponent>;

  beforeEach(waitForAsync(() => {
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
