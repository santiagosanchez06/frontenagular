import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maria } from './maria';

describe('Maria', () => {
  let component: Maria;
  let fixture: ComponentFixture<Maria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
