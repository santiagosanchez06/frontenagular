import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Camilo } from './camilo';

describe('Camilo', () => {
  let component: Camilo;
  let fixture: ComponentFixture<Camilo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Camilo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Camilo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
