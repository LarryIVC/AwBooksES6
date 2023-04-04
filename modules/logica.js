import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';
import BookList from './BookList.js';

function hideSectionsOnClick() {
  const listSection = document.getElementById('all-books');
  const addNewSection = document.getElementById('add-book');
  const contactSection = document.getElementById('contact-us');

  listSection.style.display = 'flex';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';

  document.getElementById('list-link').addEventListener('click', () => {
    listSection.style.display = 'flex';
    addNewSection.style.display = 'none';
    contactSection.style.display = 'none';
  });

  document.getElementById('add-link').addEventListener('click', () => {
    listSection.style.display = 'none';
    addNewSection.style.display = 'flex';
    contactSection.style.display = 'none';
  });

  document.getElementById('contact-link').addEventListener('click', () => {
    listSection.style.display = 'none';
    addNewSection.style.display = 'none';
    contactSection.style.display = 'flex';
  });
}

const logica = () => {
  const bookListElement = document.getElementById('book-list');
  const addBookFormElement = document.getElementById('add-book-form');
  const titleInputElement = document.getElementById('title-input');
  const authorInput = document.getElementById('author-input');

  const bookList = new BookList(
    bookListElement,
    addBookFormElement,
    titleInputElement,
    authorInput,
  );

  bookList.loadBooks();

  hideSectionsOnClick();

  DateTime.local();

  const now = DateTime.now();
  const currentDate = now.toLocaleString(DateTime.DATETIME_MED);
  const xDateTime = document.getElementById('date-time');
  xDateTime.innerHTML = currentDate;
};

export default logica;