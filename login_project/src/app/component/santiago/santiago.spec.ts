import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Santiago } from './santiago';

describe('Santiago', () => {
  let component: Santiago;
  let fixture: ComponentFixture<Santiago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Santiago]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Santiago);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
