import { Action } from '@ngrx/store';
import { IBooksResponse } from 'src/app/interfaces/book.interface';
import { reducer, initialState } from './book.reducer';

describe('Book Reducer', () => {
  describe('add book action', () => {
    it('should state with 1 new book added', () => {
      const action = { type: '[Book] Add Books' } as Action;

      const result = reducer(initialState, action);

      expect(result.length).toBe(1);
    });

    it('should state with 3 new book added', () => {
      const action = { type: '[Book] Add Books' } as Action;

      let result = reducer(initialState, action);
      result = reducer(result, action);
      result = reducer(result, action);

      expect(result.length).toBe(3);
    });
  });

  describe('remove book action', () => {
    it('should state with new book deleted', () => {

      const addBookOneAction: IBooksResponse | Action = {
        type: '[Book] Add Books',
        author: 'string',
        created_at: 'string',
        editor: 'string',
        genre: 'string',
        id: 0,
        image_url: 'string',
        title: 'string',
        updated_at: 'string',
        year: 'string',
      } as Action;

      const addBookTwoAction: IBooksResponse | Action = {
        type: '[Book] Add Books',
        author: 'string',
        created_at: 'string',
        editor: 'string',
        genre: 'string',
        id: 1,
        image_url: 'string',
        title: 'string',
        updated_at: 'string',
        year: 'string',
      } as Action;

      const addBookThreeAction: IBooksResponse | Action  = {
        type: '[Book] Add Books',
        author: 'string',
        created_at: 'string',
        editor: 'string',
        genre: 'string',
        id: 2,
        image_url: 'string',
        title: 'string',
        updated_at: 'string',
        year: 'string',
      } as Action;

      const removedBookAction: IBooksResponse | Action = {
        type: '[Book] Remove Books',
        author: 'string',
        created_at: 'string',
        editor: 'string',
        genre: 'string',
        id: 1,
        image_url: 'string',
        title: 'string',
        updated_at: 'string',
        year: 'string',
      } as Action;

      let result = reducer(initialState, addBookOneAction);
      result = reducer(result, addBookTwoAction);
      result = reducer(result, addBookThreeAction);
      result = reducer(result, removedBookAction);

      expect(result.length).toBe(2);
    });
  });

  describe('resetCart', () => {
    it('should return initial state', () => {
      const addBookAction = { type: '[Book] Add Books' } as Action;
      const resetCartAction = { type: '[Book] Reset Books' } as Action;

      let result = reducer(initialState, addBookAction);
      result = reducer(result, addBookAction);
      result = reducer(result, addBookAction);
      result = reducer(result, resetCartAction);

      expect(result).toEqual(initialState);
    });
  });
});
