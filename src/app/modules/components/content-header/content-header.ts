import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {environment} from '../../../../environments/environment';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmationService, MenuItem} from 'primeng/api';
import {SplitButtonModule} from 'primeng/splitbutton';

@Component({
  selector: 'app-content-header',
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    NgOptimizedImage
  ],
  providers: [ConfirmationService],
  templateUrl: './content-header.html',
  styleUrl: './content-header.scss',
  standalone: true
})
export class ContentHeader {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Raissa Accounts',
        command: () => {
          this.onLoginRaissaAccounts();
        }
      },
      {
        label: 'Raissa Payments',
        command: () => {
          this.onLoginRaissaPayments();
        }
      },
      {
        label: 'Raissa Identify',
        command: () => {
          this.onLoginRaissaIdentify();
        }
      }
    ];
  }

  onLoginRaissaAccounts(): void {
    location.href = environment.url.urlExtranet + "/login";
  }

  onLoginRaissaPayments(): void {
    location.href = environment.url.urlPayments + "/login";
  }

  onLoginRaissaIdentify(): void {
    location.href = environment.url.urlIdentify + "/login";
  }
}
