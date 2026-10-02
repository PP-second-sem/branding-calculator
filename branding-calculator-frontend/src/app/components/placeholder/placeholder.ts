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
  public onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.value);
  }
}
