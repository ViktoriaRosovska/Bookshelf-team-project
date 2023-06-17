
import axios from 'axios';
import { APIService } from './API-service';


// const BASE_URL = 'https://books-backend.p.goit.global/';

// axios.defaults.baseURL = BASE_URL;


const api = new APIService();

const categoriesList = document.querySelector('.book-category__list');
const bookCollection = document.querySelector('.books-gallery');


async function fetchCategory() {
    const res = await axios("/books/category-list");
    const data = await res.data;
    console.log(data) 
    return data; 
      

async function getBooksCategoryList() {
    const resp = await api.fetchBooksCategoryList()
    const data = await resp.data;
    return data;    

}


async function renderBooksByCategory(category){
    const res = await api.fetchBooksByCategory(category);
    const books = await res.data;
    console.log(books);
    const collectionMarkup = books.map((book) => {
       return `<div><p>Hello I am a book ${book.title}</p></div>`
    }).join("");
    bookCollection.innerHTML = collectionMarkup;
  }



async function getBookCategory() {
    try {
       
        const categories = await getBooksCategoryList();
        console.log(categories);
        const markup = categories.map((cat) => `<li class="book-category__list-item">${cat.list_name}</li>`).join("");
        categoriesList.insertAdjacentHTML("beforeend", markup);
    } catch (error) {
        console.log(error);
    }
}
getBookCategory();


categoriesList.addEventListener('click', onCategoryListSearchCategory);



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
    await renderBooksByCategory(e.target.textContent);
}

