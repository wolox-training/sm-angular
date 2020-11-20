import { createAction, props } from '@ngrx/store';
import { IBooksResponse } from 'src/app/interfaces/book.interface';

export const addBooks = createAction('[Book] Add Books', props<IBooksResponse>());
export const removeBooks = createAction('[Book] Remove Books', props<IBooksResponse>());
export const resetCart = createAction('[Book] Reset Books');
