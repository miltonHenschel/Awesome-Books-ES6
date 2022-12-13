class LocalStore {
  static getBooks() {
    let books;
    const localBook = localStorage.getItem('local');
    if (!localBook) {
      books = [];
    } else {
      books = JSON.parse(localBook);
    }
    return books;
  }

  static addBooks(newBook) {
    const books = LocalStore.getBooks();
    if (books) {
      books.push(newBook);
      localStorage.setItem('local', JSON.stringify(books));
    }
  }

  // static deleteBooks()
}

export default LocalStore;