import axios from 'axios';

export class APIService {
  #BASE_URL = 'https://books-backend.p.goit.global/';

  constructor(selectedCategory, bookId) {
    this.selectedCategory = selectedCategory;
    this.bookId = bookId;
  }

  // запит на категорії книг
  fetchBooksCategoryList() {
    return axios.get(`${this.#BASE_URL}books/category-list`);
  }

  // запит на популярні книги(BestSellersBooks)
  fetchBestSellersBooks() {
    return axios.get(`${this.#BASE_URL}books/top-books`);
  }

  // запит на книги по категорії, приймає обрану категорію книги
  fetchBooksByCategory(selectedCategory) {
    return axios.get(
      `${this.#BASE_URL}books/category?category=${selectedCategory}`
    );
  }

  // запит на інформацію про книгу, приймає Іd книги
  fetchBookInfo(bookId) {
    return axios.get(`${this.#BASE_URL}books/${bookId}`);
  }
  
}

//const api = new APIService();

// getBooksCategoryList()
// async function getBooksCategoryList(){
//   const resp = await api.fetchBooksCategoryList()
//   const categoryList = await resp.data
//    //console.log(categoryList);
//   }

// getBestSellers();
// async function getBestSellers() {
//   const response = await api.fetchBestSellersBooks();
//   const bestSellers = await response.data;
//   console.log(bestSellers);
// }

// getBooksByCategory()
// async function getBooksByCategory(){
//   const res = await api.fetchBooksByCategory("Picture Books")
//   const books = await res.data
//    console.log(books);
//   }

// getBookInfo();
// async function getBookInfo() {
//   const res = await api.fetchBookInfo('643282b1e85766588626a0dc');
//   const book = await res.data;
//   console.log(book);
// }
