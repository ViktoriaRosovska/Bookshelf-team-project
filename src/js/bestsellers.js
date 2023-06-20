import { APIService } from './API-service';

const api = new APIService();

const bookCollection = document.querySelector('.books-collection');
// const allCategoriesBooks = document.querySelector('.js-all-categories');
const bookCollectionBest = document.querySelector('.books-gallery');

async function getBestSellers() {
  const response = await api.fetchBestSellersBooks();
  const bestSellers = await response.data;
  return bestSellers;
}

function createBookCategoryMarkup(category) {
  return `
  
    <li class="book-category-item">
      <p class="book-category">${category.list_name}</p>
      <ul class="top-books bestsel-books js-list-rendering">
        ${category.books
          .map(book => {
            return `
              <li class="book-card flex-element" id=${book._id}>
              <div class="book-thumb">
                <img class="book-cover" src="${book.book_image}" alt="${book.title}" />
                <div class="quick-view">
                <p class="quick-view-text">QUICK VIEW</p>
                </div>
                </div>
                <h2 class="book-name">${book.title}</h2>
                <h3 class="book-author">${book.author}</h3>
              </li>
            `;
          })
          .join('')}
      </ul>
      <button class="book-card-btn" type="button" data-category="${category.list_name}">see more</button>
    </li>
  `;
}

export default async function renderCategories() {
  let bookCategories = '';
  const topBooks = await getBestSellers();
  console.log(topBooks);
  for (let category of topBooks) {
    console.log(category);
    bookCategories += createBookCategoryMarkup(category);
  }
  bookCollectionBest.innerHTML = `<h1 class="collection-title">Best Sellers <span>Books</span></h1>`;
  bookCollectionBest.insertAdjacentHTML('beforeend', bookCategories);
}



 renderCategories();


if (bookCollection) {
  renderCategories();
  bookCollection?.addEventListener('click', onSeeMoreBtnClick);
}

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
    titleCollection.textContent = category;
    createBooksOnSeeMoreBtn(category);
  }
}
 
async function createBooksOnSeeMoreBtn(category) {
  const res = await api.fetchBooksByCategory(category);
  const books = await res.data;
  console.log(books);
  function collectionMarkup() {
    return `
    <ul class="top-books rendering-gap js-list-rendering">
    ${books
      .map(({ title, book_image, author, _id }) => {
        return `
        <li class="book-card" id=${_id}>
        <div class="book-thumb">
         <img class="book-cover" src="${book_image}" alt="${title}">
         <div class="quick-view">
          <p class="quick-view-text">QUICK VIEW</p>
         </div>
        </div>
      <h2 class="book-name">${title}</h2>
      <h3 class="book-author">${author}</h3>
  </li>
  `;
      })
      .join('')}
    </ul>`;
  }
  bookCollection.innerHTML = collectionMarkup();
}


// ========================//
// On All Categories Click //
// ========================//


//             if (text.length > limit) {
//               cuttedText += '...';
//             }



