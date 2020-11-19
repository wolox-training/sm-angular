import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './screens/templates/authentication/authentication.component';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from './screens/layouts/app-shell/app-shell.component';
import { BookListComponent } from './screens/books/book-list/book-list.component';
import { BookDetailComponent } from './screens/books/book-detail/book-detail.component';
import { AuthShellComponent } from './screens/layouts/auth-shell/auth-shell.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';
import { RegisterComponent } from './screens/auth/register/register.component';
import { LoginComponent } from './screens/auth/login/login.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AuthenticationComponent,
    LoginComponent,
    AppShellComponent,
    BookListComponent,
    BookDetailComponent,
    AuthShellComponent,
    NotFoundComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
