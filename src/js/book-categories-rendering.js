const BASE_URL_MY = "https://books-backend.p.goit.global/books/category?category=";
const ENDPOINT = "Series%20Books";
const API_KEY = "";
let page = 1;
const list = document.querySelector(".js-list-rendering");
const loadMore = document.querySelector(".js-load_more-rendering");
loadMore.addEventListener("click", handlerPagination);

function handlerPagination() {
    page += 1;
    servisMovi(page)
      .then((data) => {
        list.insertAdjacentHTML("beforeend", createMarkup(data.results));
      })
      .catch((err) => console.log(err));
  }
  
  function servisBook(page) {
    return fetch(`${BASE_URL_MY}${ENDPOINT}`).then((resp) => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    });
  }
  
  servisBook()
    .then((data) => {
      list.insertAdjacentHTML("beforeend", createMarkup(data));
    })
    .catch((err) => console.log(err));
  
  function createMarkup(arr) {
    return arr
      .map(
        ({ title, book_image, author }) => `<li class="flex-element">
      <img src="${book_image}" alt="${title}">
      <h2>${title}</h2>
      <p>${author}</p>
  </li>`
      )
      .join("");
  }