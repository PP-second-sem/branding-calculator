import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private baseUrl = environment.baseUrl;
  private http = inject(HttpClient);

  createQuestion(data: any) {
    return this.http.post(`${this.baseUrl}/Question/CreateQuestion`, data);
  }

  getAllQuestions() {
    return this.http.get(`${this.baseUrl}/Question/GetAll`);
  }

  getUserQuestions(userId: number) {
    return this.http.get(`${this.baseUrl}/Question/GetUserQuestions`);
  }

  answerQuestion(id: number, answer: string) {
    return this.http.patch(
      `${this.baseUrl}/Question/AnwserQuestion?id=${id}&answer=${encodeURIComponent(answer)}`,
      {}
    );
  }

  deleteQuestion(id: number) {
    return this.http.delete(`${this.baseUrl}/Question/${id}`);
  }
}