import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './screens/register/register.component';
import { AuthenticationComponent } from './screens/layouts/authentication/authentication.component';
import { LoginComponent } from './screens/login/login.component';
import { RouterModule } from '@angular/router';
import { AppShellComponent } from './screens/layouts/app-shell/app-shell.component';
import { BookListComponent } from './screens/books/book-list/book-list.component';
import { BookDetailComponent } from './screens/books/book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AuthenticationComponent,
    LoginComponent,
    AppShellComponent,
    BookListComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
