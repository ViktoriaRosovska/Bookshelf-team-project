import { Loading } from 'notiflix';
import Pagination from 'tui-pagination';

//оголошення змінних
const shopList = document.querySelector('.js-shop-list'); //посидання на список, куди додаються картки книжок
const shopBgd = document.querySelector('.js-shop-background'); //посилання на div з базовою картинкою
const currentPage = 1;
const itemsPerPage = getItemsPerPage();

shopList.addEventListener('click', onBtnTrashClick);

let data = JSON.parse(localStorage.getItem('storage-data')); // отримаємо данні з localStorage

function getItemsPerPage() {
  //функція визначення кількості карток, що відображаються, в залежності від розміру екрану
  const screenWidth = window.innerWidth;

  if (screenWidth < 767.99) {
    return 4;
  } else if (screenWidth > 768 && screenWidth < 1439.98) {
    return 5;
  } else if (screenWidth > 1440) {
    return 6;
  }
}

renderBookCard(data); // визиваємо функцію рендера розмітки карток

// функція pендеру карток з книгами з localStorage
function renderBookCard(array) {
  Loading.standard('Loading...');
  if (!array || array.length === 0) {
    Loading.remove('Loading...');
    return;
  }
  if (shopBgd) {
    shopBgd.setAttribute('hidden', '');
  }

  if (shopList) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleData = array.slice(startIndex, endIndex);

    const markup = visibleData
      .map(el => {
        return `
          <li id=${el.id} class="shop-item-book">
            <img class="shop-book-img" alt="Wrapper of book" src="${el.book_image}" />
            <div class="shop-info-book">
              <h2 class="shop-secondary-title">${el.title}</h2>
              <p class="shop-category">${el.list_name}</p>
              <p class="shop-desc">${el.description}</p>
              <div class="shop-author-wrapper">
                <p class="shop-author">${el.author}</p>
                <ul class="shop-platform-list">
                  <li>
                    <a href="${el.marketAmazon}" class="shop-link-amazon" noopener noreferrer></a>
                  </li>
                  <li>
                    <a href="${el.marketAppleBooks}" class="shop-link-applebook" noopener noreferrer></a>
                  </li>
                  <li>
                    <a href="${el.marketBookshop}" class="shop-link-bookshop"></a>
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" class="shop-delete-btn js-delete-btn"></button>
          </li>`;
      })
      .join('');

    Loading.remove('Loading...');
    shopList.innerHTML = markup;

    // створення пагінації
    const totalItems = array.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const options = {
      totalItems,
      itemsPerPage,
      visiblePages: 5,
      centerAlign: true,
    };

    const pagination = new Pagination('#pagination', options);

    pagination.on('beforeMove', event => {
      const currentPage = event.page;

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const visibleData = array.slice(startIndex, endIndex);

      const newMarkup = visibleData
        .map(el => {
          return `
            <li id=${el.id} class="shop-item-book">
              <img class="shop-book-img" alt="Wrapper of book" src="${el.book_image}" />
              <div class="shop-info-book">
                <h2 class="shop-secondary-title">${el.title}</h2>
                <p class="shop-category">${el.list_name}</p>
                <p class="shop-desc">${el.description}</p>
                <div class="shop-author-wrapper">
                  <p class="shop-author">${el.author}</p>
                  <ul class="shop-platform-list">
                    <li>
                      <a href="${el.marketAmazon}" class="shop-link-amazon" noopener noreferrer></a>
                    </li>
                    <li>
                      <a href="${el.marketAppleBooks}" class="shop-link-applebook" noopener noreferrer></a>
                    </li>
                    <li>
                      <a href="${el.marketBookshop}" class="shop-link-bookshop"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <button type="button" class="shop-delete-btn js-delete-btn"></button>
            </li>`;
        })
        .join('');

      shopList.innerHTML = newMarkup;
    });
  }
}

function onBtnTrashClick(evt) {
  if (evt.target.nodeName === 'BUTTON') {
    const id = evt.target.parentNode.getAttribute('id');
    removeBookFromLocalStorage(id);
  }
}

function removeBookFromLocalStorage(bookId) {
  const data = JSON.parse(localStorage.getItem('storage-data'));
  const newData = data.filter(({ id }) => id !== bookId);
  localStorage.setItem('storage-data', JSON.stringify(newData));
  shopList.innerHTML = '';
  renderBookCard(newData);
  if (!newData || newData.length === 0) {
    shopBgd.removeAttribute('hidden', '');
    Loading.remove('Loading...');
  }
}
