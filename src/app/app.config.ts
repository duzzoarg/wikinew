import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';//Importa la interfaz ApplicationConfig y la función provideZoneChangeDetection desde el paquete @angular/core
import { provideRouter } from '@angular/router';//Importa la función provideRouter desde el paquete @angular/router
import { provideHttpClient } from '@angular/common/http'; // Debemos importar provideHttpClient


import { routes } from './app.routes';//Importa la constante routes desde el archivo app.routes.ts


export const appConfig: ApplicationConfig = {///Constante appConfig que contiene la configuración de la aplicación
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),// Añadimos provideZoneChangeDetection aquí
    provideRouter(routes),// Añadimos provideRouter aquí
    provideHttpClient() // Añadimos provideHttpClient aquí
  ]
};
