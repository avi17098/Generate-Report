import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'generate-report';

  constructor(private router: Router) {  }

  getReport() {
  this.router.navigate(['/dashboard/report']);
  }
}
