import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDespesaComponent } from './detalhes-despesa.component';

describe('DetalhesDespesaComponent', () => {
  let component: DetalhesDespesaComponent;
  let fixture: ComponentFixture<DetalhesDespesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesDespesaComponent]
    });
    fixture = TestBed.createComponent(DetalhesDespesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
