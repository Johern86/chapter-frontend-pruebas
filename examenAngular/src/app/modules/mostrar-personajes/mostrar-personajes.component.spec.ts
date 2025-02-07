import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPersonajesComponent } from './mostrar-personajes.component';

describe('MostrarPersonajesComponent', () => {
  let component: MostrarPersonajesComponent;
  let fixture: ComponentFixture<MostrarPersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
