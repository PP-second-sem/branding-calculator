import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestModalComponent } from '../../../components/request-modal.component/request-modal.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth-service/auth.service';
import { QuestionService } from '../../../services/question-service/question-service';

@Component({
  selector: 'app-requests',
  imports: [RouterModule, RequestModalComponent, CommonModule],
  templateUrl: './requests.html',
  styleUrl: './requests.scss',
})
export class Requests {
  isModalOpen = false;
  public authService: AuthService = inject(AuthService);
  public questionService: QuestionService = inject(QuestionService);
  public questions: any[] = [];
  ngOnInit() {
    console.log('USER', this.authService.currentUser());

    const userId = this.authService.currentUser()?.id;

    this.questionService.getUserQuestions(userId).subscribe((res: any) => {
      this.questions = res;
    });
  }
  
  public openRequestModal() {
    this.isModalOpen = true;
  }

  public closeModal() {
    this.isModalOpen = false;
  }
}
