import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { Unicorn } from '../../shared/models/unicorn.model';
import { cartReducer } from './cart.reducer';
import { unicornsReducer } from './unicorns.reducer';
// import { cartReducer } from './cart.reducer';
// import { unicornsReducer } from './unicorns.reducer';

export interface EntityState {
    unicorns: Unicorn[];
    cart: number[];
}

export const reducers: ActionReducerMap<EntityState> = {
    unicorns: unicornsReducer,
    cart: cartReducer,
    // here is where i put other reducers, when i have them
};

export const metaReducers: MetaReducer<EntityState>[] = !environment.production ? [] : [];
