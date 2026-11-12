import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  imports: [],
  templateUrl: './placeholder.html',
  styleUrl: './placeholder.scss',
})
export class Placeholder{
  @Input() label = '';
  @Input() placeholder = '';
  @Input() underlinePlaceholder = false;
  @Input() maxlength?: number;
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() phoneFormat = false;
  @Input() addressFormat = false;

  public onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    if (this.phoneFormat) {
      const digits = value.replace(/\D/g, '');
      let phoneDigits = digits;

      if (phoneDigits.startsWith('7') || phoneDigits.startsWith('8')) {
        phoneDigits = phoneDigits.slice(1);
      }

      phoneDigits = phoneDigits.slice(0, 10);

      value = '';

      if (phoneDigits.length > 0) {
        value = '+7 (' + phoneDigits.slice(0, 3);

        if (phoneDigits.length >= 3) {
          value += ')';
        }

        if (phoneDigits.length > 3) {
          value += ' ' + phoneDigits.slice(3, 6);
        }

        if (phoneDigits.length > 6) {
          value += '-' + phoneDigits.slice(6, 8);
        }

        if (phoneDigits.length > 8) {
          value += '-' + phoneDigits.slice(8, 10);
        }
      }
    }

    if (this.addressFormat) {
      value = value.replace(
        /(^|[\s,;])(улица|проезд|город|дом|проспект)(?=$|[\s,.])/gi,
        (_, prefix, word) => {
          const abbreviations: Record<string, string> = {
            улица: 'ул.',
            проезд: 'пр',
            город: 'г.',
            дом: 'д.',
            проспект: 'пр.',
          };

          return prefix + abbreviations[word.toLowerCase()];
        }
      );

      value = value.replace(
        /(ул\.|пр\.|г\.|д\.)\s*([а-яё])/gi,
        (_, abbreviation, letter) =>
          abbreviation + ' ' + letter.toUpperCase()
      );
    }

    input.value = value;
    this.valueChange.emit(value);
  }
}

export { Input };
