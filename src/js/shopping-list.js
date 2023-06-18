import { APIService } from './API-service';

const api = new APIService();
const fakeLocalStorage = [
  '643282b1e85766588626a0ca',
  '643282b2e85766588626a166',
  '643282b1e85766588626a0a0',
  '643282b1e85766588626a07c',
  '643282b2e85766588626a120',
  '643282b2e85766588626a10c',
  '643282b2e85766588626a12e',
  '643282b1e85766588626a0ae',
  '643282b1e85766588626a0ce',
  '643282b2e85766588626a104',
  '643282b1e85766588626a0c4',
  '643282b2e85766588626a0fa',
];

const shopList = document.querySelector('.js-shop-list');

hahdlerLocalStorage(fakeLocalStorage);

function hahdlerLocalStorage(array) {
  const a = array.map(elem => {
    getBookInfo(elem);
  });
}

async function getBookInfo(bookId) {
  const res = await api.fetchBookInfo(bookId);
  const book = await res.data;
  renderBookCard(book);
}

function renderBookCard(obj) {
  const markup = ` <li class="shop-item-book">
            <img class="shop-book-img" alt="Wrapper of book" src="${obj.book_image}" />
            <div class="shopinfo-book">
              <h2 class="shop-secondary-title">${obj.title}</h2>
              <p class="shop-category">${obj.list_name}</p>
              <p class="shop-desc">${obj.description}</p>
              <div class="shop-author-wrapper">
                <p class="shop-author">${obj.author}</p>
                <ul class="shop-platform-list">
                  <li>
                    <a href="${obj.buy_links[0].url}" class="shop-link-platform" noopener noreferrer>
                      <svg class="" width="32" height="11">
                        <use href=""></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="${obj.buy_links[1].url}" class="shop-link-platform" noopener noreferrer>
                      <svg class="" width="16" height="16">
                        <use href=""></use></svg
                    ></a>
                  </li>
                  <li>
                    <a href="${obj.buy_links[2].url}" class="shop-link-platform">
                      <svg class="" width="16" height="16">
                        <use href=""></use></svg
                    ></a>
                    <button type="button" class="shop-delete-btn js-delete-btn">
                      <svg class="" width="16" height="16">
                        <use href=""></use>
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </li>`;
  shopList.insertAdjacentHTML('beforeend', markup);
}
