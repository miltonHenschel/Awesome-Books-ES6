import LocalStore from './localStore.js';

const bookDetail = document.querySelector('.books-detail');
let newId = 0;

class UI {
  static showBooks() {
    const books = LocalStore.getBooks();
    books.forEach((newBook) => {
      UI.addBookToList(newBook);
    });
  }

  static addBookToList(newBook) {
    newBook.id = newId;
    const bookInfo = `
      <div id="${newId}">
        <p class="book-position">"<span class="">${newBook.title}</span>" by <span class="">${newBook.author}</span></p>
        <button id="${newId}" class="btn-remove">Remove</button>
      </div>
    `;
    bookDetail.innerHTML += bookInfo;
    newId += 1;
  }

  static deleteBookFromList(e) {
    e.parentElement.remove();
  }
}

export default UI;