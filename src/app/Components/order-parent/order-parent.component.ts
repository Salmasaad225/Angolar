import { Component } from '@angular/core';
import { CartItem } from 'src/app/Models/cart-item';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-parent',
  templateUrl: './order-parent.component.html',
  styleUrls: ['./order-parent.component.css']
})
export class OrderParentComponent {

  selectedCategoryID: number = 0
  totalPriceChanged: number = 0  //from child
  cartList: CartItem[] = [];      //from child

  categoryList: ICategory[]

  constructor() {
    this.categoryList = [
      { Id: 1, Name: "TV" },
      { Id: 2, Name: "Laptop" },
      { Id: 3, Name: "Mobile" },
      { Id: 4, Name: "Iphone" },

    ]
  }

  totalprice(total: number) {
    this.totalPriceChanged = total
  }

  addnewCartItem(newItem: CartItem) {
    this.cartList.push(newItem);
  }



}
