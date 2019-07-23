import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { skip } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductComponent } from './product.component';

describe('Product Component', () => {
  let fixture: ComponentFixture<ProductComponent>;
  let component: ProductComponent;
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [RouterTestingModule],
      providers: [CartService]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.debugElement.componentInstance;
    service = TestBed.get(CartService);
    component.product = {
      name: 'Hamburger',
      price: 8,
      details: ['Medium rare patty', 'No cheese', 'Fresh garden tomato']
    };
    fixture.detectChanges();
  });

  it('can add a product to the cart', async done => {
    service.products$.pipe(skip(1)).subscribe(result => {
      expect(result[0].name).toBe('Hamburger');
      done();
    });
    component.addToCart();
  });
});
