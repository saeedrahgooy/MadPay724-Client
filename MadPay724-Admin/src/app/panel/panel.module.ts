import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';
import { panelRoutes } from './routes/routes';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(panelRoutes)
  ],
  declarations: [PanelComponent],
})
export class PanelModule { }
