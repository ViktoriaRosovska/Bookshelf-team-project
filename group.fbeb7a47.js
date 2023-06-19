function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},l=o.parcelRequire9432;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},o.parcelRequire9432=l),l.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var n,a,l={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)l[t[o]]=e[t[o]]},a=function(e){var t=l[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),l("kyEFX").register(JSON.parse('{"5ZPII":"group.fbeb7a47.js","kRCxU":"amazon-icon1x.985b1de5.png","45Fu3":"amazon-icon2x.b774c146.png","3SUJU":"applebook-icon1x.a9f158e0.png","igZ6H":"applebook-icon2x.7ba433f7.png","YfQvy":"bookshop-icon1x.95f5821d.png","5pNEw":"bookshop-icon2x.2b4b4a60.png","2XmG8":"group.53a2e74c.js","9z8Um":"group.31d8c625.js"}')),l("3L4y6"),l("bUb57"),l("4R95q");var r=(l("3L4y6"),l("3L4y6"));const i=document.querySelector(".books-gallery"),s=new r.APIService;async function c(e){let t=await s.fetchBooksByCategory(e),o=await t.data;console.log(o),i.innerHTML=`<h1 class="collection-title">Books</h1>
    <ul class="top-books rendering-gap js-list-rendering">
    ${o.map(({title:e,book_image:t,author:o,_id:n})=>`<li class="book-card" id="${n}">
      <img class="book-cover" src="${t}" alt="${e}">
      <h2 class="book-name">${e}</h2>
      <h3 class="book-author">${o}</h3>
  </li>`).join("")}
    </ul>`}const d=new r.APIService,u=document.querySelector(".book-category__list");async function m(){let e=await d.fetchBooksCategoryList(),t=await e.data;return t}async function g(){try{let e=await m(),t=e.map(e=>`<li class="book-category__list-item">${e.list_name}</li>`).join("");u.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}}async function y(e){if("LI"===e.target.nodeName){if(console.log(e.target),e.target.classList.contains("active"))e.target.classList.remove("active");else{let t=document.querySelectorAll(".book-category__list-item");t.forEach(e=>e.classList.remove("active")),e.target.classList.add("active")}await c(e.target.textContent)}}u&&(g(),u.addEventListener("click",y));var r=l("3L4y6");const f=new r.APIService,p=document.querySelector(".books-collection");async function h(){let e=await f.fetchBestSellersBooks(),t=await e.data;return t}async function k(){let e="",t=await h();for(let o of(console.log(t),t))e+=`
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
  `;p.innerHTML=e}p&&(k(),p?.addEventListener("click",v));const b=document.querySelector(".collection-title");async function v(e){if("BUTTON"!==e.target.nodeName)return;let t=e.target;if(t.matches("button[data-category]")){let e=t.dataset.category;console.log(e);let o=await f.fetchBooksByCategory(e),n=await o.data;console.log(n);let a=n.map(({title:t,book_image:o,author:n,_id:a})=>(b.textContent=e,console.log(b.textContent),`<li class="flex-element" id="${a}">
      <img src="${o}" alt="${t}">
      <h2>${t}</h2>
      <p>${n}</p>
  </li>`)).join("");p.innerHTML=a}}p.addEventListener("click",v);var r=l("3L4y6"),S={};S=new URL(l("kyEFX").resolve("kRCxU"),import.meta.url).toString();var w={};w=new URL(l("kyEFX").resolve("45Fu3"),import.meta.url).toString();var _={};_=new URL(l("kyEFX").resolve("3SUJU"),import.meta.url).toString();var L={};L=new URL(l("kyEFX").resolve("igZ6H"),import.meta.url).toString();var E={};E=new URL(l("kyEFX").resolve("YfQvy"),import.meta.url).toString();var $={};$=new URL(l("kyEFX").resolve("5pNEw"),import.meta.url).toString();const x=document.querySelector("#allModal"),H=document.querySelector(".books-gallery"),q=document.querySelector(".add-storage-button"),B=document.querySelector(".remove-storage-btn"),F=document.querySelector(".storage-info"),R=new r.APIService,U="storage-data";let A=[],N={};H&&(q.addEventListener("click",function(){let e=JSON.parse(localStorage.getItem(U)),t=N;e&&0!==e.length?(e.push(t),localStorage.setItem(U,JSON.stringify(e))):(A.push(t),localStorage.setItem(U,JSON.stringify(A))),F.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",j()}),B.addEventListener("click",function(){F.textContent="";let e=N.id,t=JSON.parse(localStorage.getItem(U)),o=t.findIndex(t=>t.id===e);t.splice(o,1),localStorage.setItem(U,JSON.stringify(t)),j()}),H.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName||"UL"===e.target.nodeName||"DIV"===e.target.nodeName||"H3"===e.target.nodeName)return;let t=e.target.closest("li").id;I.classList.remove("is-hidden"),T.classList.remove("is-hidden"),O(t)}));const I=document.querySelector(".about-book-modal"),T=document.querySelector(".card-backdrop-modal");async function O(e){x.innerHTML="";try{let o=await C(e);return j(),function(e){let o=e.book_image,n=e.title,a=e.author,l=e.buy_links[0].url,r=e.buy_links[1].url,i=e.buy_links[4].url,s=e.description,c=s;""===s&&(c="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");let d=`  
  <img src="${o}" alt="Book Image" class="image-about-book-modal">
  <div class="info-modal">
  <h2 class="title-about-book-modal">${n}</h2>
  <p class="author-about-book-modal"> ${a}</p>
  <p class="text-about-book-modal">${c}</p>
  <ul class="shop-modal-list"> <li class="shop-modal-item"><a href="${l}" target="_blank"
    > <img
     width="62"
    height="19"
    srcset="
    ${t(S)} 1x,
    ${t(w)} 2x
  "
   src="${t(S)}"
    alt="Amazon"
  /></a></li>
  <li class="shop-modal-item"><a href="${r}" target="_blank"
    > <img
    width="33"
    height="32"
    srcset="
    ${t(_)} 1x,
    ${t(L)} 2x
  "
   src="${t(_)}"
    alt="AppleBooks"
  /></a></li>
  <li class="shop-modal-item"><a href="${i}" target="_blank"
    > <img
    width="38"
    height="36"
    srcset="
    ${t(E)} 1x,
    ${t($)} 2x
  "
   src="${t(E)}"
    alt="Book-Shop"
  /></a></li>
</ul>
</div>
  `;x.innerHTML=d}(o),o}catch(e){throw console.error("Error",e),e}}async function C(e){try{N={};let t=await R.fetchBookInfo(e),o=t.data;return N={book_image:o.book_image,title:o.title,author:o.author,marketAmazon:o.buy_links[0].url,marketAppleBooks:o.buy_links[1].url,marketBookshop:o.buy_links[4].url,list_name:o.list_name,id:o._id,description:o.description},o}catch(e){throw console.error("Error",e),e}}function j(){let e=JSON.parse(localStorage.getItem(U)),t=N.id;if(e&&0!==e.length){let o=e.find(e=>e.id===t);o?(q.style.display="none",B.style.display="block"):(q.style.display="block",B.style.display="none")}else{q.style.display="block",B.style.display="none";return}}const M=document.querySelector(".card-backdrop-modal"),J=document.querySelector(".modal"),X=document.getElementById("modal-close");function P(){M.classList.add("is-hidden"),J.classList.add("is-hidden"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",z)}function z(e){"Escape"===e.key&&P()}J&&(M.addEventListener("click",function(e){e.target===M&&P()}),X.addEventListener("click",function(){P()}));const Y=document.querySelector(".authorisation-btn"),Z=document.querySelector(".modal-login-form"),D=document.querySelector(".modal-login-form-close-btn"),Q=document.querySelector(".overlayLoginForm");function G(){Z.style.display="none",Q.style.display="none"}Z&&(Y.onclick=function(){Z.style.display="block",Q.style.display="block"},D.onclick=G,window.onclick=function(e){(e.target===Z||e.target===Q)&&G()},window.addEventListener("keydown",function(e){"Escape"===e.key&&G()})),l("bMp0K"),l("4Z4PC");const K={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{let e=window.scrollY||document.documentElement.scrollTop;e>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};K.addEventListener();
//# sourceMappingURL=group.fbeb7a47.js.map
