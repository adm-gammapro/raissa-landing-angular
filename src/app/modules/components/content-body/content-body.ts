import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-content-body',
  imports: [
    CardModule,
    DividerModule,
    ButtonModule
  ],
  templateUrl: './content-body.html',
  styleUrl: './content-body.scss',
  standalone: true
})
export class ContentBody {
  constructor() {
  }
}
