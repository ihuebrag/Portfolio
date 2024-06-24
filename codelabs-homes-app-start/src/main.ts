import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NgModel } from '@angular/forms';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
