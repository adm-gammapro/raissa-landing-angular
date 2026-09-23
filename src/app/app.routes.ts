import { Routes } from '@angular/router';
import {Content} from './modules/pages/content/content';
import {modulesRoutes} from './modules/modules.routes';
import {Error} from './modules/pages/error/error/error';

export const routes: Routes = [
  { path: '', redirectTo: 'content', pathMatch: 'full' },
  {
    path: 'error',
    component: Error
  },
  {
    path: 'content',
    component: Content,
    children: [...modulesRoutes]
  },
  { path: '**', redirectTo: 'content' }
];
