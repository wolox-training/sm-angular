import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './screens/books/book-detail/book-detail.component';
import { BookListComponent } from './screens/books/book-list/book-list.component';
import { AppShellComponent } from './screens/layouts/app-shell/app-shell.component';
import { AuthShellComponent } from './screens/layouts/auth-shell/auth-shell.component';
import { LoginComponent } from './screens/auth/login/login.component';
import { RegisterComponent } from './screens/auth/register/register.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';
import { UnauthGuard } from './guards/unauth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthShellComponent,
    canActivate: [UnauthGuard],
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: RegisterComponent
      },
    ]
  },
  {
    path: 'app',
    component: AppShellComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/app/books',
        pathMatch: 'full'
      },
      {
        path: 'books',
        component: BookListComponent
      },
      {
        path: 'books/:id',
        component: BookDetailComponent
      }
    ]
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
