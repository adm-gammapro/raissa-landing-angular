import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {ProgressBar} from 'primeng/progressbar';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [
    Button,
    ProgressBar,
    CommonModule
  ],
  templateUrl: './error.html',
  styleUrl: './error.scss',
  standalone: true
})
export class Error implements OnInit {
  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router) {}

  ngOnInit(): void {
    const reason = this.route.snapshot.queryParams['reason'];
    console.log('Motivo del error:', reason);
  }

  retry(): void {
    this.router.navigate(['/content']);
  }
}
