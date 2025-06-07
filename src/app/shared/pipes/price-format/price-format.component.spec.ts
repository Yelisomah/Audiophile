import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceFormatComponent } from './price-format.component';

describe('PriceFormatComponent', () => {
  let component: PriceFormatComponent;
  let fixture: ComponentFixture<PriceFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceFormatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
