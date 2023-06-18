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
  // console.log(topBooks);
  for (let category of topBooks) {
    bookCategories += createBookCategoryMarkup(category);
  }
  bookCollection.innerHTML = bookCategories;
}

if (bookCollection) {
  renderCategories();
}


// cutting text
// const limit = 18;
//             const text = book.title;
//             console.log(text);
//             let cuttedText = text.slice(0, limit);

//             if (text.length > limit) {
//               cuttedText += '...';
//             }



