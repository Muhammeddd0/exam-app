import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
bootstrapApplication(AppComponent,{
  providers: [
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideRouter(routes)
  ],
} )