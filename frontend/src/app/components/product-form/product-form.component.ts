import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    price: 0,
    img: '',
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  edit: Boolean = false;

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params
    if (params['id']) {
      this.productService.getProduct(params['id']).subscribe(
        res => {
          console.log(res);
          this.product = res;
          this.edit = true;
        }
      )
    }
  }

  submitForm() {
    this.productService.createProduct(this.product).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/product'])
      },
      err => console.log(err)
    )
  }

  updateProduct() {
    this.productService.updateProduct(this.product._id ?? '', this.product).subscribe(
      res => {
        this.product = res;
        this.router.navigate(['/product']);
        // this.edit = false;
      }
    )
  }

}
