import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from 'src/app/auth/auth.component';
import { PanelComponent } from '../panel.component';

export const panelRoutes: Routes = [
  {
    path : 'panel' ,
    component : PanelComponent
   },
];

