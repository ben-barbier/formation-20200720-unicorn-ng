import { createAction, props } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';

export const addUnicornToCart = createAction('[Cart] ADD_UNICORN_TO_CART', props<{ unicorn: Unicorn }>());
export const removeUnicornFromCart = createAction('[Cart] REMOVE_UNICORN_FROM_CART', props<{ unicorn: Unicorn }>());
export const clearCart = createAction('[Cart] CLEAR_CART');
