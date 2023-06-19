function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=o.parcelRequire9432;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},o.parcelRequire9432=i),i.register("kyEFX",function(t,o){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var n,r,i={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},r=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i("kyEFX").register(JSON.parse('{"5ZPII":"group.26663c17.js","lmWtM":"action_against.24d1194a.png","bbJts":"imc.7f989190.png","c1Vrf":"medecins_sans.9660594f.png","5uW0t":"progecthope.344d3f3b.png","lALKM":"razom.9dcf6eb8.png","bzHjo":"save_the_children.0eb91883.png","g7e0a":"sergiy_prytula.938abd5f.png","fMUv2":"united24.de007a75.png","gdcil":"world_vision.52302304.png","kRCxU":"amazon-icon1x.985b1de5.png","45Fu3":"amazon-icon2x.b774c146.png","3SUJU":"applebook-icon1x.a9f158e0.png","igZ6H":"applebook-icon2x.7ba433f7.png","YfQvy":"bookshop-icon1x.95f5821d.png","5pNEw":"bookshop-icon2x.2b4b4a60.png","efMBU":"group.9670dd7d.js"}')),i("3L4y6"),i("bUb57");const a=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"save_the_children"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"progecthope"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"united24"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"medecins_sans"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"action_against"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"world_vision"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"sergiy_prytula"}];var l={},s={};s=new URL(i("kyEFX").resolve("lmWtM"),import.meta.url).toString();var c={};c=new URL(i("kyEFX").resolve("bbJts"),import.meta.url).toString();var d={};d=new URL(i("kyEFX").resolve("c1Vrf"),import.meta.url).toString();var u={};u=new URL(i("kyEFX").resolve("5uW0t"),import.meta.url).toString();var m={};m=new URL(i("kyEFX").resolve("lALKM"),import.meta.url).toString();var g={};g=new URL(i("kyEFX").resolve("bzHjo"),import.meta.url).toString();var p={};p=new URL(i("kyEFX").resolve("g7e0a"),import.meta.url).toString();var h={};h=new URL(i("kyEFX").resolve("fMUv2"),import.meta.url).toString();l={action_against:s,imc:c,medecins_sans:d,progecthope:u,razom:m,save_the_children:g,sergiy_prytula:p,united24:h,world_vision:new URL(i("kyEFX").resolve("gdcil"),import.meta.url).toString()};const y=document.querySelector(".js-sponsors-list");let f=0;const b=window.matchMedia("(min-width: 768px)");b.addEventListener("change",()=>k=b.matches?3:5);let k=b.matches?3:5;!function(){let e=a.map(({url:e,title:o,img:n})=>{let r=t(l)[n];return`<li class="sponsor-item"><span class="sup_number">${String(f+=1).padStart(2,"0")}</span><a href=${e} target="_blank" noopener noreferrer><img class="sponsor-img" src="${r}" alt=${o}></a></li>`}).join("");y?.insertAdjacentHTML("beforeend",e)}();const v=document.querySelector(".sponsors-slideDown__btn"),_=document.querySelector(".sponsors-slideUp__btn");_.classList.add("hide");let w=0,S=0;v.addEventListener("click",function(){S<k&&(++S,w+=52,y.style.transform=`translateY(-${w}px)`,console.log(S)),S===k&&(_.classList.remove("hide"),v.classList.add("hide"))}),_.addEventListener("click",function(){S>0&&(--S,w-=52,y.style.transform=`translateY(-${w}px)`,console.log(w),console.log(S)),0===S&&(w=0,v.classList.remove("hide"),_.classList.add("hide"))});var L=(i("3L4y6"),i("3L4y6"));const E=document.querySelector(".books-gallery"),H=new L.APIService;async function $(e){let t=await H.fetchBooksByCategory(e),o=await t.data;console.log(o),E.innerHTML=`<h1 class="collection-title">Books</h1>
    <ul class="top-books js-list-rendering">
    ${o.map(({title:e,book_image:t,author:o,_id:n})=>`<li class="book-card " id="${n}">
      <img class="book-cover" src="${t}" alt="${e}">
      <h2 class="book-name">${e}</h2>
      <h3 class="book-author">${o}</h3>
  </li>`).join("")}
    </ul>`}const F=new L.APIService,R=document.querySelector(".book-category__list");async function x(){let e=await F.fetchBooksCategoryList(),t=await e.data;return t}async function U(){try{let e=await x(),t=e.map(e=>`<li class="book-category__list-item">${e.list_name}</li>`).join("");R.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}}async function A(e){if("LI"===e.target.nodeName){if(console.log(e.target),e.target.classList.contains("active"))e.target.classList.remove("active");else{let t=document.querySelectorAll(".book-category__list-item");t.forEach(e=>e.classList.remove("active")),e.target.classList.add("active")}await $(e.target.textContent)}}R&&(U(),R.addEventListener("click",A));var L=i("3L4y6");const q=new L.APIService,I=document.querySelector(".books-collection");async function B(){let e=await q.fetchBestSellersBooks(),t=await e.data;return t}async function M(){let e="",t=await B();for(let o of t)e+=`
    <li class="book-category-item">
      <p class="book-category">${o.list_name}</p>
      <ul class="top-books js-list-rendering">
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
  `;I.innerHTML=e}I&&(M(),I?.addEventListener("click",j));const N=document.querySelector(".collection-title");async function j(e){if("BUTTON"!==e.target.nodeName)return;let t=e.target;if(t.matches("button[data-category]")){let e=t.dataset.category;console.log(e);let o=await q.fetchBooksByCategory(e),n=await o.data;console.log(n);let r=n.map(({title:t,book_image:o,author:n,_id:r})=>(N.textContent=e,console.log(N.textContent),`<li class="book-card flex-element" id="${r}">
       <div class="book-thumb">
      <img class="book-cover" src="${o}" alt="${t}">
      <div class="quick-view">
      <p class="quick-view-text">QUICK VIEW</p>
        </div>
        </div>
      <h2 class="book-name">${t}</h2>
      <h3 class="book-author">${n}</h3>
  </li>`)).join("");I.innerHTML=r}}var L=i("3L4y6"),C={};C=new URL(i("kyEFX").resolve("kRCxU"),import.meta.url).toString();var T={};T=new URL(i("kyEFX").resolve("45Fu3"),import.meta.url).toString();var X={};X=new URL(i("kyEFX").resolve("3SUJU"),import.meta.url).toString();var O={};O=new URL(i("kyEFX").resolve("igZ6H"),import.meta.url).toString();var J={};J=new URL(i("kyEFX").resolve("YfQvy"),import.meta.url).toString();var z={};z=new URL(i("kyEFX").resolve("5pNEw"),import.meta.url).toString();const P=document.querySelector("#allModal"),W=document.querySelector(".books-gallery"),Y=document.querySelector(".add-storage-button"),D=document.querySelector(".remove-storage-btn"),K=document.querySelector(".storage-info"),V=new L.APIService,Z="storage-data";let Q=[],G={};W&&(Y.addEventListener("click",function(){let e=JSON.parse(localStorage.getItem(Z)),t=G;e&&0!==e.length?(e.push(t),localStorage.setItem(Z,JSON.stringify(e))):(Q.push(t),localStorage.setItem(Z,JSON.stringify(Q))),K.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",er()}),D.addEventListener("click",function(){K.textContent="";let e=G.id,t=JSON.parse(localStorage.getItem(Z)),o=t.findIndex(t=>t.id===e);t.splice(o,1),localStorage.setItem(Z,JSON.stringify(t)),er()}),W.addEventListener("click",function(e){if("BUTTON"===e.target.nodeName||"UL"===e.target.nodeName||"DIV"===e.target.nodeName||"H3"===e.target.nodeName)return;let t=e.target.closest("li").id;ee.classList.remove("is-hidden"),et.classList.remove("is-hidden"),eo(t)}));const ee=document.querySelector(".about-book-modal"),et=document.querySelector(".card-backdrop-modal");async function eo(e){P.innerHTML="";try{let o=await en(e);return er(),function(e){let o=e.book_image,n=e.title,r=e.author,i=e.buy_links[0].url,a=e.buy_links[1].url,l=e.buy_links[4].url,s=e.description,c=s;""===s&&(c="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");let d=`  
  <img src="${o}" alt="Book Image" class="image-about-book-modal">
  <div class="info-modal">
  <h2 class="title-about-book-modal">${n}</h2>
  <p class="author-about-book-modal"> ${r}</p>
  <p class="text-about-book-modal">${c}</p>
  <ul class="shop-modal-list"> <li class="shop-modal-item"><a href="${i}" target="_blank"
    > <img
     width="62"
    height="19"
    srcset="
    ${t(C)} 1x,
    ${t(T)} 2x
  "
   src="${t(C)}"
    alt="Amazon"
  /></a></li>
  <li class="shop-modal-item"><a href="${a}" target="_blank"
    > <img
    width="33"
    height="32"
    srcset="
    ${t(X)} 1x,
    ${t(O)} 2x
  "
   src="${t(X)}"
    alt="AppleBooks"
  /></a></li>
  <li class="shop-modal-item"><a href="${l}" target="_blank"
    > <img
    width="38"
    height="36"
    srcset="
    ${t(J)} 1x,
    ${t(z)} 2x
  "
   src="${t(J)}"
    alt="Book-Shop"
  /></a></li>
</ul>
</div>
  `;P.innerHTML=d}(o),o}catch(e){throw console.error("Error",e),e}}async function en(e){try{G={};let t=await V.fetchBookInfo(e),o=t.data;return G={book_image:o.book_image,title:o.title,author:o.author,marketAmazon:o.buy_links[0].url,marketAppleBooks:o.buy_links[1].url,marketBookshop:o.buy_links[4].url,list_name:o.list_name,id:o._id,description:o.description},o}catch(e){throw console.error("Error",e),e}}function er(){let e=JSON.parse(localStorage.getItem(Z)),t=G.id;if(e&&0!==e.length){let o=e.find(e=>e.id===t);o?(Y.style.display="none",D.style.display="block"):(Y.style.display="block",D.style.display="none")}else{Y.style.display="block",D.style.display="none";return}}const ei=document.querySelector(".card-backdrop-modal"),ea=document.querySelector(".modal"),el=document.getElementById("modal-close");function es(){ei.classList.add("is-hidden"),ea.classList.add("is-hidden"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",ec)}function ec(e){"Escape"===e.key&&es()}ea&&(ei.addEventListener("click",function(e){e.target===ei&&es()}),el.addEventListener("click",function(){es()}));const ed=document.querySelector(".authorisation-btn"),eu=document.querySelector(".modal-login-form"),em=document.querySelector(".modal-login-form-close-btn"),eg=document.querySelector(".overlayLoginForm");eu&&(ed.onclick=function(){eu.style.display="block",eg.style.display="block"},em.onclick=function(){eu.style.display="none",eg.style.display="none"},window.onclick=function(e){e.target==eu&&(eu.style.display="none")}),i("bMp0K"),i("4Z4PC");const ep={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{let e=window.scrollY||document.documentElement.scrollTop;e>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};ep.addEventListener();
//# sourceMappingURL=group.26663c17.js.map
