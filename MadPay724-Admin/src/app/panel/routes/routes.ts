import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { PanelComponent } from '../panel.component';

export const panelRoutes : Routes = [
  {
    path : 'panel' ,
    component : PanelComponent
   },
];

