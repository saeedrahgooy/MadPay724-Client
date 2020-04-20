import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { authRoutes } from './routes/routes';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(authRoutes),
    FormsModule
  ],
  declarations: [
    AuthComponent ,
    LoginComponent ,
    RegisterComponent
  ],
  providers:[
    AuthService
  ],
})
export class AuthModule { }
