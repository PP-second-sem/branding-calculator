import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTabs } from './data-tabs';

describe('DataTabs', () => {
  let component: DataTabs;
  let fixture: ComponentFixture<DataTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTabs],
    }).compileComponents();

    fixture = TestBed.createComponent(DataTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
