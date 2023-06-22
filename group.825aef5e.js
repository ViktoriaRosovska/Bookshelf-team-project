function e(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},i=o.parcelRequire9432;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},o.parcelRequire9432=i),i.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return a},function(e){return a=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var a,n,i={};a=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},n=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i("kyEFX").register(JSON.parse('{"5ZPII":"group.825aef5e.js","kRCxU":"amazon-icon1x.985b1de5.png","45Fu3":"amazon-icon2x.b774c146.png","3SUJU":"applebook-icon1x.a9f158e0.png","igZ6H":"applebook-icon2x.7ba433f7.png","YfQvy":"bookshop-icon1x.95f5821d.png","5pNEw":"bookshop-icon2x.2b4b4a60.png","4bpKV":"group.595c1d73.js","gKsO6":"group.e086bb7e.js"}')),i("3L4y6"),i("bUb57"),i("4R95q");var l=(i("3L4y6"),i("3L4y6"));const r=document.querySelector(".books-gallery"),s=new l.APIService;async function c(e){var t;let o;let a=await s.fetchBooksByCategory(e);console.log(a);let n=await a.data;console.log(n),r.innerHTML=`<h1 class="collection-title">${(o=e.split(" ")).pop(),o.join(" ")} <span>${(t=e.trim().split(" "))[t.length-1]}</span></h1>
    <ul class="top-books rendering-gap js-list-rendering">

    ${n.map(({title:e,book_image:t,author:o,_id:a})=>`<li class="book-card" id="${a}">
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
    
    `}var l=i("3L4y6"),d=i("bXRWl"),u=i("7Y9D8");const g=new l.APIService,m=document.querySelector(".books-gallery");async function p(){try{(0,u.Loading).standard("Loading...");let e=await g.fetchBestSellersBooks();(0,u.Loading).remove("Loading...");let t=await e.data;return t}catch(e){console.log(e),(0,u.Loading).remove("Loading..."),(0,d.reportsFailure)("Sorry, no books were found. Please try again.")}}async function b(){let e='<ul class="top-books rendering-gap js-list-rendering">';try{let t=await p();for(let o of t)e+=`
  
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
                <div class="book-descr">
                <h2 class="book-name">${e.title}</h2>
                <h3 class="book-author">${e.author}</h3>
                </div>
              </li>
            `).join("")}
      </ul>
      <button class="book-card-btn" type="button" data-category="${o.list_name}">see more</button>
    </li>
  `;e+="</ul>",m.innerHTML='<h1 class="collection-title">Best Sellers <span>Books</span></h1>';let o=document.createElement("div");o.className="books-collection",o.innerHTML=e,o.addEventListener("click",y),m.appendChild(o)}catch(e){console.log(e)}}if(m)try{b()}catch(e){console.log(e)}async function y(e){if("BUTTON"!==e.target.nodeName)return;let t=e.target;try{if(t.matches("button[data-category]")){var o;let e;let a=t.dataset.category,n=m.querySelector(".collection-title");n.innerHTML=`${(e=a.split(" ")).pop(),e.join(" ")} <span>${(o=a.trim().split(" "))[o.length-1]}</span>`,S(a),await h(a)}}catch(e){console.log(e)}}async function h(e){try{(0,u.Loading).standard("Loading...");let t=await g.fetchBooksByCategory(e),o=await t.data;(0,u.Loading).remove("Loading...");let a=m.querySelector(".books-collection");a.innerHTML=`
    <ul class="top-books rendering-gap js-list-rendering">
    ${o.map(({title:e,book_image:t,author:o,_id:a})=>`
        <li class="book-card" id=${a}>
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
    </ul>`}catch(e){console.log(e),(0,u.Loading).remove("Loading..."),(0,d.reportsFailure)("Sorry, no books  were found. Please try again.")}}var d=i("bXRWl"),u=i("7Y9D8");const k=new l.APIService,f=document.querySelector(".book-category__list");async function v(){try{(0,u.Loading).standard("Loading...");let e=await k.fetchBooksCategoryList();(0,u.Loading).remove("Loading...");let t=await e.data;return t}catch(e){console.log(e),(0,d.reportsFailure)("Sorry, no books 555 were found. Please try again.")}}async function L(){let e=await v(),t=e.map(e=>`<li class="book-category__list-item">${e.list_name}</li>`).join("");f.insertAdjacentHTML("beforeend",t)}async function w(e){if("LI"!==e.target.nodeName)return;let t=e.target.textContent;S(t),"All categories"!==t?await c(t):await b()}function S(e){let t=document.querySelectorAll(".book-category__list-item");for(let o of t)o.textContent===e?o.classList.add("active"):o.classList.remove("active")}f&&(L(),f.addEventListener("click",w));var d=i("bXRWl"),u=i("7Y9D8");const _={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{let e=window.scrollY||document.documentElement.scrollTop;e>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};_.addEventListener();var l=i("3L4y6"),E={};E=new URL(i("kyEFX").resolve("kRCxU"),import.meta.url).toString();var $={};$=new URL(i("kyEFX").resolve("45Fu3"),import.meta.url).toString();var x={};x=new URL(i("kyEFX").resolve("3SUJU"),import.meta.url).toString();var H={};H=new URL(i("kyEFX").resolve("igZ6H"),import.meta.url).toString();var q={};q=new URL(i("kyEFX").resolve("YfQvy"),import.meta.url).toString();var R={};R=new URL(i("kyEFX").resolve("5pNEw"),import.meta.url).toString();const B=document.querySelector("#allModal"),F=document.querySelector(".books-gallery"),I=document.querySelector(".add-storage-button"),A=document.querySelector(".remove-storage-btn"),U=document.querySelector(".storage-info"),N=new l.APIService,T="storage-data";let j=[],C={};F&&(I?.addEventListener("click",function(){let e=JSON.parse(localStorage.getItem(T));C.description||(C.description="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");let t=C;e&&0!==e.length?(e.push(t),localStorage.setItem(T,JSON.stringify(e))):(j=[t],localStorage.setItem(T,JSON.stringify(j))),U.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",J()}),A?.addEventListener("click",function(){U.textContent="";let e=C.id,t=JSON.parse(localStorage.getItem(T)),o=t.findIndex(t=>t.id===e);t.splice(o,1),localStorage.setItem(T,JSON.stringify(t)),J()}),F.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName||"UL"===e.target.nodeName||"DIV"===e.target.nodeName||"H3"===e.target.nodeName)return;let t=e.target.closest("li").id;O?.classList.remove("is-hidden"),M?.classList.remove("is-hidden"),document.body.style.overflow="hidden",_.hide(),P(t)}));const O=document.querySelector(".about-book-modal"),M=document.querySelector(".card-backdrop-modal");async function P(e){B&&(B.innerHTML="");try{(0,u.Loading).standard("Loading...");let o=await X(e);return J(),(0,u.Loading).remove("Loading..."),function(e){let o=e.book_image,a=e.title,n=e.author,i=e.buy_links[0].url,l=e.buy_links[1].url,r=e.buy_links[4].url,s=e.description,c=s;""===s&&(c="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");let d=`  
  <img src="${o}" alt="Book Image" class="image-about-book-modal">
  <div class="info-modal">
  <h2 class="title-about-book-modal">${a}</h2>
  <p class="author-about-book-modal"> ${n}</p>
  <p class="text-about-book-modal">${c}</p>
  <ul class="shop-modal-list"> <li class="shop-modal-item"><a href="${i}" target="_blank"
    > <img class="amazon"
     width="62"
    height="19"
    srcset="
    ${t(E)} 1x,
    ${t($)} 2x
  "
   src="${t(E)}"
    alt="Amazon"
  /></a></li>
  <li class="shop-modal-item"><a href="${l}" target="_blank"
    > <img class="marketApple"
    width="33"
    height="32"
    srcset="
    ${t(x)} 1x,
    ${t(H)} 2x
  "
   src="${t(x)}"
    alt="AppleBooks"
  /></a></li>
  <li class="shop-modal-item"><a href="${r}" target="_blank"
    > <img
    width="38"
    height="36"
    srcset="
    ${t(q)} 1x,
    ${t(R)} 2x
  "
   src="${t(q)}"
    alt="Book-Shop"
  /></a></li>
</ul>
</div>
  `;B.innerHTML=d}(o),o}catch(e){(0,u.Loading).remove("Loading..."),console.log("Error",e),(0,d.reportsFailure)("Sorry, no books were found. Please try again.")}}async function X(e){try{C={};let t=await N.fetchBookInfo(e),o=t.data;return C={book_image:o.book_image,title:o.title,author:o.author,marketAmazon:o.buy_links[0].url,marketAppleBooks:o.buy_links[1].url,marketBookshop:o.buy_links[4].url,list_name:o.list_name,id:o._id,description:o.description},o}catch(e){console.log("Error",e)}}function J(){let e=JSON.parse(localStorage.getItem(T)),t=C.id;if(e&&0!==e.length){let o=e.find(e=>e.id===t);o?(I.style.display="none",A.style.display="block"):(I.style.display="block",(A?.style).display="none")}else{I.style.display="block",A.style.display="none";return}}const W=document.querySelector(".card-backdrop-modal"),Y=document.querySelector(".modal"),D=document.getElementById("modal-close");function K(){W?.classList.add("is-hidden"),Y?.classList.add("is-hidden"),document.body?.classList.remove("modal-open"),document.removeEventListener("keydown",Z),document.body.style.overflow="",_.show()}function Z(e){"Escape"===e.code&&K()}Y&&(W?.addEventListener("click",function(e){e.target===W&&K()}),D?.addEventListener("click",function(){K()}),window.addEventListener("keydown",Z)),i("hZAS5"),i("bMp0K"),i("4Z4PC"),i("fPeBo"),i("bXRWl"),i("bMZn5"),i("7uG5A");
//# sourceMappingURL=group.825aef5e.js.map
