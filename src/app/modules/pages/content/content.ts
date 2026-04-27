import {AfterViewInit, Component} from '@angular/core';
import {ContentHeader} from '../../components/content-header/content-header';
import {ContentFooter} from '../../components/content-footer/content-footer';
import {RouterOutlet} from '@angular/router';
import {Toast} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-content',
  imports: [
    ContentHeader,
    ContentFooter,
    RouterOutlet,
    Toast,
  ],
  providers: [MessageService],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content implements AfterViewInit {
  constructor(private readonly messageService: MessageService) { }

  ngAfterViewInit(): void {
    const params = new URLSearchParams(window.location.search);
    const err = params.get('authError');
    if (err) {
      // diferido para asegurar CD y que p-toast ya esté montado
      setTimeout(() => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err });
        const url = new URL(window.location.href);
        url.searchParams.delete('authError');
        window.history.replaceState({}, document.title, url.toString());
      });
    }
  }
}
