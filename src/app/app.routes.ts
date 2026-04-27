import { Routes } from '@angular/router';
import {Content} from './modules/pages/content/content';
import {modulesRoutes} from './modules/modules.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'content', pathMatch: 'full' },
  {
    path: 'content',
    component: Content,
    children: [...modulesRoutes]
  },
  { path: '**', redirectTo: 'content' }
];
