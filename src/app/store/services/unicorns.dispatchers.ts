import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { deleteUnicorn, getUnicorns } from '../actions/unicorns.actions';
import { EntityState } from '../app.state';

@Injectable({
    providedIn: 'root',
})
export class UnicornsDispatchers {
    constructor(private store: Store<EntityState>) {}

    public getUnicorns(): void {
        this.store.dispatch(getUnicorns());
    }

    public removeUnicorn(unicorn: Unicorn): void {
        this.store.dispatch(deleteUnicorn({ unicorn }));
    }

    // TODO: delete unicorn
}
