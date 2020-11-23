import * as fromBook from './book.actions';

describe('book action', () => {
  it('should return an add book action', () => {
    expect(fromBook.addBooks.type).toBe('[Book] Add Books');
  });

  it('should return a remove book action', () => {
    expect(fromBook.removeBooks.type).toBe('[Book] Remove Books');
  });

  it('should return a reset cart action', () => {
    expect(fromBook.resetCart.type).toBe('[Book] Reset Books');
  });


});
