import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_FACTORY } from '@angular/cdk/overlay/typings/overlay-directives';
import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/model/product';
import { unit } from 'src/app/model/unit';
import { UnitService } from 'src/app/repo/unit.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  units: unit[]
  product: product = new product();

  constructor(private unitService: UnitService) { }

  ngOnInit(): void {
    this.units = this.unitService.getAll();
    
  }

}
