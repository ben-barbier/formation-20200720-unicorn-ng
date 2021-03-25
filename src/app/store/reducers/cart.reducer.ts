import { createReducer, on } from '@ngrx/store';
import { addToCart, clearCart, removeFromCart } from '../actions/cart.actions';
import { deleteUnicornSuccess } from '../actions/unicorns.actions';

const initialState: number[] = [];

export const cartReducer = createReducer(
    initialState,
    on(addToCart, (state, { unicorn }) => state.concat(unicorn.id)),
    on(removeFromCart, (state, { unicorn }) => state.filter(id => id !== unicorn.id)),
    on(clearCart, () => []),
    on(deleteUnicornSuccess, (state, { unicorn }) => state.filter(u => u.id !== unicorn.id)),
);
