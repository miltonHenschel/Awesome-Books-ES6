// import form from '../js/index.js';

const navList = document.querySelector('#nav-list');
const navAdd = document.querySelector('#nav-add');
const navContact = document.querySelector('#nav-contact');
const page = document.querySelector('.section');
const contact = document.querySelector('#contact');
const form = document.querySelector('.add-book-form');

const menuNav = () => {
  navList.addEventListener('click', () => {
    page.style.display = 'block';
    form.style.display = 'none';
    contact.style.display = 'none';
  });

  navAdd.addEventListener('click', () => {
    page.style.display = 'none';
    form.style.display = 'block';
    contact.style.display = 'none';
  });

  navContact.addEventListener('click', () => {
    page.style.display = 'none';
    form.style.display = 'none';
    contact.style.display = 'block';
  });
};

export default menuNav;