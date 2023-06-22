function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=o.parcelRequire9432;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},o.parcelRequire9432=i),i.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var n,a,i={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},a=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i("kyEFX").register(JSON.parse('{"5ZPII":"group.f9a573b9.js","kRCxU":"amazon-icon1x.985b1de5.png","45Fu3":"amazon-icon2x.b774c146.png","3SUJU":"applebook-icon1x.a9f158e0.png","igZ6H":"applebook-icon2x.7ba433f7.png","YfQvy":"bookshop-icon1x.95f5821d.png","5pNEw":"bookshop-icon2x.2b4b4a60.png","4bpKV":"group.f417b9ef.js","gKsO6":"group.d216c587.js"}')),i("3L4y6"),i("bUb57"),i("4R95q");var r=(i("3L4y6"),i("3L4y6"));const l=document.querySelector(".books-gallery"),s=new r.APIService;async function c(e){var t;let o;let n=await s.fetchBooksByCategory(e);console.log(n);let a=await n.data;console.log(a),l.innerHTML=`<h1 class="collection-title">${(o=e.split(" ")).pop(),o.join(" ")} <span>${(t=e.trim().split(" "))[t.length-1]}</span></h1>
    <ul class="top-books rendering-gap js-list-rendering">

    ${a.map(({title:e,book_image:t,author:o,_id:n})=>`<li class="book-card" id="${n}">
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
    
    `}var r=i("3L4y6"),d=i("bXRWl"),u=i("7Y9D8");const g=new r.APIService,m=document.querySelector(".books-gallery");async function p(){try{(0,u.Loading).standard("Loading...");let e=await g.fetchBestSellersBooks();(0,u.Loading).remove("Loading...");let t=await e.data;return t}catch(e){console.log(e),(0,u.Loading).remove("Loading..."),(0,d.reportsFailure)("Sorry, no books were found. Please try again.")}}async function b(){let e='<ul class="top-books rendering-gap js-list-rendering">';try{let t=await p();for(let o of t)e+=`
  
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
  `;e+="</ul>",m.innerHTML='<h1 class="collection-title">Best Sellers <span>Books</span></h1>';let o=document.createElement("div");o.className="books-collection",o.innerHTML=e,o.addEventListener("click",y),m.appendChild(o)}catch(e){console.log(e)}}if(m)try{b()}catch(e){console.log(e)}async function y(e){if("BUTTON"!==e.target.nodeName)return;let t=e.target;try{if(t.matches("button[data-category]")){var o;let e;let n=t.dataset.category,a=m.querySelector(".collection-title");a.innerHTML=`${(e=n.split(" ")).pop(),e.join(" ")} <span>${(o=n.trim().split(" "))[o.length-1]}</span>`,S(n),await h(n)}}catch(e){console.log(e)}}async function h(e){try{if(!response.ok)throw Error();(0,u.Loading).standard("Loading...");let t=await g.fetchBooksByCategory(e),o=await t.data;(0,u.Loading).remove("Loading...");let n=m.querySelector(".books-collection");n.innerHTML=`
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
    </ul>`}catch(e){console.log(e),(0,u.Loading).remove("Loading..."),(0,d.reportsFailure)("Sorry, no books  were found. Please try again.")}}var d=i("bXRWl"),u=i("7Y9D8");const f=new r.APIService,k=document.querySelector(".book-category__list");async function v(){try{(0,u.Loading).standard("Loading...");let e=await f.fetchBooksCategoryList();(0,u.Loading).remove("Loading...");let t=await e.data;return t}catch(e){console.log(e),(0,d.reportsFailure)("Sorry, no books 555 were found. Please try again.")}}async function L(){let e=await v(),t=e.map(e=>`<li class="book-category__list-item">${e.list_name}</li>`).join("");k.insertAdjacentHTML("beforeend",t)}async function w(e){if("LI"!==e.target.nodeName)return;let t=e.target.textContent;S(t),"All categories"!==t?await c(t):await b()}function S(e){let t=document.querySelectorAll(".book-category__list-item");for(let o of t)o.textContent===e?o.classList.add("active"):o.classList.remove("active")}k&&(L(),k.addEventListener("click",w));var d=i("bXRWl"),u=i("7Y9D8"),r=i("3L4y6"),_={};_=new URL(i("kyEFX").resolve("kRCxU"),import.meta.url).toString();var E={};E=new URL(i("kyEFX").resolve("45Fu3"),import.meta.url).toString();var $={};$=new URL(i("kyEFX").resolve("3SUJU"),import.meta.url).toString();var x={};x=new URL(i("kyEFX").resolve("igZ6H"),import.meta.url).toString();var H={};H=new URL(i("kyEFX").resolve("YfQvy"),import.meta.url).toString();var q={};q=new URL(i("kyEFX").resolve("5pNEw"),import.meta.url).toString();const R=document.querySelector("#allModal"),B=document.querySelector(".books-gallery"),F=document.querySelector(".add-storage-button"),I=document.querySelector(".remove-storage-btn"),A=document.querySelector(".storage-info"),U=new r.APIService,N="storage-data";let T=[],j={};B&&(F?.addEventListener("click",function(){let e=JSON.parse(localStorage.getItem(N));j.description||(j.description="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");let t=j;e&&0!==e.length?(e.push(t),localStorage.setItem(N,JSON.stringify(e))):(T=[t],localStorage.setItem(N,JSON.stringify(T))),A.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",X()}),I?.addEventListener("click",function(){A.textContent="";let e=j.id,t=JSON.parse(localStorage.getItem(N)),o=t.findIndex(t=>t.id===e);t.splice(o,1),localStorage.setItem(N,JSON.stringify(t)),X()}),B.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName||"UL"===e.target.nodeName||"DIV"===e.target.nodeName||"H3"===e.target.nodeName)return;let t=e.target.closest("li").id;C?.classList.remove("is-hidden"),O?.classList.remove("is-hidden"),document.body.style.overflow="hidden",M(t)}));const C=document.querySelector(".about-book-modal"),O=document.querySelector(".card-backdrop-modal");async function M(e){R&&(R.innerHTML="");try{if(!response.ok)throw Error();(0,u.Loading).standard("Loading...");let o=await P(e);return X(),(0,u.Loading).remove("Loading..."),function(e){let o=e.book_image,n=e.title,a=e.author,i=e.buy_links[0].url,r=e.buy_links[1].url,l=e.buy_links[4].url,s=e.description,c=s;""===s&&(c="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");let d=`  
  <img src="${o}" alt="Book Image" class="image-about-book-modal">
  <div class="info-modal">
  <h2 class="title-about-book-modal">${n}</h2>
  <p class="author-about-book-modal"> ${a}</p>
  <p class="text-about-book-modal">${c}</p>
  <ul class="shop-modal-list"> <li class="shop-modal-item"><a href="${i}" target="_blank"
    > <img class="amazon"
     width="62"
    height="19"
    srcset="
    ${t(_)} 1x,
    ${t(E)} 2x
  "
   src="${t(_)}"
    alt="Amazon"
  /></a></li>
  <li class="shop-modal-item"><a href="${r}" target="_blank"
    > <img class="marketApple"
    width="33"
    height="32"
    srcset="
    ${t($)} 1x,
    ${t(x)} 2x
  "
   src="${t($)}"
    alt="AppleBooks"
  /></a></li>
  <li class="shop-modal-item"><a href="${l}" target="_blank"
    > <img
    width="38"
    height="36"
    srcset="
    ${t(H)} 1x,
    ${t(q)} 2x
  "
   src="${t(H)}"
    alt="Book-Shop"
  /></a></li>
</ul>
</div>
  `;R.innerHTML=d}(o),o}catch(e){(0,u.Loading).remove("Loading..."),console.log("Error",e),(0,d.reportsFailure)("Sorry, no books were found. Please try again.")}}async function P(e){try{j={};let t=await U.fetchBookInfo(e),o=t.data;return j={book_image:o.book_image,title:o.title,author:o.author,marketAmazon:o.buy_links[0].url,marketAppleBooks:o.buy_links[1].url,marketBookshop:o.buy_links[4].url,list_name:o.list_name,id:o._id,description:o.description},o}catch(e){console.log("Error",e)}}function X(){let e=JSON.parse(localStorage.getItem(N)),t=j.id;if(e&&0!==e.length){let o=e.find(e=>e.id===t);o?(F.style.display="none",I.style.display="block"):(F.style.display="block",(I?.style).display="none")}else{F.style.display="block",I.style.display="none";return}}const J=document.querySelector(".card-backdrop-modal"),W=document.querySelector(".modal"),Y=document.getElementById("modal-close");function D(){J?.classList.add("is-hidden"),W?.classList.add("is-hidden"),document.body?.classList.remove("modal-open"),document.removeEventListener("keydown",K),document.body.style.overflow=""}function K(e){"Escape"===e.code&&D()}W&&(J?.addEventListener("click",function(e){e.target===J&&D()}),Y?.addEventListener("click",function(){D()}),window.addEventListener("keydown",K)),i("hZAS5"),i("bMp0K"),i("4Z4PC");const Z={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{let e=window.scrollY||document.documentElement.scrollTop;e>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};Z.addEventListener(),i("fPeBo"),i("bXRWl"),i("bMZn5"),i("7uG5A");
//# sourceMappingURL=group.f9a573b9.js.map
