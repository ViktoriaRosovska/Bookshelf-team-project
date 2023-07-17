function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=o.parcelRequire9432;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},o.parcelRequire9432=i),i.register("4SSe9",function(t,o){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var n,a,i={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},a=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i("4SSe9").register(JSON.parse('{"3z9Oy":"group.cf05018d.js","8OaUg":"amazon-icon1x.985b1de5.png","4MGAN":"amazon-icon2x.b774c146.png","gBscj":"applebook-icon1x.a9f158e0.png","7OUVG":"applebook-icon2x.7ba433f7.png","2qXmr":"bookshop-icon1x.95f5821d.png","iTw7C":"bookshop-icon2x.2b4b4a60.png","fgfb1":"group.25018ff1.js","85xNT":"group.f87fac98.js"}')),i("j2GOd"),i("lyquk"),i("clbZJ");var l=(i("j2GOd"),i("j2GOd"));const s=document.querySelector(".books-gallery"),r=new l.APIService;async function c(e){var t;let o;let n=await r.fetchBooksByCategory(e),a=await n.data;s.innerHTML=`<h1 class="collection-title">${(o=e.split(" ")).pop(),o.join(" ")} <span>${(t=e.trim().split(" "))[t.length-1]}</span></h1>
    <ul class="top-books rendering-gap js-list-rendering">

    ${a.map(({title:e,book_image:t,author:o,_id:n})=>`<li class="book-card" data-id="${n}">
        <div class="book-thumb">
      <img class="book-cover" src="${t}" alt="${e}">
      <div class="quick-view">
                <p class="quick-view-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-descr">
      <h2 class="book-name">${e}</h2>
      <h3 class="book-author">${o}</h3>
      </div>
  </li>`).join("")}
    </ul>
    
    `}var l=i("j2GOd"),d=i("ipb79"),u=i("bZsAe");const g=new l.APIService,p=document.querySelector(".books-gallery");async function b(){try{(0,u.Loading).standard("Loading...");let e=await g.fetchBestSellersBooks();(0,u.Loading).remove("Loading...");let t=await e.data;return t}catch(e){console.log(e),(0,u.Loading).remove("Loading..."),(0,d.reportsFailure)("Sorry, no books were found. Please try again.")}}async function m(){let e='<ul class="top-books rendering-gap js-list-rendering">';try{let t=await b();for(let o of t)e+=`
  
    <li class="book-category-item">
      <p class="book-category">${o.list_name}</p>
      <ul class="top-books bestsel-books js-list-rendering">
        ${o.books.map(e=>`
              <li class="book-card flex-element" data-id="${e._id}">
              <div class="book-thumb">
                <img class="book-cover" src="${e.book_image}" alt="${e.title}"/>
                <div class="quick-view">
                <p class="quick-view-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-descr">
                <h2 class="book-name">${e.title}</h2>
                <h3 class="book-author">${e.author}</h3>
                </div>
              </li>
            `).join("")}
      </ul>
      <button class="book-card-btn" type="button" data-category="${o.list_name}">see more</button>
    </li>
  `;e+="</ul>",p.innerHTML='<h1 class="collection-title">Best Sellers <span>Books</span></h1>';let o=document.createElement("div");o.className="books-collection",o.innerHTML=e,o.addEventListener("click",h),p.appendChild(o)}catch(e){console.log(e)}}if(p)try{m()}catch(e){console.log(e)}async function h(e){if("BUTTON"!==e.target.nodeName)return;let t=e.target;try{if(t.matches("button[data-category]")){var o;let e;let n=t.dataset.category,a=p.querySelector(".collection-title");a.innerHTML=`${(e=n.split(" ")).pop(),e.join(" ")} <span>${(o=n.trim().split(" "))[o.length-1]}</span>`,L(n),await k(n)}}catch(e){console.log(e)}}async function k(e){try{(0,u.Loading).standard("Loading...");let t=await g.fetchBooksByCategory(e),o=await t.data;(0,u.Loading).remove("Loading...");let n=p.querySelector(".books-collection");n.innerHTML=`
    <ul class="top-books rendering-gap js-list-rendering">
    ${o.map(({title:e,book_image:t,author:o,_id:n})=>`
        <li class="book-card" data-id=${n}>
        <div class="book-thumb">
         <img class="book-cover" src="${t}" alt="${e}">
         <div class="quick-view">
          <p class="quick-view-text">QUICK VIEW</p>
         </div>
        </div>
        <div class="book-descr">
      <h2 class="book-name">${e}</h2>
      <h3 class="book-author">${o}</h3>
      </div>
  </li>
  `).join("")}
    </ul>`}catch(e){console.log(e),(0,u.Loading).remove("Loading..."),(0,d.reportsFailure)("Sorry, no books  were found. Please try again.")}}var d=i("ipb79"),u=i("bZsAe");const y=new l.APIService,f=document.querySelector(".book-category__list");async function v(){try{(0,u.Loading).standard("Loading...");let e=await y.fetchBooksCategoryList();(0,u.Loading).remove("Loading...");let t=await e.data;return t}catch(e){console.log(e),(0,d.reportsFailure)("Sorry, no books 555 were found. Please try again.")}}async function S(){let e=await v(),t=e.map(e=>`<li class="book-category__list-item">${e.list_name}</li>`).join("");f.insertAdjacentHTML("beforeend",t)}async function w(e){if("LI"!==e.target.nodeName)return;let t=e.target.textContent;L(t),"All categories"!==t?await c(t):await m()}function L(e){let t=document.querySelectorAll(".book-category__list-item");for(let o of t)o.textContent===e?o.classList.add("active"):o.classList.remove("active")}f&&(S(),f.addEventListener("click",w));var d=i("ipb79"),u=i("bZsAe");const _={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{let e=window.scrollY||document.documentElement.scrollTop;e>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};_.addEventListener();var $=i("d0qiv"),l=i("j2GOd"),E={};E=new URL(i("4SSe9").resolve("8OaUg"),import.meta.url).toString();var A={};A=new URL(i("4SSe9").resolve("4MGAN"),import.meta.url).toString();var q={};q=new URL(i("4SSe9").resolve("gBscj"),import.meta.url).toString();var x={};x=new URL(i("4SSe9").resolve("7OUVG"),import.meta.url).toString();var H={};H=new URL(i("4SSe9").resolve("2qXmr"),import.meta.url).toString();var I={};I=new URL(i("4SSe9").resolve("iTw7C"),import.meta.url).toString();const O=document.querySelector("#allModal"),B=document.querySelector(".books-gallery"),j=document.querySelector(".add-storage-button"),R=document.querySelector(".remove-storage-btn"),T=document.querySelector(".storage-info"),U=new l.APIService,N="storage-data";let C=[],F={};B&&(null==j||j.addEventListener("click",function(){let e=JSON.parse(localStorage.getItem(N));F.description||(F.description="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");let t=F;e&&0!==e.length?(e.push(t),localStorage.setItem(N,JSON.stringify(e))):(C=[t],localStorage.setItem(N,JSON.stringify(C))),T.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.";let o=JSON.parse(localStorage.getItem(N));1===o.length?(0,d.reportsInfo)(`You added book to the shopping list. You have ${o.length} book in your shopping list`):(0,d.reportsInfo)(`You added book to the shopping list. You have ${o.length} books in your shopping list`),Y()}),null==R||R.addEventListener("click",function(){T.textContent="";let e=F.id,t=JSON.parse(localStorage.getItem(N)),o=t.findIndex(t=>t.id===e);t.splice(o,1),1===t.length?(0,d.reportsInfo)(`You removed book from your shopping list. You have ${t.length} book in your shopping list`):0!==t.length&&t.length?t.length:(0,d.reportsInfo)("Your shopping list is empty"),localStorage.setItem(N,JSON.stringify(t)),Y()}),B.addEventListener("click",function(e){let t=e.target.closest("li"),o=t&&t.hasAttribute("data-id")&&t.classList.contains("book-card");if(!o)return;let n=t.getAttribute("data-id");j.hasAttribute("disabled","")&&(0,d.reportsWarning)("Please sign up to show a shopping list"),null==M||M.classList.remove("is-hidden"),null==P||P.classList.remove("is-hidden"),document.body.style.overflow="hidden",_.hide(),G(n)}));const M=document.querySelector(".about-book-modal"),P=document.querySelector(".card-backdrop-modal");async function G(e){O&&(O.innerHTML="");try{(0,u.Loading).standard("Loading...");let o=await J(e);return Y(),(0,u.Loading).remove("Loading..."),function(e){let o=e.book_image,n=e.title,a=e.author,i=e.buy_links[0].url,l=e.buy_links[1].url,s=e.buy_links[4].url,r=e.description,c=r;""===r&&(c="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");let d=`  
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
    ${t(E)} 1x,
    ${t(A)} 2x
  "
   src="${t(E)}"
    alt="Amazon"
  /></a></li>
  <li class="shop-modal-item"><a href="${l}" target="_blank"
    > <img class="marketApple"
    width="33"
    height="32"
    srcset="
    ${t(q)} 1x,
    ${t(x)} 2x
  "
   src="${t(q)}"
    alt="AppleBooks"
  /></a></li>
  <li class="shop-modal-item"><a href="${s}" target="_blank"
    > <img
    width="38"
    height="36"
    srcset="
    ${t(H)} 1x,
    ${t(I)} 2x
  "
   src="${t(H)}"
    alt="Book-Shop"
  /></a></li>
</ul>
</div>
  `;O.innerHTML=d}(o),o}catch(e){(0,u.Loading).remove("Loading..."),console.log("Error",e),(0,d.reportsFailure)("Sorry, no books were found. Please try again.")}}async function J(e){try{F={};let t=await U.fetchBookInfo(e),o=t.data;return F={book_image:o.book_image,title:o.title,author:o.author,marketAmazon:o.buy_links[0].url,marketAppleBooks:o.buy_links[1].url,marketBookshop:o.buy_links[4].url,list_name:o.list_name,id:o._id,description:o.description},o}catch(e){console.log("Error",e)}}function Y(){let e=(0,$.isAuthenticated)()?JSON.parse(localStorage.getItem(N)):null,t=F.id;if(e&&0!==e.length){let o=e.find(e=>e.id===t);o?(j.style.display="none",R.style.display="block"):(j.style.display="block",null==R||(R.style.display="none"))}else{j.style.display="block",R.style.display="none";return}}const z=document.querySelector(".card-backdrop-modal"),V=document.querySelector(".modal"),W=document.getElementById("modal-close");function Z(){var e;null==z||z.classList.add("is-hidden"),null==V||V.classList.add("is-hidden"),null===(e=document.body)||void 0===e||e.classList.remove("modal-open"),document.removeEventListener("keydown",K),document.body.style.overflow="",_.show()}function K(e){"Escape"===e.code&&Z()}V&&(null==z||z.addEventListener("click",function(e){e.target===z&&Z()}),null==W||W.addEventListener("click",function(){Z()}),window.addEventListener("keydown",K)),i("cZaO3"),i("cswOA"),i("aympR"),i("d0qiv"),i("ipb79"),i("7t6q4"),i("bWpVP");
//# sourceMappingURL=group.cf05018d.js.map
