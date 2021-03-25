import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CartDispatchers } from './dispatchers/cart.dispatchers';
import { UnicornsDispatchers } from './dispatchers/unicorns.dispatchers';
import { UnicornsEffects } from './effects/unicorns.effects';
import { reducers } from './reducers';
import { CartSelectors } from './selectors/cart.selectors';
import { UnicornsSelectors } from './selectors/unicorns.selectors';

@NgModule({
    imports: [StoreModule.forFeature('entityCache', reducers, {}), EffectsModule.forFeature([UnicornsEffects])],
    providers: [CartDispatchers, CartSelectors, UnicornsDispatchers, UnicornsSelectors],
    exports: [StoreModule, EffectsModule],
})
export class AppStoreModule {}
