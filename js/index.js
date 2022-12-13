'use script';

import Book from '../modules/book.js';
import UI from '../modules/ui.js';
import LocalStore from '../modules/localStore.js';
import menuNav from '../modules/menuNav.js';
import { DateTime } from '../modules/luxon.js';

// "max-classes-per-file": "off"

// DECLARE GLOBAL VARIABLES

const bookDisplay = document.querySelector('.books-display');
const errorMsg = document.querySelector('.error-message');
const form = document.querySelector('.add-book-form');
const titleInput = document.querySelector('.title-book-add');
const authorInput = document.querySelector('.author-book-add');
const btnAdd = document.querySelector('.btn-add');

// CLICK ON REMOVE BUTTON

bookDisplay.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
  if (e.target.className === 'btn-remove') {
    const { id } = e.target;
    let books = LocalStore.getBooks();
    books = books.filter((bk) => JSON.stringify(bk.id) !== id);
    localStorage.setItem('local', JSON.stringify(books)); // LOCAL STORAGE
    UI.deleteBookFromList(e.target);
  }
});

// CLICK ON ADD BUTTON

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
  const books = LocalStore.getBooks();
  const newTitle = titleInput.value;
  const newAuthor = authorInput.value;
  let newId;
  const len = books.length;
  if (len === 0 || len === null) {
    newId = 0;
  } else {
    newId = books[len - 1].id + 1;
  }
  const newBook = new Book(newTitle, newAuthor, newId);
  if (newTitle.length !== 0 && newAuthor.length !== 0) {
    LocalStore.addBooks(newBook);
    UI.addBookToList(newBook);
    errorMsg.style.display = 'none';
  } else {
    errorMsg.style.display = 'block';
  }
  form.reset();
});

// GENERAL

window.addEventListener('DOMContentLoaded', UI.showBooks);
window.addEventListener('DOMContentLoaded', menuNav);

// TIME DISPLAY

const timeDisplay = () => {
  const timeInfo = document.querySelector('#time-info');
  timeInfo.innerHTML = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`;
  // timeInfo.innerHTML = DateTime.now();
};

window.addEventListener('DOMContentLoaded', timeDisplay);
