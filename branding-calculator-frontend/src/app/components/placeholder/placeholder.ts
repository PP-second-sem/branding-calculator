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

  public onInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (this.phoneFormat) {
      const digits = input.value.replace(/\D/g, '');
      let phoneDigits = digits;
      if (phoneDigits.startsWith('7') || phoneDigits.startsWith('8')) {
        phoneDigits = phoneDigits.slice(1);
      }

      phoneDigits = phoneDigits.slice(0, 10);

      let formatted = '';

      if (phoneDigits.length > 0) {
        formatted = '+7 (' + phoneDigits.slice(0, 3);

        if (phoneDigits.length >= 3) {
          formatted += ')';
        }

        if (phoneDigits.length > 3) {
          formatted += ' ' + phoneDigits.slice(3, 6);
        }

        if (phoneDigits.length > 6) {
          formatted += '-' + phoneDigits.slice(6, 8);
        }

        if (phoneDigits.length > 8) {
          formatted += '-' + phoneDigits.slice(8, 10);
        }
      }

      input.value = formatted;
    }

    this.valueChange.emit(input.value);
  }
}

export { Input };
