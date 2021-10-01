import { IShoppingCartItem } from "./IShoppingCartItems";


export class Shoppingcart {

    constructor(public items: IShoppingCartItem[]) { }
    get getTotalCount() {
        let counter = 0;
        for (let productID in this.items) {
            counter += this.items[productID].quantity;
        }
        sessionStorage.setItem('counter' , counter.toString());
        return counter;
    }

    get totalItemsPrice() {
        let total = 0;
        for (let productid in this.items) {
            if (this.items[productid].quantity) {
                let price = ((this.items[productid].product.price) * (this.items[productid].quantity)) as number;
                total += price;
            }
        }
        return total;
    }

    get productids() {
        return Object.keys(this.items);
    }
}