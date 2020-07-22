import { createReducer, on } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { deleteUnicornSuccess, getUnicornsSuccess, updateUnicornSuccess } from '../actions/unicorns.action';

const initialState: Unicorn[] = [];

export const unicornsReducer = createReducer(
    initialState,
    on(getUnicornsSuccess, (state, { unicorns }) => unicorns),
    on(updateUnicornSuccess, (state, { unicorn }) =>
        state
            .filter(u => u.id !== unicorn.id)
            .concat(unicorn)
            .sort((u1, u2) => u1.id - u2.id),
    ),
    on(deleteUnicornSuccess, (state, { unicorn }) => state.filter(u => u.id !== unicorn.id)),
);
