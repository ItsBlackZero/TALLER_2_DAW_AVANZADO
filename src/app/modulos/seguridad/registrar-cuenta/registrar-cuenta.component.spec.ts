import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCuentaComponent } from './registrar-cuenta.component';

describe('RegistrarCuentaComponent', () => {
  let component: RegistrarCuentaComponent;
  let fixture: ComponentFixture<RegistrarCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarCuentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
