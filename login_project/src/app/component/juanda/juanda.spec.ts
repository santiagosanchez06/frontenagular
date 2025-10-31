import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Juanda } from './juanda';

describe('Juanda', () => {
  let component: Juanda;
  let fixture: ComponentFixture<Juanda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Juanda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Juanda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
