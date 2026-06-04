import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question-service/question-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.scss',
})
export class AdminPage implements OnInit {

  activeTab: 'layouts' | 'questions' | 'banners' | 'folder' = 'layouts';

  private questionService = inject(QuestionService);

  questions: any[] = [];

  ngOnInit() {
    this.load();
  }

  load() {
    this.questionService.getAllQuestions()
      .subscribe((res: any) => {
        this.questions = res; // 👈 БЕЗ МАПЫ
      });
  }

  answerQuestion(q: any, text: string) {

    this.questionService.answerQuestion({
      id: q.id,
      userid: q.userid,
      title: q.title,
      userResponse: q.userResponse,
      adminRequest: text,
      isActive: q.isActive,
      createdAt: q.createdAt,
      answeredAt: q.answeredAt
    }).subscribe({
      next: () => this.load(),
      error: (err) => console.log(err)
    });

  }
}