var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},s=e.parcelRequire9432;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in a){var s=a[e];delete a[e];var t={id:e,exports:{}};return o[e]=t,s.call(t.exports,t,t.exports),t.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){a[e]=o},e.parcelRequire9432=s),s("3L4y6"),s("bUb57"),s("4Z4PC");var t=s("3L4y6");const r=new t.APIService;async function n(e){let o=await r.fetchBookInfo(e),a=await o.data;!function(e){if(e&&e!==[]&&(i&&i.setAttribute("hidden",""),l)){let o=` <li class="shop-item-book">
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
                    <button type="button" class="shop-delete-btn js-delete-btn">
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </li>`;l.insertAdjacentHTML("beforeend",o)}}(a)}!function(e){e.map(e=>{n(e)})}(["643282b1e85766588626a0ca","643282b2e85766588626a166","643282b1e85766588626a0a0","643282b1e85766588626a07c","643282b2e85766588626a120","643282b2e85766588626a10c","643282b2e85766588626a12e","643282b1e85766588626a0ae","643282b1e85766588626a0ce","643282b2e85766588626a104","643282b1e85766588626a0c4","643282b2e85766588626a0fa"]);const l=document.querySelector(".js-shop-list"),i=document.querySelector(".js-shop-background");s("bMp0K");
//# sourceMappingURL=shoplist.5422503b.js.map
