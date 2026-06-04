import { Component, EventEmitter, inject, Output } from '@angular/core';
import { QuestionService } from '../../services/question-service/question-service';
import { AuthService } from '../../services/auth-service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './request-modal.component.html',
  styleUrl: './request-modal.component.scss',
})
export class RequestModalComponent {
  @Output() close = new EventEmitter<void>();

  public onClose(): void {
    this.close.emit();
  }

  private questionService = inject(QuestionService);
  //sprivate authService = inject(AuthService);

  title = '';
  message = '';

  send() {
    this.questionService.createQuestion({
      title: this.title,
      userQuestion: this.message
    }).subscribe({
      next: (res) => {
        console.log('Success:', res)
        alert('Отправлено');

        this.title = '',
        this.message = '';

        this.close.emit();
      },
      error: (err) => console.log(err)
    });
  }
}
