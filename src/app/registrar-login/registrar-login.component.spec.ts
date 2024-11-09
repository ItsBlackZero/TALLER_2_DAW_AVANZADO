import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarLoginComponent } from './registrar-login.component';

describe('RegistrarLoginComponent', () => {
  let component: RegistrarLoginComponent;
  let fixture: ComponentFixture<RegistrarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
