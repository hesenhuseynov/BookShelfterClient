import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import {  provideHttpClient,  withFetch,  withInterceptorsFromDi } from '@angular/common/http';

import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: '3b05012b-6086-4850-8239-73e0f9ecb33c' 
  }
});

appInsights.loadAppInsights();

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
