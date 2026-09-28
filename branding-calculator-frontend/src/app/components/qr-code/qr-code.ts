import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'app-qr-code',
  imports: [],
  templateUrl: './qr-code.html',
  styleUrl: './qr-code.scss',
})
export class QrCode implements AfterViewInit, OnChanges {
  @Input() value = '';
  @Input() size = 10;
  @ViewChild('canvas')
  private canvas!: ElementRef<HTMLCanvasElement>;

  public async ngAfterViewInit(): Promise<void> {
    await this.generateQrCode();
  }

  public async generateQrCode(): Promise<void> {
    if (!this.value || !this.canvas) {
        return;
    }

    const canvas = this.canvas.nativeElement;

    await QRCode.toCanvas(canvas, this.value, {
        width: 1000,
        margin: 0,
        color: {
            dark: '#000000',
            light: '#00000000',
        },
    });

    this.canvas.nativeElement.style.width = `${this.size}px`;
    this.canvas.nativeElement.style.height = `${this.size}px`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['value'] && this.canvas) {
      this.generateQrCode();
    }
  }
}
