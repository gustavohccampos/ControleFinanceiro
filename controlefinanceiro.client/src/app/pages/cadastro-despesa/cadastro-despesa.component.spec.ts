import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDespesaComponent } from './cadastro-despesa.component';

describe('CadastroDespesaComponent', () => {
  let component: CadastroDespesaComponent;
  let fixture: ComponentFixture<CadastroDespesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroDespesaComponent]
    });
    fixture = TestBed.createComponent(CadastroDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
