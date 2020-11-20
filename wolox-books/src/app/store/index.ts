import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IBooksResponse } from '../interfaces/book.interface';
import * as fromBook from './books/book.reducer';


export interface State {
  [fromBook.bookFeatureKey]: IBooksResponse[];
}

export const reducers: ActionReducerMap<State> = {
  [fromBook.bookFeatureKey]: fromBook.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
