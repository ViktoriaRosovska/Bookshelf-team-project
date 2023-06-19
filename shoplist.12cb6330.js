var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequire9432;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var r=t[e];delete t[e];var s={id:e,exports:{}};return o[e]=s,r.call(s.exports,s,s.exports),s.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){t[e]=o},e.parcelRequire9432=r),r("3L4y6"),r("bUb57"),r("4Z4PC"),r("4R95q");const s=document.querySelector(".js-shop-list"),a=document.querySelector(".js-shop-background");function l(e){if(e&&0!==e.length&&(a&&a.setAttribute("hidden",""),s)){let o=e.map(e=>` <li id=${e.id} class="shop-item-book">
      <img class="shop-book-img" alt="Wrapper of book" src="${e.book_image}" />
            <div class="shop-info-book">
              <h2 class="shop-secondary-title">${e.title}</h2>
              <p class="shop-category">${e.list_name}</p>
              <p class="shop-desc">${e.description}</p>
              <div class="shop-author-wrapper">
                <p class="shop-author">${e.author}</p>
                <ul class="shop-platform-list">
                  <li>
                    <a href="${e.marketAmazon}" class="shop-link-amazon" noopener noreferrer>
                                         </a>
                  </li>
                  <li>

                    <a href="${e.marketAppleBooks}" class="shop-link-applebook" noopener noreferrer>
                      </a>

                  </li>
                  <li>
                    <a href="${e.marketBookshop}" class="shop-link-bookshop">
                      </a>
                   
                  </li>
                </ul>
              </div>
            </div>
             <button type="button" class="shop-delete-btn js-delete-btn">
                    </button>
          </li>`).join("");return s.insertAdjacentHTML("beforeend",o)}}s.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName){let o=e.target.parentNode.getAttribute("id");(function(e){let o=JSON.parse(localStorage.getItem("storage-data")),t=o.filter(({id:o})=>o!==e);localStorage.setItem("storage-data",JSON.stringify(t)),s.innerHTML="",l(t),t&&0!==t.length||a.removeAttribute("hidden","")})(o)}}),l(JSON.parse(localStorage.getItem("storage-data"))),r("bMp0K");
//# sourceMappingURL=shoplist.12cb6330.js.map
