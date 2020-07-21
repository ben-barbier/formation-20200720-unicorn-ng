import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Unicorn } from "../models/unicorn.model";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cart = new BehaviorSubject<Unicorn[]>([]);

    public toggleToCart(unicorn: Unicorn) {
        if (this.isInCart(unicorn)) {
            this.removeFromCart(unicorn);
        } else {
            this.addToCart(unicorn);
        }
    }

    public addToCart(unicorn: Unicorn) {
        const actualCart = this.cart.getValue();
        const cartWithNewUnicorn = actualCart.concat(unicorn);
        this.cart.next(cartWithNewUnicorn);
    }

    public removeFromCart(unicorn: Unicorn) {
        const actualCart = this.cart.getValue();
        const cartWithoutUnicorn = actualCart.filter(u => u.id !== unicorn.id);
        this.cart.next(cartWithoutUnicorn);
    }

    public isInCart(unicorn: Unicorn): boolean {
        return this.cart.getValue().some(u => u.id === unicorn.id);
    }

}
