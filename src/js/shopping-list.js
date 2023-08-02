import { Loading } from 'notiflix';
import Pagination from 'tui-pagination';

//оголошення змінних
const shopList = document.querySelector('.js-shop-list'); //посидання на список, куди додаються картки книжок
const shopBgd = document.querySelector('.js-shop-background'); //посилання на div з базовою картинкою
const currentPage = 1;
let itemsPerPage = getItemsPerPage();
const paginat = document.querySelector('#pagination');
const removeBtn = document.querySelector('.remove-books');
const amountBooks = document.querySelector('.amount-books');

shopList.addEventListener('click', onBtnTrashClick);
removeBtn.addEventListener('click', onBtnRemoveClick);

let data = JSON.parse(localStorage.getItem('storage-data')); // отримаємо данні з localStorage

// window.addEventListener('resize', () => {
//   location.reload();
// });

function getItemsPerPage() {
  //функція визначення кількості карток, що відображаються, в залежності від розміру екрану
  const screenWidth = document.documentElement.clientWidth;

  if (screenWidth > 1440) {
    return 3;
  } else if (screenWidth > 768 && screenWidth < 1439.98) {
    return 3;
  } else if (screenWidth < 767.99) {
    return 3;
  }
}

renderBookCardPagination(data); // визиваємо функцію рендера розмітки карток

// функція pендеру карток з книгами з localStorage
function renderBookCardPagination(array) {
  if (!array || array.length === 0) {
    Loading.remove('Loading...');
    return;
  }

  if (shopBgd) {
    shopBgd.setAttribute('hidden', '');
    removeBtn.removeAttribute('hidden', '');
  }

  if (shopList) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleData = array.slice(startIndex, endIndex);
    renderBook(visibleData);

    // створення пагінації

    const totalItems = array.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    let amount = 2;
    if (window.innerWidth > 768) {
      amount = 3;
    }

    const options = {
      totalItems,
      itemsPerPage,
      visiblePages: amount,
      // centerAlign: true,
    };

    const pagination = new Pagination('#pagination', options);
    pagination.on('beforeMove', event => {
      const currentPage = event.page;

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const visibleData = array.slice(startIndex, endIndex);
      renderBook(visibleData);
    });
  }
  if (array.length < itemsPerPage || array.length === itemsPerPage) {
    paginat.innerHTML = '';
  }
}
function renderBook(array) {
  //функція, яка створює розмітку карток
  Loading.standard('Loading...');

  const markup = array
    .map(el => {
      return `
<li id=${el.id} class="shop-item-book"><img class="shop-book-img" alt="Wrapper of book" src="${el.book_image}" loading="lazy"/>
            <div class="shop-info-book">
              <h2 class="shop-secondary-title">${el.title}</h2>
              <p class="shop-category">${el.list_name}</p>
              <p class="shop-desc">${el.description}</p>
              <div class="shop-author-wrapper">
                <p class="shop-author">${el.author}</p>
                <ul class="shop-platform-list">
                  <li><a href="${el.marketAmazon}" class="shop-link-amazon" target="_blank" rel="noopener noreferrer"></a>
                  </li>
                  <li>
                  <a href="${el.marketAppleBooks}" class="shop-link-applebook" target="_blank" rel="noopener noreferrer"></a>
                  </li>
                  <li><a href="${el.marketBookshop}" class="shop-link-bookshop" target="_blank" rel="noopener noreferrer"></a>
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" class="shop-delete-btn js-delete-btn"></button>
          </li>`;
    })
    .join('');
  Loading.remove('Loading...');

  const dataAmount = JSON.parse(localStorage.getItem('storage-data'));
  amountBooks.innerHTML = `You have ${dataAmount.length} book(s) in your shopping-list`;
  shopList.innerHTML = markup;
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
  renderBookCardPagination(newData);
  if (!newData || newData.length === 0) {
    shopBgd.removeAttribute('hidden', '');
    removeBtn.setAttribute('hidden', '');
    paginat.innerHTML = '';
  }

  if (newData.length < itemsPerPage || newData.length === itemsPerPage) {
    paginat.innerHTML = '';
  }
  Loading.remove('Loading...');
}

function onBtnRemoveClick() {
  Loading.standard('Loading...');
  localStorage.removeItem('storage-data');
  shopList.innerHTML = '';
  shopBgd.removeAttribute('hidden', '');
  removeBtn.setAttribute('hidden', '');
  paginat.innerHTML = '';
  Loading.remove('Loading...');
}
