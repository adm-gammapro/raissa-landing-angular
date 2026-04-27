import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-content-footer',
  imports: [
    NgOptimizedImage,
    ButtonModule
  ],
  templateUrl: './content-footer.html',
  styleUrl: './content-footer.scss',
})
export class ContentFooter {
  appVersion = '1.0.0';
}
