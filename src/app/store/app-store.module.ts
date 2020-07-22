import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UnicornsEffects } from './effects/unicorns.effects';
import { metaReducers, reducers } from './reducers';
import { CartDispatchers } from './services/cart.dispatchers';
import { CartSelectors } from './services/cart.selectors';
import { UnicornsDispatchers } from './services/unicorns.dispatchers';
import { UnicornsSelectors } from './services/unicorns.selectors';

@NgModule({
    imports: [
        StoreModule.forFeature('entityCache', reducers, { metaReducers }),
        EffectsModule.forFeature([UnicornsEffects]),
    ],
    providers: [CartDispatchers, CartSelectors, UnicornsDispatchers, UnicornsSelectors],
    exports: [StoreModule, EffectsModule],
})
export class AppStoreModule {}
