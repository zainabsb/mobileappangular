import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer } from './app/store/auth/auth.reducer';
import { AuthEffects } from './app/store/auth/auth.effects';
import { usersReducer } from './app/store/users/users.reducer';
import { UsersEffects } from './app/store/users/users.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(), 

    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(FormsModule),

    provideStore({
      auth: authReducer,
      users: usersReducer,
    }),
    provideEffects([AuthEffects, UsersEffects]),
    provideStoreDevtools({ maxAge: 25 }),
  ],
});