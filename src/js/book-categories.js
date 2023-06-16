// [
//   { list_name: 'Hardcover Fiction' },
//   { list_name: 'Business Books' },
//   { list_name: 'Paperback Nonfiction' },
//   { list_name: 'Middle Grade Paperback Monthly' },
//   { list_name: 'Hardcover Nonfiction' },
//   { list_name: 'Combined Print and E-Book Fiction' },
//   { list_name: 'Picture Books' },
//   { list_name: 'Mass Market Monthly' },
//   { list_name: 'Childrens Middle Grade Hardcover' },
//   { list_name: 'Audio Fiction' },
//   { list_name: 'Combined Print and E-Book Nonfiction' },
//   { list_name: 'Advice How-To and Miscellaneous' },
//   { list_name: 'Young Adult Hardcover' },
//   { list_name: 'Series Books' },
//   { list_name: 'Audio Nonfiction' },
//   { list_name: 'Young Adult Paperback Monthly' },
//   { list_name: 'Trade Fiction Paperback' },
//   { list_name: 'Graphic Books and Manga' },
// ];
import axios from 'axios';


const BASE_URL = 'https://books-backend.p.goit.global/';

axios.defaults.baseURL = BASE_URL;


async function fetchCategory() {
    const res = await axios("/books/category-list");
    const data = await res.data;
    return data;    
}

const categoriesList = document.querySelector('.book-category__list');
async function getBookCategory() {
    try {
        const categories = await fetchCategory();
        console.log(categories);
        const markup = categories.map((cat) => `<li class="book-category__list-item">${cat.list_name}</li>`).join("");
        categoriesList.insertAdjacentHTML("beforeend", markup);
    } catch (error) {
        console.log(error);
    }
}
getBookCategory();

categoriesList.addEventListener('click', onCategoryListSearchCategory);

function onCategoryListSearchCategory(e) {
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
}

