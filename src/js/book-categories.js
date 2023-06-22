import { APIService } from './API-service';
import createMarkup from './book-categories-rendering';
import renderCategories from './bestsellers';
import {reportsFailure} from './notificationsNotiflix';
import { Loading } from 'notiflix';

const api = new APIService();

const categoriesList = document.querySelector('.book-category__list');
// const bookCollection = document.querySelector('.books-gallery');

async function getBooksCategoryList() {
  try {
    Loading.standard('Loading...');
    //  if (!response.ok) {
    //   throw new Error();
    //    return
    // }
  const resp = await api.fetchBooksCategoryList();
   Loading.remove('Loading...');
  const data = await resp.data;
    return data;
     } catch (error) {
    console.log(error);
     reportsFailure('Sorry, no books 555 were found. Please try again.')
  }
}

async function getBookCategory() {
  // try {
 
    const categories = await getBooksCategoryList();
   
    const markup = categories
      .map(cat => `<li class="book-category__list-item">${cat.list_name}</li>`)
      .join('');
    categoriesList.insertAdjacentHTML('beforeend', markup);
} 
  // catch (error) {
  //   console.log(error);
  //    reportsFailure('Sorry, no books were found. Please try again.')
  // }
// }

if (categoriesList) {
  getBookCategory();

  categoriesList.addEventListener('click', onCategoryListSearchCategory);
}


async function onCategoryListSearchCategory(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }

  const category = e.target.textContent;
  highlightCategory(category);

  if (category !== 'All categories') {
    await createMarkup(category);
  } else {
    await renderCategories();
  }
}

export function highlightCategory(category) {
  const items = document.querySelectorAll('.book-category__list-item');

  for (const item of items) {
    if (item.textContent === category)
      item.classList.add('active');
    else
      item.classList.remove('active');
  }
}