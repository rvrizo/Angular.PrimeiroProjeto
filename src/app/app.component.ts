import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  public goToAddExpensePage(): void {
    this.router.navigate(
      [ 'Budget', 'AddExpense' ],
      { relativeTo: this.activatedRoute }
    )
  }
}