import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRemedioComponent } from './cadastro-remedio.component';

describe('CadastroRemedioComponent', () => {
  let component: CadastroRemedioComponent;
  let fixture: ComponentFixture<CadastroRemedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroRemedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroRemedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
