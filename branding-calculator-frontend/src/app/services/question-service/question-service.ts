import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private http = inject(HttpClient);

  createQuestion(data: any) {
    return this.http.post('/api/Question/CreateQuestion', data);
  }

  getAllQuestions() {
    return this.http.get('/api/Question/GetAll');
  }

  getUserQuestions(userId: number) {
    return this.http.get(`/api/Question/${userId}/GetUserQuestions`);
  }

  answerQuestion(data: any) {
    return this.http.patch('/api/Question/AnwserQuestion', data);
  }

  deleteQuestion(id: number) {
    return this.http.delete(`/api/Question/${id}`);
  }
}