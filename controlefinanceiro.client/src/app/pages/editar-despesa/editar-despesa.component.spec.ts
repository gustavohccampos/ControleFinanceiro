import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDespesaComponent } from './editar-despesa.component';

describe('EditarDespesaComponent', () => {
  let component: EditarDespesaComponent;
  let fixture: ComponentFixture<EditarDespesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDespesaComponent]
    });
    fixture = TestBed.createComponent(EditarDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
