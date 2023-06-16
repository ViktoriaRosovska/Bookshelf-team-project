import axios from 'axios';

export class APIService {
  #BASE_URL = 'https://books-backend.p.goit.global/';

  //   constructor(query, page) {
  //     this.query = query;
  //     this.page = page;
  //   }

  //axios.defaults.baseURL = #BASE_URL;

  fetchBooksCategoryList() {
    return axios.get(
      `${this.#BASE_URL}books/category-list`
    );
  }

  fetchBestSellersBooks() {
    return axios.get(
      `${this.#BASE_URL}books/top-books`
    );
  }

  fetchBooksByCategory(selectedCategory) {
    return axios.get(
      `${this.#BASE_URL}books/category?category=${selectedCategory}`
    );
  }

  fetchBooksDescription(bookId) {
    return axios.get(
      `${this.#BASE_URL}books/bookId${bookId}`
    );
  }
}

APIService.fetchBooksCategoryList()
APIService.fetchBestSellersBooks()
APIService.fetchBooksByCategory()
APIService.fetchBooksDescription()
console.log(APIService.fetchBooksCategoryList);
console.log(APIService.fetchBestSellersBooks());

