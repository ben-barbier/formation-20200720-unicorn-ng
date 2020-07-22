import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Unicorn } from '../../shared/models/unicorn.model';
import { cartReducer } from './cart.reducer';
import { unicornsReducer } from './unicorns.reducer';

export interface EntityState {
    unicorns: Unicorn[];
    cart: number[];
}

export const reducers: ActionReducerMap<EntityState> = {
    unicorns: unicornsReducer,
    cart: cartReducer,
    // here is where i put other reducers, when i have them
};

function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<EntityState>[] = !environment.production ? [debug] : [];
