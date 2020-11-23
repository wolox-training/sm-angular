import { Component } from '@angular/core';

@Component({
  selector: 'wb-app-shell',
  template: `
    <wb-navbar></wb-navbar>
    <router-outlet></router-outlet>
  `,
})
export class AppShellComponent { }
