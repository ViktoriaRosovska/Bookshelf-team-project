function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},a=o.parcelRequire9432;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){l[e]=t},o.parcelRequire9432=a),a.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return l},function(e){return l=e});var n,l,a={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)a[t[o]]=e[t[o]]},l=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a("kyEFX").register(JSON.parse('{"5ZPII":"group.562331f6.js","kRCxU":"amazon-icon1x.985b1de5.png","45Fu3":"amazon-icon2x.b774c146.png","3SUJU":"applebook-icon1x.a9f158e0.png","igZ6H":"applebook-icon2x.7ba433f7.png","YfQvy":"bookshop-icon1x.95f5821d.png","5pNEw":"bookshop-icon2x.2b4b4a60.png","6jx86":"group.42fd8a3f.js","5V3mG":"group.fafe6696.js"}')),a("3L4y6"),a("bUb57"),a("4R95q");var i=(a("3L4y6"),a("3L4y6"));const s=document.querySelector(".books-gallery"),r=new i.APIService;async function c(e){var t;let o;let n=await r.fetchBooksByCategory(e);console.log(n);let l=await n.data;console.log(l),s.innerHTML=`<h1 class="collection-title">${(o=e.split(" ")).pop(),o.join(" ")} <span>${(t=e.trim().split(" "))[t.length-1]}</span></h1>
    <ul class="top-books rendering-gap js-list-rendering">

    ${l.map(({title:e,book_image:t,author:o,_id:n})=>`<li class="book-card" id="${n}">
        <div class="book-thumb">
      <img class="book-cover" src="${t}" alt="${e}">
      <div class="quick-view">
                <p class="quick-view-text">QUICK VIEW</p>
                </div>
                </div>
      <h2 class="book-name">${e}</h2>
      <h3 class="book-author">${o}</h3>
  </li>`).join("")}
    </ul>
    
    `}var i=a("3L4y6");const d=new i.APIService,u=document.querySelector(".books-gallery");async function m(){try{let e=await d.fetchBestSellersBooks(),t=await e.data;return t}catch(e){console.log(e)}}async function g(){let e='<ul class="top-books rendering-gap js-list-rendering">';try{let t=await m();for(let o of t)e+=`
  
    <li class="book-category-item">
      <p class="book-category">${o.list_name}</p>
      <ul class="top-books bestsel-books js-list-rendering">
        ${o.books.map(e=>`
              <li class="book-card flex-element" id=${e._id}>
              <div class="book-thumb">
                <img class="book-cover" src="${e.book_image}" alt="${e.title}" />
                <div class="quick-view">
                <p class="quick-view-text">QUICK VIEW</p>
                </div>
                </div>
                <h2 class="book-name">${e.title}</h2>
                <h3 class="book-author">${e.author}</h3>
              </li>
            `).join("")}
      </ul>
      <button class="book-card-btn" type="button" data-category="${o.list_name}">see more</button>
    </li>
  `;e+="</ul>",u.innerHTML='<h1 class="collection-title">Best Sellers <span>Books</span></h1>';let o=document.createElement("div");o.className="books-collection",o.innerHTML=e,o.addEventListener("click",p),u.appendChild(o)}catch(e){console.log(error)}}if(u)try{g()}catch(e){console.log(e)}async function p(e){if("BUTTON"!==e.target.nodeName)return;let t=e.target;try{if(t.matches("button[data-category]")){var o;let e;let n=t.dataset.category,l=u.querySelector(".collection-title");l.innerHTML=`${(e=n.split(" ")).pop(),e.join(" ")} <span>${(o=n.trim().split(" "))[o.length-1]}</span>`,w(n),await b(n)}}catch(e){console.log(e)}}async function b(e){try{let t=await d.fetchBooksByCategory(e),o=await t.data,n=u.querySelector(".books-collection");n.innerHTML=`
    <ul class="top-books rendering-gap js-list-rendering">
    ${o.map(({title:e,book_image:t,author:o,_id:n})=>`
        <li class="book-card" id=${n}>
        <div class="book-thumb">
         <img class="book-cover" src="${t}" alt="${e}">
         <div class="quick-view">
          <p class="quick-view-text">QUICK VIEW</p>
         </div>
        </div>
      <h2 class="book-name">${e}</h2>
      <h3 class="book-author">${o}</h3>
  </li>
  `).join("")}
    </ul>`}catch(e){console.log(e)}}const h=new i.APIService,y=document.querySelector(".book-category__list");async function f(){let e=await h.fetchBooksCategoryList(),t=await e.data;return t}async function k(){try{let e=await f(),t=e.map(e=>`<li class="book-category__list-item">${e.list_name}</li>`).join("");y.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}}async function v(e){if("LI"!==e.target.nodeName)return;let t=e.target.textContent;w(t),"All categories"!==t?await c(t):await g()}function w(e){let t=document.querySelectorAll(".book-category__list-item");for(let o of t)o.textContent===e?o.classList.add("active"):o.classList.remove("active")}y&&(k(),y.addEventListener("click",v));var i=a("3L4y6"),S={};S=new URL(a("kyEFX").resolve("kRCxU"),import.meta.url).toString();var _={};_=new URL(a("kyEFX").resolve("45Fu3"),import.meta.url).toString();var L={};L=new URL(a("kyEFX").resolve("3SUJU"),import.meta.url).toString();var E={};E=new URL(a("kyEFX").resolve("igZ6H"),import.meta.url).toString();var $={};$=new URL(a("kyEFX").resolve("YfQvy"),import.meta.url).toString();var x={};x=new URL(a("kyEFX").resolve("5pNEw"),import.meta.url).toString();const H=document.querySelector("#allModal"),q=document.querySelector(".books-gallery"),B=document.querySelector(".add-storage-button"),I=document.querySelector(".remove-storage-btn"),U=document.querySelector(".storage-info"),A=new i.APIService,R="storage-data";let F=[],N={};q&&(B?.addEventListener("click",function(){let e=JSON.parse(localStorage.getItem(R));N.description||(N.description="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");let t=N;e&&0!==e.length?(e.push(t),localStorage.setItem(R,JSON.stringify(e))):(F=[t],localStorage.setItem(R,JSON.stringify(F))),U.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",M()}),I?.addEventListener("click",function(){U.textContent="";let e=N.id,t=JSON.parse(localStorage.getItem(R)),o=t.findIndex(t=>t.id===e);t.splice(o,1),localStorage.setItem(R,JSON.stringify(t)),M()}),q.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName||"UL"===e.target.nodeName||"DIV"===e.target.nodeName||"H3"===e.target.nodeName)return;let t=e.target.closest("li").id;T?.classList.remove("is-hidden"),j?.classList.remove("is-hidden"),document.body.style.overflow="hidden",C(t)}));const T=document.querySelector(".about-book-modal"),j=document.querySelector(".card-backdrop-modal");async function C(e){H&&(H.innerHTML="");try{let o=await O(e);return M(),function(e){let o=e.book_image,n=e.title,l=e.author,a=e.buy_links[0].url,i=e.buy_links[1].url,s=e.buy_links[4].url,r=e.description,c=r;""===r&&(c="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");let d=`  
  <img src="${o}" alt="Book Image" class="image-about-book-modal">
  <div class="info-modal">
  <h2 class="title-about-book-modal">${n}</h2>
  <p class="author-about-book-modal"> ${l}</p>
  <p class="text-about-book-modal">${c}</p>
  <ul class="shop-modal-list"> <li class="shop-modal-item"><a href="${a}" target="_blank"
    > <img class="amazon"
     width="62"
    height="19"
    srcset="
    ${t(S)} 1x,
    ${t(_)} 2x
  "
   src="${t(S)}"
    alt="Amazon"
  /></a></li>
  <li class="shop-modal-item"><a href="${i}" target="_blank"
    > <img class="marketApple"
    width="33"
    height="32"
    srcset="
    ${t(L)} 1x,
    ${t(E)} 2x
  "
   src="${t(L)}"
    alt="AppleBooks"
  /></a></li>
  <li class="shop-modal-item"><a href="${s}" target="_blank"
    > <img
    width="38"
    height="36"
    srcset="
    ${t($)} 1x,
    ${t(x)} 2x
  "
   src="${t($)}"
    alt="Book-Shop"
  /></a></li>
</ul>
</div>
  `;H.innerHTML=d}(o),o}catch(e){console.log("Error",e)}}async function O(e){try{N={};let t=await A.fetchBookInfo(e),o=t.data;return N={book_image:o.book_image,title:o.title,author:o.author,marketAmazon:o.buy_links[0].url,marketAppleBooks:o.buy_links[1].url,marketBookshop:o.buy_links[4].url,list_name:o.list_name,id:o._id,description:o.description},o}catch(e){console.log("Error",e)}}function M(){let e=JSON.parse(localStorage.getItem(R)),t=N.id;if(e&&0!==e.length){let o=e.find(e=>e.id===t);o?(B.style.display="none",I.style.display="block"):(B.style.display="block",(I?.style).display="none")}else{B.style.display="block",I.style.display="none";return}}const J=document.querySelector(".card-backdrop-modal"),X=document.querySelector(".modal"),P=document.getElementById("modal-close");function Z(){J?.classList.add("is-hidden"),X?.classList.add("is-hidden"),document.body?.classList.remove("modal-open"),document.removeEventListener("keydown",z),document.body.style.overflow=""}function z(e){"Escape"===e.code&&Z()}X&&(J?.addEventListener("click",function(e){e.target===J&&Z()}),P?.addEventListener("click",function(){Z()}),window.addEventListener("keydown",z)),a("hZAS5"),a("bMp0K"),a("4Z4PC");const Q={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{let e=window.scrollY||document.documentElement.scrollTop;e>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};Q.addEventListener(),a("fPeBo"),a("bXRWl"),a("bMZn5");
//# sourceMappingURL=group.562331f6.js.map
