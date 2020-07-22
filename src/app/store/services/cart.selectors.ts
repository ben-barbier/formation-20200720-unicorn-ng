import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { EntityState } from '../reducers';

// selectors
const getEntityState = createFeatureSelector<EntityState>('entityCache');
const getCart = createSelector(getEntityState, (state: EntityState) => state.cart);
const getCartSize = createSelector(getCart, cart => cart.length);
const cartIsEmpty = createSelector(getCartSize, cartSize => cartSize === 0);
const unicornIsInCart = createSelector(getCart, (state: number[], prop) => state.some(u => u === prop.id));

@Injectable()
export class CartSelectors {
    constructor(private store: Store<EntityState>) {}

    cart$ = this.store.select(getCart);
    cartSize$ = this.store.select(getCartSize);
    cartIsEmpty$ = this.store.select(cartIsEmpty);
    unicornIsInCart$ = (id: number) => this.store.select(unicornIsInCart, { id });
}
