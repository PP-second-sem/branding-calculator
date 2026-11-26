import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ConstructorPage } from './constructor-page';

describe('ConstructorPage', () => {
  let component: ConstructorPage;
  let fixture: ComponentFixture<ConstructorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructorPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ConstructorPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('switches the wording without replacing the selected certificate', () => {
    const screen: HTMLElement = fixture.nativeElement;
    const categories = Array.from(screen.querySelectorAll<HTMLButtonElement>('.constructor__layout'));
    categories.find(button => button.textContent.includes('Сертификаты'))!.click();
    fixture.detectChanges();

    const tabs = Array.from(screen.querySelectorAll<HTMLButtonElement>('.data-tabs__tab'));
    tabs.find(button => button.textContent.trim() === 'Текст')!.click();
    fixture.detectChanges();

    const selected = component.selectedTemplate;
    const previews = screen.querySelectorAll('.template-list__item').length;
    const preview = screen.querySelector<HTMLImageElement>('.layout-preview__image')!;
    const [awarded, confirms] = screen.querySelectorAll<HTMLButtonElement>('.data-tabs__wording-button');
    expect(awarded.getAttribute('aria-pressed')).toBe('true');

    confirms.click();
    fixture.detectChanges();

    expect(preview.getAttribute('src')).toBe('certificate_1_trusted.svg');
    expect(confirms.getAttribute('aria-pressed')).toBe('true');
    expect(component.selectedTemplate).toBe(selected);
    expect(screen.querySelectorAll('.template-list__item').length).toBe(previews);

    awarded.click();
    fixture.detectChanges();

    expect(preview.getAttribute('src')).toBe('certificate_1.svg');
    expect(component.selectedTemplate).toBe(selected);
  });
});
