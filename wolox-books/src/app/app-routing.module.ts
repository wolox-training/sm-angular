import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './screens/books/book-detail/book-detail.component';
import { BookListComponent } from './screens/books/book-list/book-list.component';
import { AppShellComponent } from './screens/layouts/app-shell/app-shell.component';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
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
  {
    path: 'app',
    component: AppShellComponent,
    children: [
      {
        path: 'list',
        component: BookListComponent
      },
      {
        path: 'detail',
        component: BookDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
