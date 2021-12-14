import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPdfComponent } from './item-pdf.component';

describe('ItemPdfComponent', () => {
  let component: ItemPdfComponent;
  let fixture: ComponentFixture<ItemPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
