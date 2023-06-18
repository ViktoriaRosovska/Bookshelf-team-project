import trash from '../images/symbol-defs.svg#logo';
// import { APIService } from './API-service';

// const api = new APIService();
// const fakeLocalStorage = [
//   '643282b1e85766588626a0ca',
//   '643282b2e85766588626a166',
//   '643282b1e85766588626a0a0',
//   '643282b1e85766588626a07c',
//   '643282b2e85766588626a120',
//   '643282b2e85766588626a10c',
//   '643282b2e85766588626a12e',
//   '643282b1e85766588626a0ae',
//   '643282b1e85766588626a0ce',
//   '643282b2e85766588626a104',
//   '643282b1e85766588626a0c4',
//   '643282b2e85766588626a0fa',
// ];

// hahdlerLocalStorage(fakeLocalStorage);

// function hahdlerLocalStorage(array) {
//   const a = array.map(elem => {
//     getBookInfo(elem);
//   });
// }

// async function getBookInfo(bookId) {
//   const res = await api.fetchBookInfo(bookId);
//   const book = await res.data;
//   renderBookCard(book);
// }
const shopList = document.querySelector('.js-shop-list');
const shopBgd = document.querySelector('.js-shop-background');

let data = JSON.parse(localStorage.getItem('storage-data'));
// console.log(data);
renderBookCard(data);

function renderBookCard(array) {
  if (!array || array === []) {
    return;
  }
  if (shopBgd) {
    shopBgd.setAttribute('hidden', '');
  }
  if (shopList){
     const markup = array
    .map(el => {
      return ` <li class="shop-item-book">
            <img class="shop-book-img" alt="Wrapper of book" src="${el.book_image}" />
            <div class="shop-info-book">
              <h2 class="shop-secondary-title">${el.title}</h2>
              <p class="shop-category">${el.list_name}</p>
              <p class="shop-desc">${el.description}</p>
              <div class="shop-author-wrapper">
                <p class="shop-author">${el.author}</p>
                <ul class="shop-platform-list">
                  <li>
                    <a href="${el.marketAmazon}" class="shop-link-platform" noopener noreferrer>
                      <svg class="" width="32" height="11">
                        <use href=""></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="${el.marketAppleBooks}" class="shop-link-platform" noopener noreferrer>
                      <svg class="" width="16" height="16">
                        <use href=""></use></svg
                    ></a>
                  </li>
                  <li>
                    <a href="${el.marketBookshop}" class="shop-link-platform">
                      <svg class="" width="16" height="16">
                        <use href=""></use></svg
                    ></a>
                    <button type="button" class="shop-delete-btn js-delete-btn">
                     <svg class="icon-delete" >
                    <use href="${trash}"></use>
                    </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </li>`;
    })
    .join('');
  return shopList.insertAdjacentHTML('beforeend', markup);
  }
 
}

 