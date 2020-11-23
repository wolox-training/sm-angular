import * as fromBook from './book.actions';

describe('loadBooks', () => {
  it('should return an action', () => {
    expect(fromBook.addBooks.type).toBe('[Book] Add Books');
  });

  it('should return an action', () => {
    expect(fromBook.removeBooks.type).toBe('[Book] Remove Books');
  });

  it('should return an action', () => {
    expect(fromBook.resetCart.type).toBe('[Book] Reset Books');
  });


});
