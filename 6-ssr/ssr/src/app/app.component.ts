import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ssr';

  constructor(http: HttpClient) {
    http.get('https://api.github.com/search/users?q=angular')
    .subscribe((data: { total_count }) => {
      this.title = data.total_count;
    });
  }
}
