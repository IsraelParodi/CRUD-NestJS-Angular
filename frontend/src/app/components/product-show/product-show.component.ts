import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    price: 0,
    img: '',
  };

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params
    if (params['id']) {
      this.productService.getProduct(params['id']).subscribe(
        res => {
          console.log(res);
          this.product = res;
        }
      )
    }
  }

}
