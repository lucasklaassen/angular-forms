import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit, OnDestroy {
  public checkoutForm: FormGroup;
  public showShipping = true;
  public errorMessages = [];

  private billingForShippingSubscription: Subscription;

  get email() {
    return this.checkoutForm.get('email');
  }

  get useBillingForShipping() {
    return this.checkoutForm.get('useBillingForShipping');
  }

  get shippingAddress() {
    return this.checkoutForm.get('shippingAddress');
  }

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: ['', Validators.email],
      useBillingForShipping: false,
      shippingAddress: ['', Validators.required]
    });

    this.billingForShippingSubscription = this.useBillingForShipping.valueChanges.subscribe(results => {
      this.showShipping = !results;
    });
  }

  public ngOnDestroy(): void {
    this.billingForShippingSubscription.unsubscribe();
  }

  public onSubmit(): void {
    this.errorMessages = [];
    if (this.checkoutForm.invalid) {
      this.displayErrorMessages();
      return;
    }
    console.log('Success!', this.checkoutForm.value);
  }

  private displayErrorMessages(): void {
    if (this.email.hasError('email')) {
      this.errorMessages.push('Please enter a valid email address for shipping updates.');
    }

    if (this.shippingAddress.hasError('required')) {
      this.errorMessages.push('Shipping Address is required');
    }
  }
}
