import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallitaComponent } from './pantallita.component';

describe('PantallitaComponent', () => {
  let component: PantallitaComponent;
  let fixture: ComponentFixture<PantallitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
