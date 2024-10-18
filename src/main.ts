import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'; // Importa el módulo MatIcon
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './app/components/login/login.component'; 
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    LoginComponent // Asegúrate de que tu componente Login esté declarado
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule, // Asegúrate de incluir MatIconModule
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }


bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
})
  .catch(err => console.error(err));
