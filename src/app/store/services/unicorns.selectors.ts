import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { EntityState } from '../reducers';

// selectors
const getEntityState = createFeatureSelector<EntityState>('entityCache');
const getUnicorns = createSelector(getEntityState, (state: EntityState) => state.unicorns);
const getUnicorn = createSelector(getUnicorns, (state: Unicorn[], prop) => state.find(u => u === prop.id));

@Injectable()
export class UnicornsSelectors {
    constructor(private store: Store<EntityState>) {}

    unicorns$ = this.store.select(getUnicorns);
    unicorn$ = (id: number) => this.store.select(getUnicorn, { id });
}
