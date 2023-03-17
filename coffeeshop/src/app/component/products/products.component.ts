import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/api/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
public productist:any;
  constructor(private api:ProductsService) { }

  ngOnInit(): void {
    this.api.getproduct().subscribe(res=>{
      //console.log(res);
      this.productist = res;
    })
  }

}
