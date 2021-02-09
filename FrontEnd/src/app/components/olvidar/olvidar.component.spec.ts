import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OlvidarComponent } from './olvidar.component';

describe('OlvidarComponent', () => {
  let component: OlvidarComponent;
  let fixture: ComponentFixture<OlvidarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OlvidarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvidarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
