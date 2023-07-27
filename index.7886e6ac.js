function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},s=o.parcelRequire9432;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){l[e]=t},o.parcelRequire9432=s),s.register("4SSe9",function(t,o){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return l},function(e){return l=e});var n,l,s={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)s[t[o]]=e[t[o]]},l=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s("4SSe9").register(JSON.parse('{"3z9Oy":"index.7886e6ac.js","8OaUg":"amazon-icon1x.985b1de5.png","4MGAN":"amazon-icon2x.b774c146.png","gBscj":"applebook-icon1x.a9f158e0.png","7OUVG":"applebook-icon2x.7ba433f7.png","2qXmr":"bookshop-icon1x.95f5821d.png","iTw7C":"bookshop-icon2x.2b4b4a60.png","ko6Yt":"index.a76207dc.js","5GORe":"index.7611b512.js"}')),s("j2GOd"),s("lyquk"),s("clbZJ");var i=(s("j2GOd"),s("j2GOd"));const a=document.querySelector(".books-gallery"),r=new i.APIService;async function c(e){var t;let o;let n=await r.fetchBooksByCategory(e),l=await n.data;a.innerHTML=`<h1 class="collection-title">${(o=e.split(" ")).pop(),o.join(" ")} <span>${(t=e.trim().split(" "))[t.length-1]}</span></h1>
    <ul class="top-books rendering-gap js-list-rendering">

    ${l.map(({title:e,book_image:t,author:o,_id:n})=>`<li class="book-card" data-id="${n}">
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
    
    `}var i=s("j2GOd"),d=s("ipb79"),u=s("bZsAe");const m=new i.APIService,g=document.querySelector(".books-gallery");async function h(){try{(0,u.Loading).standard("Loading...");let e=await m.fetchBestSellersBooks();(0,u.Loading).remove("Loading...");let t=await e.data;return t}catch(e){console.log(e),(0,u.Loading).remove("Loading..."),(0,d.reportsFailure)("Sorry, no books were found. Please try again.")}}async function b(){let e='<ul class="top-books rendering-gap js-list-rendering">';try{let t=await h();for(let o of t)e+=`
  
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
  `;e+="</ul>",g.innerHTML='<h1 class="collection-title">Best Sellers <span>Books</span></h1>';let o=document.createElement("div");o.className="books-collection",o.innerHTML=e,o.addEventListener("click",p),g.appendChild(o)}catch(e){console.log(e)}}if(g)try{b()}catch(e){console.log(e)}async function p(e){if("BUTTON"!==e.target.nodeName)return;let t=e.target;try{if(t.matches("button[data-category]")){var o;let e;let n=t.dataset.category,l=g.querySelector(".collection-title");l.innerHTML=`${(e=n.split(" ")).pop(),e.join(" ")} <span>${(o=n.trim().split(" "))[o.length-1]}</span>`,w(n),await y(n)}}catch(e){console.log(e)}}async function y(e){try{(0,u.Loading).standard("Loading...");let t=await m.fetchBooksByCategory(e),o=await t.data;(0,u.Loading).remove("Loading...");let n=g.querySelector(".books-collection");n.innerHTML=`
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
    </ul>`}catch(e){console.log(e),(0,u.Loading).remove("Loading..."),(0,d.reportsFailure)("Sorry, no books  were found. Please try again.")}}var d=s("ipb79"),u=s("bZsAe");const v=new i.APIService,k=document.querySelector(".book-category__list");async function f(){try{(0,u.Loading).standard("Loading...");let e=await v.fetchBooksCategoryList();(0,u.Loading).remove("Loading...");let t=await e.data;return t}catch(e){console.log(e),(0,d.reportsFailure)("Sorry, no books 555 were found. Please try again.")}}async function L(){let e=await f(),t=e.map(e=>`<li class="book-category__list-item">${e.list_name}</li>`).join("");k.insertAdjacentHTML("beforeend",t)}async function S(e){if("LI"!==e.target.nodeName)return;let t=e.target.textContent;w(t),"All categories"!==t?await c(t):await b()}function w(e){let t=document.querySelectorAll(".book-category__list-item");for(let o of t)o.textContent===e?o.classList.add("active"):o.classList.remove("active")}k&&(L(),k.addEventListener("click",S));var d=s("ipb79"),u=s("bZsAe");const _={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{let e=window.scrollY||document.documentElement.scrollTop;e>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};_.addEventListener();var $=s("d0qiv"),i=s("j2GOd"),q={};q=new URL(s("4SSe9").resolve("8OaUg"),import.meta.url).toString();var E={};E=new URL(s("4SSe9").resolve("4MGAN"),import.meta.url).toString();var x={};x=new URL(s("4SSe9").resolve("gBscj"),import.meta.url).toString();var A={};A=new URL(s("4SSe9").resolve("7OUVG"),import.meta.url).toString();var I={};I=new URL(s("4SSe9").resolve("2qXmr"),import.meta.url).toString();var H={};H=new URL(s("4SSe9").resolve("iTw7C"),import.meta.url).toString();const j=document.querySelector("#allModal"),O=document.querySelector(".books-gallery"),B=document.querySelector(".add-storage-button"),R=document.querySelector(".remove-storage-btn"),T=document.querySelector(".storage-info"),U=new i.APIService,C="storage-data";let N=[],F={};O&&(null==B||B.addEventListener("click",function(){let e=JSON.parse(localStorage.getItem(C));F.description||(F.description="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");let t=F;e&&0!==e.length?(e.push(t),localStorage.setItem(C,JSON.stringify(e))):(N=[t],localStorage.setItem(C,JSON.stringify(N))),T.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.";let o=JSON.parse(localStorage.getItem(C));1===o.length?(0,d.reportsInfo)(`You added book to the shopping list. You have ${o.length} book in your shopping list`):(0,d.reportsInfo)(`You added book to the shopping list. You have ${o.length} books in your shopping list`),J()}),null==R||R.addEventListener("click",function(){T.textContent="";let e=F.id,t=JSON.parse(localStorage.getItem(C)),o=t.findIndex(t=>t.id===e);t.splice(o,1),1===t.length?(0,d.reportsInfo)(`You removed book from your shopping list. You have ${t.length} book in your shopping list`):0!==t.length&&t.length?t.length:(0,d.reportsInfo)("Your shopping list is empty"),localStorage.setItem(C,JSON.stringify(t)),J()}),O.addEventListener("click",function(e){let t=e.target.closest("li"),o=t&&t.hasAttribute("data-id")&&t.classList.contains("book-card");if(!o)return;let n=t.getAttribute("data-id");B.hasAttribute("disabled","")&&(0,d.reportsWarning)("Please sign up to show a shopping list"),null==G||G.classList.remove("is-hidden"),null==M||M.classList.remove("is-hidden"),document.body.style.overflow="hidden",_.hide(),P(n)}));const G=document.querySelector(".about-book-modal"),M=document.querySelector(".card-backdrop-modal");async function P(e){j&&(j.innerHTML="");try{(0,u.Loading).standard("Loading...");let o=await Y(e);return J(),(0,u.Loading).remove("Loading..."),function(e){let o=e.book_image,n=e.title,l=e.author,s=e.buy_links[0].url,i=e.buy_links[1].url,a=e.buy_links[4].url,r=e.description,c=r;""===r&&(c="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");let d=`  
  <img src="${o}" alt="Book Image" class="image-about-book-modal">
  <div class="info-modal">
  <h2 class="title-about-book-modal">${n}</h2>
  <p class="author-about-book-modal"> ${l}</p>
  <p class="text-about-book-modal">${c}</p>
  <ul class="shop-modal-list"> <li class="shop-modal-item"><a href="${s}" target="_blank"
    > <img class="amazon"
     width="62"
    height="19"
    srcset="
    ${t(q)} 1x,
    ${t(E)} 2x
  "
   src="${t(q)}"
    alt="Amazon"
  /></a></li>
  <li class="shop-modal-item"><a href="${i}" target="_blank"
    > <img class="marketApple"
    width="33"
    height="32"
    srcset="
    ${t(x)} 1x,
    ${t(A)} 2x
  "
   src="${t(x)}"
    alt="AppleBooks"
  /></a></li>
  <li class="shop-modal-item"><a href="${a}" target="_blank"
    > <img
    width="38"
    height="36"
    srcset="
    ${t(I)} 1x,
    ${t(H)} 2x
  "
   src="${t(I)}"
    alt="Book-Shop"
  /></a></li>
</ul>
</div>
  `;j.innerHTML=d}(o),o}catch(e){(0,u.Loading).remove("Loading..."),console.log("Error",e),(0,d.reportsFailure)("Sorry, no books were found. Please try again.")}}async function Y(e){try{F={};let t=await U.fetchBookInfo(e),o=t.data;return F={book_image:o.book_image,title:o.title,author:o.author,marketAmazon:o.buy_links[0].url,marketAppleBooks:o.buy_links[1].url,marketBookshop:o.buy_links[4].url,list_name:o.list_name,id:o._id,description:o.description},o}catch(e){console.log("Error",e)}}function J(){let e=(0,$.isAuthenticated)()?JSON.parse(localStorage.getItem(C)):null,t=F.id;if(e&&0!==e.length){let o=e.find(e=>e.id===t);o?(B.style.display="none",R.style.display="block"):(B.style.display="block",null==R||(R.style.display="none"))}else{B.style.display="block",R.style.display="none";return}}const K=document.querySelector(".card-backdrop-modal"),z=document.querySelector(".modal"),D=document.getElementById("modal-close");function V(){var e;null==K||K.classList.add("is-hidden"),null==z||z.classList.add("is-hidden"),null===(e=document.body)||void 0===e||e.classList.remove("modal-open"),document.removeEventListener("keydown",W),document.body.style.overflow="",_.show()}function W(e){"Escape"===e.code&&V()}z&&(null==K||K.addEventListener("click",function(e){e.target===K&&V()}),null==D||D.addEventListener("click",function(){V()}),window.addEventListener("keydown",W)),s("cZaO3");const Z=document.querySelector(".js-wraper-mobile-menu"),Q=document.querySelector(".js-modal-mobile-menu"),X=document.querySelector(".js-burger"),ee=document.querySelector(".js-close-menu"),et=document.querySelector(".header-container"),eo=document.body,en=document.querySelector(".js-modal-home-btn"),el=document.querySelector(".js-modal-list-btn"),es=document.querySelector(".list-btn-svg-menu");null==X||X.addEventListener("click",function(e){null==et||et.classList.add("index"),null==Z||Z.classList.add("no-scroll"),null==eo||eo.classList.add("no-scroll"),null==Z||Z.classList.remove("is-hidden-mobile"),Q.classList.add("active-mobile-menu"),null==X||X.classList.add("is-hidden-btn"),null==ee||ee.classList.remove("is-hidden-btn")}),null==ee||ee.addEventListener("click",function(){null==Z||Z.classList.remove("no-scroll"),null==X||X.classList.remove("is-hidden-btn"),null==ee||ee.classList.add("is-hidden-btn"),null==eo||eo.classList.remove("no-scroll"),Q.classList.remove("active-mobile-menu")}),window.location.href===el.href?(el.classList.add("current"),en.classList.remove("current"),es.classList.remove("fill"),en.classList.add("pudding")):window.location.href===en.href&&(en.classList.remove("pudding"),el.classList.add("padding"),es.classList.add("fill")),document.querySelector(".modal-home-btn");const ei=document.querySelector(".modal-list-btn");ei.addEventListener("click",()=>{"shoplist"===window.location.href&&"Shopping list"===ei.textContent&&ei.classList.add("current")});const ea=document.querySelector("#checkbox"),er=document.querySelector("body"),ec={LIGHT:"light-theme",DARK:"dark-theme"},ed="theme";ea&&ea.addEventListener("change",function(e){let t="";e.currentTarget.checked?(t=ec.DARK,er.classList.add(t),er.classList.remove(ec.LIGHT)):(t=ec.LIGHT,er.classList.remove(ec.DARK),er.classList.add(t)),localStorage.setItem(ed,t)}),function(){let e=localStorage.getItem(ed);e?null==er||er.classList.add(e):null==er||er.classList.add(ec.LIGHT),ea&&(e===ec.DARK?ea.checked=!0:ea.checked=!1)}(),s("d0qiv"),s("ipb79"),s("7t6q4"),s("bWpVP");
//# sourceMappingURL=index.7886e6ac.js.map
