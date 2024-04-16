import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirDespesaComponent } from './excluir-despesa.component';

describe('ExcluirDespesaComponent', () => {
  let component: ExcluirDespesaComponent;
  let fixture: ComponentFixture<ExcluirDespesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirDespesaComponent]
    });
    fixture = TestBed.createComponent(ExcluirDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
