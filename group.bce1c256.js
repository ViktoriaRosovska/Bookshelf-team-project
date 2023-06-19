function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},r=o.parcelRequire9432;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){l[e]=t},o.parcelRequire9432=r),r.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return l},function(e){return l=e});var n,l,r={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)r[t[o]]=e[t[o]]},l=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),r("kyEFX").register(JSON.parse('{"5ZPII":"group.bce1c256.js","kRCxU":"amazon-icon1x.985b1de5.png","45Fu3":"amazon-icon2x.b774c146.png","3SUJU":"applebook-icon1x.a9f158e0.png","igZ6H":"applebook-icon2x.7ba433f7.png","YfQvy":"bookshop-icon1x.95f5821d.png","5pNEw":"bookshop-icon2x.2b4b4a60.png","2XmG8":"group.53a2e74c.js","9z8Um":"group.31d8c625.js"}')),r("3L4y6"),r("bUb57"),r("4R95q");var a=(r("3L4y6"),r("3L4y6"));const i=document.querySelector(".books-gallery"),s=new a.APIService;async function c(e){let t=await s.fetchBooksByCategory(e),o=await t.data;console.log(o),i.innerHTML=`<h1 class="collection-title">Books</h1>
    <ul class="top-books rendering-gap js-list-rendering">
    ${o.map(({title:e,book_image:t,author:o,_id:n})=>`<li class="book-card" id="${n}">
      <img class="book-cover" src="${t}" alt="${e}">
      <h2 class="book-name">${e}</h2>
      <h3 class="book-author">${o}</h3>
  </li>`).join("")}
    </ul>`}const d=new a.APIService,u=document.querySelector(".book-category__list");async function m(){let e=await d.fetchBooksCategoryList(),t=await e.data;return t}async function g(){try{let e=await m(),t=e.map(e=>`<li class="book-category__list-item">${e.list_name}</li>`).join("");u.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}}async function y(e){if("LI"===e.target.nodeName){if(console.log(e.target),e.target.classList.contains("active"))e.target.classList.remove("active");else{let t=document.querySelectorAll(".book-category__list-item");t.forEach(e=>e.classList.remove("active")),e.target.classList.add("active")}await c(e.target.textContent)}}u&&(g(),u.addEventListener("click",y));var a=r("3L4y6");const f=new a.APIService,p=document.querySelector(".books-collection");async function b(){let e=await f.fetchBestSellersBooks(),t=await e.data;return t}async function h(){let e="",t=await b();for(let o of(console.log(t),t))e+=`
    <li class="book-category-item">
      <p class="book-category">${o.list_name}</p>
      <ul class="top-books js-list-rendering">
        ${o.books.map(e=>`
              <li class="book-card flex-element" id=${e._id}>
                <img class="book-cover" src="${e.book_image}" alt="${e.title}" />
                <h2 class="book-name">${e.title}</h2>
                <h3 class="book-author">${e.author}</h3>
              </li>
            `).join("")}
      </ul>
      <button class="book-card-btn" type="button">see more</button>
    </li>
  `;p.innerHTML=e}p&&(h(),p?.addEventListener("click",onSeeMoreBtnClick));var a=r("3L4y6"),k={};k=new URL(r("kyEFX").resolve("kRCxU"),import.meta.url).toString();var v={};v=new URL(r("kyEFX").resolve("45Fu3"),import.meta.url).toString();var S={};S=new URL(r("kyEFX").resolve("3SUJU"),import.meta.url).toString();var _={};_=new URL(r("kyEFX").resolve("igZ6H"),import.meta.url).toString();var w={};w=new URL(r("kyEFX").resolve("YfQvy"),import.meta.url).toString();var L={};L=new URL(r("kyEFX").resolve("5pNEw"),import.meta.url).toString();const E=document.querySelector("#allModal"),$=document.querySelector(".books-gallery"),x=document.querySelector(".add-storage-button"),H=document.querySelector(".remove-storage-btn"),q=document.querySelector(".storage-info"),F=new a.APIService,R="storage-data";let A=[],B={};$&&(x.addEventListener("click",function(){let e=JSON.parse(localStorage.getItem(R)),t=B;e&&0!==e.length?(e.push(t),localStorage.setItem(R,JSON.stringify(e))):(A.push(t),localStorage.setItem(R,JSON.stringify(A))),q.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",T()}),H.addEventListener("click",function(){q.textContent="";let e=B.id,t=JSON.parse(localStorage.getItem(R)),o=t.findIndex(t=>t.id===e);t.splice(o,1),localStorage.setItem(R,JSON.stringify(t)),T()}),$.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName||"UL"===e.target.nodeName||"DIV"===e.target.nodeName||"H3"===e.target.nodeName)return;let t=e.target.closest("li").id;U.classList.remove("is-hidden"),I.classList.remove("is-hidden"),N(t)}));const U=document.querySelector(".about-book-modal"),I=document.querySelector(".card-backdrop-modal");async function N(e){E.innerHTML="";try{let o=await O(e);return T(),function(e){let o=e.book_image,n=e.title,l=e.author,r=e.buy_links[0].url,a=e.buy_links[1].url,i=e.buy_links[4].url,s=e.description,c=s;""===s&&(c="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");let d=`  
  <img src="${o}" alt="Book Image" class="image-about-book-modal">
  <div class="info-modal">
  <h2 class="title-about-book-modal">${n}</h2>
  <p class="author-about-book-modal"> ${l}</p>
  <p class="text-about-book-modal">${c}</p>
  <ul class="shop-modal-list"> <li class="shop-modal-item"><a href="${r}" target="_blank"
    > <img
     width="62"
    height="19"
    srcset="
    ${t(k)} 1x,
    ${t(v)} 2x
  "
   src="${t(k)}"
    alt="Amazon"
  /></a></li>
  <li class="shop-modal-item"><a href="${a}" target="_blank"
    > <img
    width="33"
    height="32"
    srcset="
    ${t(S)} 1x,
    ${t(_)} 2x
  "
   src="${t(S)}"
    alt="AppleBooks"
  /></a></li>
  <li class="shop-modal-item"><a href="${i}" target="_blank"
    > <img
    width="38"
    height="36"
    srcset="
    ${t(w)} 1x,
    ${t(L)} 2x
  "
   src="${t(w)}"
    alt="Book-Shop"
  /></a></li>
</ul>
</div>
  `;E.innerHTML=d}(o),o}catch(e){throw console.error("Error",e),e}}async function O(e){try{B={};let t=await F.fetchBookInfo(e),o=t.data;return B={book_image:o.book_image,title:o.title,author:o.author,marketAmazon:o.buy_links[0].url,marketAppleBooks:o.buy_links[1].url,marketBookshop:o.buy_links[4].url,list_name:o.list_name,id:o._id,description:o.description},o}catch(e){throw console.error("Error",e),e}}function T(){let e=JSON.parse(localStorage.getItem(R)),t=B.id;if(e&&0!==e.length){let o=e.find(e=>e.id===t);o?(x.style.display="none",H.style.display="block"):(x.style.display="block",H.style.display="none")}else{x.style.display="block",H.style.display="none";return}}const j=document.querySelector(".card-backdrop-modal"),C=document.querySelector(".modal"),M=document.getElementById("modal-close");function J(){j.classList.add("is-hidden"),C.classList.add("is-hidden"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",X)}function X(e){"Escape"===e.key&&J()}C&&(j.addEventListener("click",function(e){e.target===j&&J()}),M.addEventListener("click",function(){J()}));const P=document.querySelector(".authorisation-btn"),z=document.querySelector(".modal-login-form"),Y=document.querySelector(".modal-login-form-close-btn"),Z=document.querySelector(".overlayLoginForm");z&&(P.onclick=function(){z.style.display="block",Z.style.display="block"},Y.onclick=function(){z.style.display="none",Z.style.display="none"},window.onclick=function(e){e.target==z&&(z.style.display="none")}),r("bMp0K"),r("4Z4PC");const D={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{let e=window.scrollY||document.documentElement.scrollTop;e>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};D.addEventListener();
//# sourceMappingURL=group.bce1c256.js.map
