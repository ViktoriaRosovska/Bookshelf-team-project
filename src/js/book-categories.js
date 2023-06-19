import { APIService } from './API-service';
import createMarkup from './book-categories-rendering';

const api = new APIService();

const categoriesList = document.querySelector('.book-category__list');
// const bookCollection = document.querySelector('.books-gallery');


async function getBooksCategoryList() {
    const resp = await api.fetchBooksCategoryList()
    const data = await resp.data;
    return data;    

}

async function getBookCategory() {
    try {
        const categories = await getBooksCategoryList();
        const markup = categories.map((cat) => `<li class="book-category__list-item">${cat.list_name}</li>`).join("");
        categoriesList.insertAdjacentHTML("beforeend", markup);
    } catch (error) {
        console.log(error);
    }
}

if (categoriesList)
{
    getBookCategory();

    categoriesList.addEventListener('click', onCategoryListSearchCategory);
}

async function onCategoryListSearchCategory(e) {
    if (e.target.nodeName !== 'LI') {
        return;
    }
    console.log(e.target);
    
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
       
    } else {
        const items = document.querySelectorAll('.book-category__list-item');
        items.forEach((el) => el.classList.remove('active'));
        e.target.classList.add('active');
       
    }

    await createMarkup(e.target.textContent);
}

