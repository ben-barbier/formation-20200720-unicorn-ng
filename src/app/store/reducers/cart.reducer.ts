import { createReducer, on } from '@ngrx/store';
import { addUnicornToCart, clearCart, removeUnicornFromCart } from '../actions/cart.actions';
import { deleteUnicornSuccess } from '../actions/unicorns.action';

const initialState: number[] = [];

export const cartReducer = createReducer(
    initialState,
    on(addUnicornToCart, (state, { unicorn }) => state.concat(unicorn.id)),
    on(removeUnicornFromCart, (state, { unicorn }) => state.filter(u => u !== unicorn.id)),
    on(clearCart, () => [] as number[]),
    on(deleteUnicornSuccess, (state, { unicorn }) => state.filter(u => u !== unicorn.id)),
);
