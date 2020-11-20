import { Action, createReducer, on } from '@ngrx/store';
import { IBooksResponse } from 'src/app/interfaces/book.interface';
import { addBooks, removeBooks, resetCart } from './book.actions';

export const bookFeatureKey = 'book';

export const initialState: IBooksResponse[] = [];

export const reducer = createReducer(
  initialState,
  on(addBooks, (state, newBook) => ([...state, newBook])),
  on(removeBooks, (state, newBook) => (state.filter((bookState: IBooksResponse) => bookState.id !== newBook.id))),
  on(resetCart, (state) => [])
);

