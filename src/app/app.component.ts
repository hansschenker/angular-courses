import { Component } from '@angular/core';

@Component({
  selector: 'hs-root',
  template: `
    <div class="app">
      <ul class="flex-row">
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/courses">Courses</a></li>
      </ul>
      <router-outlet></router-outlet>
    </div>

  `,
  styles: [
    ` 
    .app {
      height: 100vh;
      margin: 0;
      padding: 0;
      width: 80%;
      max-width: 750px;
      margin: 0 auto;
      /* background-color: #efefef; */
    }
    `
  ]

})
export class AppComponent {
  title = 'angular-courses';
}
