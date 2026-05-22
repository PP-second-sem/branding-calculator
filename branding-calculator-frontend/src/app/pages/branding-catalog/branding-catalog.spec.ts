import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingCatalog } from './branding-catalog';

describe('BrandingCatalog', () => {
  let component: BrandingCatalog;
  let fixture: ComponentFixture<BrandingCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandingCatalog],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandingCatalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
