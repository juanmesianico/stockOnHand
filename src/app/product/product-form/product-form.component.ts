import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product.interface';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: IProduct = {
    name:'',
    category: '',
    unitPrice: 0,
    quantity: 0,
    photoURL: ''
  };

  edit: boolean = false;

  constructor(private readonly productService: ProductService, 
              private readonly route: Router,
              private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if(params['product_id'] != undefined){
      this.productService.getProductById(params['product_id']).subscribe(
        res => {
          this.product = res;
          this.edit = true;
        }
      );
    }
  }

  createProduct(){
    this.productService.createProduct(this.product).subscribe(
      res => {
        console.log(res);
        this.route.navigate(['product/list']);
      },
      err => console.log(err)
    );
  }

  updateProduct(){
    delete this.product.createdAt;
    this.productService.updateProduct(this.product.product_id!, this.product).subscribe(
      res => {
        console.log(res);
        this.edit = false;
        this.route.navigate(['product/list'])
      },
      err => console.log(err)
    );
  }
}


