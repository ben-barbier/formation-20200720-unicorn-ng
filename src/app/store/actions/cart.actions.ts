import { createAction, props } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';

export const addToCart = createAction('[Cart] ADD_TO_CART', props<{ unicorn: Unicorn }>());
export const removeFromCart = createAction('[Cart] REMOVE_FROM_CART', props<{ unicorn: Unicorn }>());
export const clearCart = createAction('[Cart] CLEAR_CART');
