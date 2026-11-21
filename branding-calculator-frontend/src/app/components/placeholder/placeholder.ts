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
  @Input() posterDateFormat = false;
  @Input() timeFormat = false;

  public onBeforeInput(event: InputEvent): void {
    if (!this.phoneFormat || event.inputType !== 'deleteContentBackward' || !event.cancelable) {
      return;
    }

    const input = event.target as HTMLInputElement;
    const end = input.value.length;

    // Backspace over the closing parenthesis also removes the previous digit.
    if (input.selectionStart === end && input.selectionEnd === end && /\d\)$/.test(input.value)) {
      event.preventDefault();
      input.setRangeText('', end - 2, end, 'end');
      this.onInput(event);
    }
  }

  public onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;


    if (this.phoneFormat) {
      let digits = value.replace(/\D/g, '');

      if (digits.startsWith('7') || digits.startsWith('8')) {
        digits = digits.slice(1);
      }

      digits = digits.slice(0, 10);

      if (digits.length === 0) {
        value = '';
      } else {
        const parts = digits;

        value = '+7';

        if (parts.length > 0) {
          value += ' (' + parts.slice(0, 3);
        }

        if (parts.length >= 3) {
          value += ')';
        }

        if (parts.length > 3) {
          value += ' ' + parts.slice(3, 6);
        }

        if (parts.length > 6) {
          value += '-' + parts.slice(6, 8);
        }

        if (parts.length > 8) {
          value += '-' + parts.slice(8, 10);
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

    if (this.posterDateFormat) {
      const match = value.match(/^(\d{1,2})\.(\d{1,2})$/);

      if (match) {
        const day = match[1];
        const month = Number(match[2]);

        const months = [
          'января', 'февраля', 'марта', 'апреля',
          'мая', 'июня', 'июля', 'августа',
          'сентября', 'октября', 'ноября', 'декабря',
        ];

        if (month >= 1 && month <= 12) {
          value = `${day} ${months[month - 1]}`;
        }
      }
    }

    if (this.timeFormat) {
      const digits = value.replace(/\D/g, '').slice(0, 4);

      value = digits.length > 2
        ? digits.slice(0, 2) + ':' + digits.slice(2)
        : digits;
    }

    input.value = value;
    this.valueChange.emit(value);
  }

}

export { Input };
