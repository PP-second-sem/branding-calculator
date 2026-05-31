import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import html2canvas from 'html2canvas';
import { templates } from '../../mock/templates';
import { MainHeaderComponent } from '../../components/main-header.component/main-header.component';

@Component({
  selector: 'app-editor',
  imports: [CommonModule, FormsModule, MainHeaderComponent],
  templateUrl: './editor.html',
  styleUrl: './editor.scss',
})
export class Editor implements OnInit {
  private route = inject(ActivatedRoute);
  public avatarPreview: string = '';
  public isCarrierOpen = true;
  public isCityOpen = true;
  public isLogoOpen = true;
  public isPreviewOpen = true;
  public isFormatOpen = true;
  public template: any;
  public formData: any = {};
  public scale = 324 / 640;
  ngOnInit(): void {
    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.template = templates.find(
      item => item.id === id
    );
  }

  public onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      this.avatarPreview = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  public downloadTemplate(): void {
    const element = document.querySelector(
      '.editor-export'
    ) as HTMLElement;
    html2canvas(element, {
      scale: 2
    }).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'template.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  }
}