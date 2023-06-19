import { APIService } from './API-service';

// const BASE_URL_MY =
//   'https://books-backend.p.goit.global/books/category?category=';
// const ENDPOINT = 'Series%20Books';
// const API_KEY = '';
// let page = 1;
// const list = document.querySelector('.js-list-rendering');
// const loadMore = document.querySelector('.js-load_more-rendering');

const bookCollection = document.querySelector('.books-gallery');
const api = new APIService();

export default async function createMarkup(category) {
  const res = await api.fetchBooksByCategory(category);
  const books = await res.data;
  console.log(books);
  function collectionMarkup() {
    return `<h1 class="collection-title">Books</h1>
    <ul class="top-books js-list-rendering">
    ${books
      .map(({ title, book_image, author, _id }) => {
        return `<li class="book-card " id="${_id}">
      <img class="book-cover" src="${book_image}" alt="${title}">
      <h2 class="book-name">${title}</h2>
      <h3 class="book-author">${author}</h3>
  </li>`;
      })
      .join('')}
    </ul>`;
  }
  bookCollection.innerHTML = collectionMarkup();
}

// const collectionMarkup = books
//     .map(({ title, book_image, author, _id }) => {
//       return `<li class="book-card " id="${_id}">
//       <img class="book-cover" src="${book_image}" alt="${title}">
//       <h2 class="book-name">${title}</h2>
//       <h3 class="book-author">${author}</h3>
//   </li>`;
//     })
//     .join('');
//   bookCollection.innerHTML = collectionMarkup;

// loadMore.addEventListener('click', handlerPagination);

// servisBook()
//   .then(data => {
//     list.insertAdjacentHTML('beforeend', createMarkup(data));
//   })
//   .catch(err => console.log(err));

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         title,
//         book_image,
//         author,
//         _id,
//       }) => `<li class="flex-element" id="${_id}">
//       <img src="${book_image}" alt="${title}">
//       <h2>${title}</h2>
//       <p>${author}</p>
//   </li>`
//     )
//     .join('');
// }
