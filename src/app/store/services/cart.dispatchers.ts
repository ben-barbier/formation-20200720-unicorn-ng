import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { addUnicornToCart, clearCart, removeUnicornFromCart } from '../actions/cart.actions';
import { EntityState } from '../reducers';

@Injectable()
export class CartDispatchers {
    constructor(private store: Store<EntityState>) {}

    public addUnicornToCart(unicorn: Unicorn): void {
        this.store.dispatch(addUnicornToCart({ unicorn }));
    }

    public removeUnicornFromCart(unicorn: Unicorn): void {
        this.store.dispatch(removeUnicornFromCart({ unicorn }));
    }

    public clearCart(): void {
        this.store.dispatch(clearCart());
    }
}
