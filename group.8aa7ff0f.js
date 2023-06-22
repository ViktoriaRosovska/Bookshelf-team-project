function e(e,o,t,n){Object.defineProperty(e,o,{get:t,set:n,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequire9432;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var o=a[e];delete a[e];var t={id:e,exports:{}};return n[e]=t,o.call(t.exports,t,t.exports),t.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){a[e]=o},t.parcelRequire9432=i),i.register("kyEFX",function(o,t){"use strict";e(o.exports,"register",function(){return n},function(e){return n=e}),e(o.exports,"resolve",function(){return a},function(e){return a=e});var n,a,i={};n=function(e){for(var o=Object.keys(e),t=0;t<o.length;t++)i[o[t]]=e[o[t]]},a=function(e){var o=i[e];if(null==o)throw Error("Could not resolve bundle with id "+e);return o}}),i("kyEFX").register(JSON.parse('{"5ZPII":"group.8aa7ff0f.js","kRCxU":"amazon-icon1x.985b1de5.png","45Fu3":"amazon-icon2x.b774c146.png","3SUJU":"applebook-icon1x.a9f158e0.png","igZ6H":"applebook-icon2x.7ba433f7.png","YfQvy":"bookshop-icon1x.95f5821d.png","5pNEw":"bookshop-icon2x.2b4b4a60.png","1upww":"group.0a5b81b2.js","bamw1":"group.2471d0ed.js"}')),i("3L4y6"),i("bUb57"),i("4R95q");var l=(i("3L4y6"),i("3L4y6"));const r=document.querySelector(".books-gallery"),s=new l.APIService;async function c(e){var o;let t;let n=await s.fetchBooksByCategory(e);console.log(n);let a=await n.data;console.log(a),r.innerHTML=`<h1 class="collection-title">${(t=e.split(" ")).pop(),t.join(" ")} <span>${(o=e.trim().split(" "))[o.length-1]}</span></h1>
    <ul class="top-books rendering-gap js-list-rendering">

    ${a.map(({title:e,book_image:o,author:t,_id:n})=>`<li class="book-card" id="${n}">
        <div class="book-thumb">
      <img class="book-cover" src="${o}" alt="${e}">
      <div class="quick-view">
                <p class="quick-view-text">QUICK VIEW</p>
                </div>
                </div>
                <div class="book-descr">
      <h2 class="book-name">${e}</h2>
      <h3 class="book-author">${t}</h3>
      </div>
  </li>`).join("")}
    </ul>
    
    `}var l=i("3L4y6"),d=i("bXRWl"),u=i("7Y9D8");const g=new l.APIService,p=document.querySelector(".books-gallery");async function m(){try{(0,u.Loading).standard("Loading...");let e=await g.fetchBestSellersBooks();(0,u.Loading).remove("Loading...");let o=await e.data;return o}catch(e){console.log(e),(0,u.Loading).remove("Loading..."),(0,d.reportsFailure)("Sorry, no books were found. Please try again.")}}async function h(){let e='<ul class="top-books rendering-gap js-list-rendering">';try{let o=await m();for(let t of o)e+=`
  
    <li class="book-category-item">
      <p class="book-category">${t.list_name}</p>
      <ul class="top-books bestsel-books js-list-rendering">
        ${t.books.map(e=>`
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
      <button class="book-card-btn" type="button" data-category="${t.list_name}">see more</button>
    </li>
  `;e+="</ul>",p.innerHTML='<h1 class="collection-title">Best Sellers <span>Books</span></h1>';let t=document.createElement("div");t.className="books-collection",t.innerHTML=e,t.addEventListener("click",b),p.appendChild(t)}catch(e){console.log(e)}}if(p)try{h()}catch(e){console.log(e)}async function b(e){if("BUTTON"!==e.target.nodeName)return;let o=e.target;try{if(o.matches("button[data-category]")){var t;let e;let n=o.dataset.category,a=p.querySelector(".collection-title");a.innerHTML=`${(e=n.split(" ")).pop(),e.join(" ")} <span>${(t=n.trim().split(" "))[t.length-1]}</span>`,S(n),await y(n)}}catch(e){console.log(e)}}async function y(e){try{(0,u.Loading).standard("Loading...");let o=await g.fetchBooksByCategory(e),t=await o.data;(0,u.Loading).remove("Loading...");let n=p.querySelector(".books-collection");n.innerHTML=`
    <ul class="top-books rendering-gap js-list-rendering">
    ${t.map(({title:e,book_image:o,author:t,_id:n})=>`
        <li class="book-card" id=${n}>
        <div class="book-thumb">
         <img class="book-cover" src="${o}" alt="${e}">
         <div class="quick-view">
          <p class="quick-view-text">QUICK VIEW</p>
         </div>
        </div>
        <div class="book-descr">
      <h2 class="book-name">${e}</h2>
      <h3 class="book-author">${t}</h3>
      </div>
  </li>
  `).join("")}
    </ul>`}catch(e){console.log(e),(0,u.Loading).remove("Loading..."),(0,d.reportsFailure)("Sorry, no books  were found. Please try again.")}}var d=i("bXRWl"),u=i("7Y9D8");const k=new l.APIService,f=document.querySelector(".book-category__list");async function v(){try{(0,u.Loading).standard("Loading...");let e=await k.fetchBooksCategoryList();(0,u.Loading).remove("Loading...");let o=await e.data;return o}catch(e){console.log(e),(0,d.reportsFailure)("Sorry, no books 555 were found. Please try again.")}}async function w(){let e=await v(),o=e.map(e=>`<li class="book-category__list-item">${e.list_name}</li>`).join("");f.insertAdjacentHTML("beforeend",o)}async function L(e){if("LI"!==e.target.nodeName)return;let o=e.target.textContent;S(o),"All categories"!==o?await c(o):await h()}function S(e){let o=document.querySelectorAll(".book-category__list-item");for(let t of o)t.textContent===e?t.classList.add("active"):t.classList.remove("active")}f&&(w(),f.addEventListener("click",L));var d=i("bXRWl"),u=i("7Y9D8");const _={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{let e=window.scrollY||document.documentElement.scrollTop;e>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};_.addEventListener();var $=i("fPeBo"),l=i("3L4y6"),E={};E=new URL(i("kyEFX").resolve("kRCxU"),import.meta.url).toString();var x={};x=new URL(i("kyEFX").resolve("45Fu3"),import.meta.url).toString();var H={};H=new URL(i("kyEFX").resolve("3SUJU"),import.meta.url).toString();var I={};I=new URL(i("kyEFX").resolve("igZ6H"),import.meta.url).toString();var q={};q=new URL(i("kyEFX").resolve("YfQvy"),import.meta.url).toString();var A={};A=new URL(i("kyEFX").resolve("5pNEw"),import.meta.url).toString();const B=document.querySelector("#allModal"),R=document.querySelector(".books-gallery"),F=document.querySelector(".add-storage-button"),U=document.querySelector(".remove-storage-btn"),N=document.querySelector(".storage-info"),T=new l.APIService,j="storage-data";let C=[],O={};R&&(F?.addEventListener("click",function(){let e=JSON.parse(localStorage.getItem(j));O.description||(O.description="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");let o=O;e&&0!==e.length?(e.push(o),localStorage.setItem(j,JSON.stringify(e))):(C=[o],localStorage.setItem(j,JSON.stringify(C))),N.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.";let t=JSON.parse(localStorage.getItem(j));1===t.length?(0,d.reportsInfo)(`You added book to the shopping list. You have ${t.length} book in your shopping list`):(0,d.reportsInfo)(`You added book to the shopping list. You have ${t.length} books in your shopping list`),J()}),U?.addEventListener("click",function(){N.textContent="";let e=O.id,o=JSON.parse(localStorage.getItem(j)),t=o.findIndex(o=>o.id===e);o.splice(t,1),1===o.length?(0,d.reportsInfo)(`You removed book from your shopping list. You have ${o.length} book in your shopping list`):0!==o.length&&o.length?o.length:(0,d.reportsInfo)("Your shopping list is empty"),localStorage.setItem(j,JSON.stringify(o)),J()}),R.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName||"UL"===e.target.nodeName||"DIV"===e.target.nodeName||"H3"===e.target.nodeName)return;let o=e.target.closest("li").id;F.hasAttribute("disabled","")&&(0,d.reportsWarning)("Please sign up to show a shopping list"),P?.classList.remove("is-hidden"),Y?.classList.remove("is-hidden"),document.body.style.overflow="hidden",_.hide(),M(o)}));const P=document.querySelector(".about-book-modal"),Y=document.querySelector(".card-backdrop-modal");async function M(e){B&&(B.innerHTML="");try{(0,u.Loading).standard("Loading...");let t=await X(e);return J(),(0,u.Loading).remove("Loading..."),function(e){let t=e.book_image,n=e.title,a=e.author,i=e.buy_links[0].url,l=e.buy_links[1].url,r=e.buy_links[4].url,s=e.description,c=s;""===s&&(c="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");let d=`  
  <img src="${t}" alt="Book Image" class="image-about-book-modal">
  <div class="info-modal">
  <h2 class="title-about-book-modal">${n}</h2>
  <p class="author-about-book-modal"> ${a}</p>
  <p class="text-about-book-modal">${c}</p>
  <ul class="shop-modal-list"> <li class="shop-modal-item"><a href="${i}" target="_blank"
    > <img class="amazon"
     width="62"
    height="19"
    srcset="
    ${o(E)} 1x,
    ${o(x)} 2x
  "
   src="${o(E)}"
    alt="Amazon"
  /></a></li>
  <li class="shop-modal-item"><a href="${l}" target="_blank"
    > <img class="marketApple"
    width="33"
    height="32"
    srcset="
    ${o(H)} 1x,
    ${o(I)} 2x
  "
   src="${o(H)}"
    alt="AppleBooks"
  /></a></li>
  <li class="shop-modal-item"><a href="${r}" target="_blank"
    > <img
    width="38"
    height="36"
    srcset="
    ${o(q)} 1x,
    ${o(A)} 2x
  "
   src="${o(q)}"
    alt="Book-Shop"
  /></a></li>
</ul>
</div>
  `;B.innerHTML=d}(t),t}catch(e){(0,u.Loading).remove("Loading..."),console.log("Error",e),(0,d.reportsFailure)("Sorry, no books were found. Please try again.")}}async function X(e){try{O={};let o=await T.fetchBookInfo(e),t=o.data;return O={book_image:t.book_image,title:t.title,author:t.author,marketAmazon:t.buy_links[0].url,marketAppleBooks:t.buy_links[1].url,marketBookshop:t.buy_links[4].url,list_name:t.list_name,id:t._id,description:t.description},t}catch(e){console.log("Error",e)}}function J(){let e=(0,$.isAuthenticated)()?JSON.parse(localStorage.getItem(j)):null,o=O.id;if(e&&0!==e.length){let t=e.find(e=>e.id===o);t?(F.style.display="none",U.style.display="block"):(F.style.display="block",(U?.style).display="none")}else{F.style.display="block",U.style.display="none";return}}const W=document.querySelector(".card-backdrop-modal"),D=document.querySelector(".modal"),Z=document.getElementById("modal-close");function z(){W?.classList.add("is-hidden"),D?.classList.add("is-hidden"),document.body?.classList.remove("modal-open"),document.removeEventListener("keydown",Q),document.body.style.overflow="",_.show()}function Q(e){"Escape"===e.code&&z()}D&&(W?.addEventListener("click",function(e){e.target===W&&z()}),Z?.addEventListener("click",function(){z()}),window.addEventListener("keydown",Q)),i("hZAS5"),i("bMp0K"),i("4Z4PC"),i("fPeBo"),i("bXRWl"),i("bMZn5"),i("7uG5A");
//# sourceMappingURL=group.8aa7ff0f.js.map
