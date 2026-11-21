import { Component, EventEmitter, Input, Output } from '@angular/core';
import { formatAddress } from './address-format';

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

    if (input.selectionStart === end && input.selectionEnd === end && /\d\)$/.test(input.value)) {
      event.preventDefault();
      input.setRangeText('', end - 2, end, 'end');
      this.onInput(event);
    }
  }

  public onBlur(event: FocusEvent): void {
    if (!this.addressFormat) {
      return;
    }

    const input = event.target as HTMLInputElement;
    const formatted = formatAddress(input.value, true);
    if (formatted !== input.value) {
      input.value = formatted;
      this.valueChange.emit(formatted);
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
      const inputType = (event as InputEvent).inputType;
      const finishLastWord = inputType === 'insertFromPaste' || inputType === 'insertFromDrop'
        || inputType === 'insertReplacementText';
      value = formatAddress(value, finishLastWord);
    }

    if (this.posterDateFormat) {
      const formattedDate = this.formatPosterDate(value);
      const inputType = (event as InputEvent).inputType;

      if (formattedDate === undefined && !inputType?.startsWith('delete')) {
        input.value = this.value;
        return;
      }

      value = formattedDate ?? value;
      this.value = value;
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
  private formatPosterDate(value: string): string | undefined {
    if (value === '') {
      return value;
    }

    const match = value.match(/^(\d{1,2})(?:\.([01]?|0[1-9]|1[0-2])| ([а-яё]*))?$/i);
    if (!match) {
      return undefined;
    }

    const [, day, monthDigits, monthText] = match;
    const months = [
      'января', 'февраля', 'марта', 'апреля',
      'мая', 'июня', 'июля', 'августа',
      'сентября', 'октября', 'ноября', 'декабря',
    ];

    if (monthText !== undefined && !months.some(month => month.startsWith(monthText.toLowerCase()))) {
      return undefined;
    }

    return monthDigits?.length === 2 ? `${day} ${months[Number(monthDigits) - 1]}` : value;
  }
}

export { Input };
