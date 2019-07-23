import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  public checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      name: ''
    });
  }

  public onSubmit(): void {
    console.log(this.checkoutForm.value);
  }
}
