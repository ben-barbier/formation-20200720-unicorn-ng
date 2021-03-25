// 🎯 getUnicorns
import { createAction, props } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';

export const getUnicorns = createAction('[Unicorns] GET_UNICORNS');
export const getUnicornsSuccess = createAction('[Unicorns] GET_UNICORNS_SUCCESS', props<{ unicorns: Unicorn[] }>());
export const getUnicornsError = createAction('[Unicorns] GET_UNICORNS_ERROR');

export const deleteUnicorn = createAction('[Unicorns] DELETE_UNICORN', props<{ unicorn: Unicorn }>());
export const deleteUnicornSuccess = createAction('[Unicorns] DELETE_UNICORN_SUCCESS', props<{ unicorn: Unicorn }>());
export const deleteUnicornError = createAction('[Unicorns] DELETE_UNICORN_ERROR');
