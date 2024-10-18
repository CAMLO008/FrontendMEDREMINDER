import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Proporciona detección de cambios de zona optimizada
    provideZoneChangeDetection({ eventCoalescing: true }),
    
    // Proporciona las rutas configuradas en app.routes.ts
    provideRouter(routes)
  ]
};
