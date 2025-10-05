import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAlertas } from './cadastro-alertas';

describe('CadastroAlertas', () => {
  let component: CadastroAlertas;
  let fixture: ComponentFixture<CadastroAlertas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroAlertas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroAlertas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
