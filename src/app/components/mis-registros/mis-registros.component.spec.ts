import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisRegistrosComponent } from './mis-registros.component';

describe('MisRegistrosComponent', () => {
  let component: MisRegistrosComponent;
  let fixture: ComponentFixture<MisRegistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisRegistrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
