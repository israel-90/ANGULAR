import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariocedulaComponent } from './formulariocedula.component';

describe('FormulariocedulaComponent', () => {
  let component: FormulariocedulaComponent;
  let fixture: ComponentFixture<FormulariocedulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariocedulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariocedulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
