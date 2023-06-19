import { APIService } from './API-service';

const api = new APIService();

const bookCollection = document.querySelector('.books-collection');

async function getBestSellers() {
  const response = await api.fetchBestSellersBooks();
  const bestSellers = await response.data;
  return bestSellers;
}

function createBookCategoryMarkup(category) {
  return `
    <li class="book-category-item">
      <p class="book-category">${category.list_name}</p>
      <ul class="top-books js-list-rendering">
        ${category.books
          .map(book => {
            return `
              <li class="book-card flex-element" id=${book._id}>
                <img class="book-cover" src="${book.book_image}" alt="${book.title}" />
                <h2 class="book-name">${book.title}</h2>
                <h3 class="book-author">${book.author}</h3>
              </li>
            `;
          })
          .join('')}
      </ul>
      <button class="book-card-btn" type="button">see more</button>
    </li>
  `;
}

async function renderCategories() {
  let bookCategories = '';
  const topBooks = await getBestSellers();
  console.log(topBooks);
  for (let category of topBooks) {
    bookCategories += createBookCategoryMarkup(category);
  }
  bookCollection.innerHTML = bookCategories;
}


if (bookCollection) {
  renderCategories();
  bookCollection?.addEventListener('click', onSeeMoreBtnClick);
}

// cutting text
// const limit = 18;
//             const text = book.title;
//             console.log(text);
//             let cuttedText = text.slice(0, limit);

//             if (text.length > limit) {
//               cuttedText += '...';
//             }
const titleCollection = document.querySelector('.collection-title')

bookCollection.addEventListener('click', onSeeMoreBtnClick);

async function onSeeMoreBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const target = e.target;
  if (target.matches('button[data-category]')) {
    const category = target.dataset.category;
    console.log(category);


    const res = await api.fetchBooksByCategory(category);
    const books = await res.data;
    console.log(books);
    const collectionMarkup = books.map(({title,
        book_image,
        author,
      _id, }) => {
      
      titleCollection.textContent = category;
      console.log(titleCollection.textContent);
       return  `<li class="flex-element" id="${_id}">
      <img src="${book_image}" alt="${title}">
      <h2>${title}</h2>
      <p>${author}</p>
  </li>`
    })
    .join('');
    bookCollection.innerHTML = collectionMarkup;
  }
 }
