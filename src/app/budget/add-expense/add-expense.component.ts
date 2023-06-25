import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})

export class AddExpenseComponent implements OnInit {
  public form!: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.initForm();
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      description: [ null, Validators.compose([ Validators.required ])],
      value: [ null, Validators.compose([ Validators.required ])],
      payDay: [ null, Validators.compose([ Validators.required ])],
      endMonth: [ null ],
      directDebit: [ false, Validators.compose([ Validators.required ])]
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      console.log("Deu ruim.");
    }
    else {
      console.log(this.form.value);
    }
  }
}