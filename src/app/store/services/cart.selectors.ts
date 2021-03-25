import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { EntityState } from '../app.state';

// selectors
const getEntityState = createFeatureSelector<EntityState>('entityCache');
const getCart = createSelector(getEntityState, (state: EntityState) => state.cart);
const cartIsEmpty = createSelector(getCart, (cart: number[]) => cart.length === 0);

@Injectable({
    providedIn: 'root',
})
export class CartSelectors {
    constructor(private store: Store<EntityState>) {}

    // TODO: retourner la liste des licornes et pas des IDs
    cart$ = this.store.select(getCart);
    cartIsEmpty$ = this.store.select(cartIsEmpty);
}
