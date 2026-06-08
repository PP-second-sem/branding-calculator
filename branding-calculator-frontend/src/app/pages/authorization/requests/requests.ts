import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
  public router: Router = inject(Router)
  public questionService: QuestionService = inject(QuestionService);
  public questions: any[] = [];
  public layouts: any[] = [];
  public cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  ngOnInit() {
    console.log('USER', this.authService.currentUser());

    const userId = this.authService.currentUser()?.id;

    this.questionService.getUserQuestions(userId).subscribe((res: any) => {
      this.questions = res;
      this.cdr.detectChanges();
    });
  }

  public logout() {
    this.authService.logout();
  }

  get currentUser() {
    return this.authService.currentUser()
  }
  
  public openRequestModal() {
    this.isModalOpen = true;
  }

  public closeModal() {
    this.isModalOpen = false;
  }

  get totalLayouts(): number {
    return this.layouts.length;
  }

  get approvedLayouts(): number {
    return this.layouts.filter(l => l.status === 'Approved').length;
  }

  get pendingLayouts(): number {
    return this.layouts.filter(l => l.status === 'Pending').length;
  }

  get totalRequests(): number {
    return this.questions.length;
  }

  public goHome() {
    this.router.navigateByUrl('/')
  }
}
