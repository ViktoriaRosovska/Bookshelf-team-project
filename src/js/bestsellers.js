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
      <button class="book-card-btn" type="button" data-category="${
        category.list_name
      }">see more</button>
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

renderCategories();

// cutting text
// const limit = 18;
//             const text = book.title;
//             console.log(text);
//             let cuttedText = text.slice(0, limit);

//             if (text.length > limit) {
//               cuttedText += '...';
//             }
const titleC = document.querySelector('.collection-title');

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
    const collectionMarkup = books
      .map(({ title, book_image, author, _id }) => {
        titleC.textContent = category;
        console.log(titleC.textContent);
        return `<li class="book-card flex-element" id="${_id}">
       <div class="book-thumb">
      <img class="book-cover" src="${book_image}" alt="${title}">
      <div class="quick-view">
      <p class="quick-view-text">QUICK VIEW</p>
        </div>
        </div>
      <h2 class="book-name">${title}</h2>
      <h3 class="book-author">${author}</h3>
  </li>`;
      })
      .join('');
    bookCollection.innerHTML = collectionMarkup;
  }
}
