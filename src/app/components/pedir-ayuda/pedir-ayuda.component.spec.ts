import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirAyudaComponent } from './pedir-ayuda.component';

describe('PedirAyudaComponent', () => {
  let component: PedirAyudaComponent;
  let fixture: ComponentFixture<PedirAyudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedirAyudaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedirAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
