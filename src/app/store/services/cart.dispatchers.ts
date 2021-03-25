import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { addToCart, clearCart, removeFromCart } from '../actions/cart.actions';
import { EntityState } from '../app.state';

@Injectable({
    providedIn: 'root',
})
export class CartDispatchers {
    constructor(private store: Store<EntityState>) {}

    public addToCart(unicorn: Unicorn): void {
        this.store.dispatch(addToCart({ unicorn }));
    }

    public removeFromCart(unicorn: Unicorn): void {
        this.store.dispatch(removeFromCart({ unicorn }));
    }

    public clearCart(): void {
        this.store.dispatch(clearCart());
    }
}
