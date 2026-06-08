import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPreviewModal } from './layout-preview-modal';

describe('LayoutPreviewModal', () => {
  let component: LayoutPreviewModal;
  let fixture: ComponentFixture<LayoutPreviewModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutPreviewModal],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutPreviewModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
