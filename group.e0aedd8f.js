!function(){function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=t.parcelRequire9432;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var n=r[e];delete r[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},t.parcelRequire9432=a),a.register("iE7OH",function(n,t){"use strict";e(n.exports,"register",function(){return o},function(e){return o=e}),e(n.exports,"resolve",function(){return r},function(e){return r=e});var o,r,a={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)a[n[t]]=e[n[t]]},r=function(e){var n=a[e];if(null==n)throw Error("Could not resolve bundle with id "+e);return n}}),a.register("aNJCr",function(n,t){e(n.exports,"getBundleURL",function(){return o},function(e){return o=e});"use strict";var o,r={};o=function(e){var n=r[e];return n||(n=function(){try{throw Error()}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=n),n}}),a("iE7OH").register(JSON.parse('{"EVgbq":"group.e0aedd8f.js","iz5nZ":"amazon-icon1x.985b1de5.png","etq4A":"amazon-icon2x.b774c146.png","mCCOp":"applebook-icon1x.a9f158e0.png","iZ8qR":"applebook-icon2x.7ba433f7.png","gmnG0":"bookshop-icon1x.95f5821d.png","95GBg":"bookshop-icon2x.2b4b4a60.png","eftsw":"group.3a1e2714.js","igeRd":"group.b29486e8.js"}')),a("7SQp7"),a("i8Q71"),a("aOrXb");var i=a("i7mVp"),s=a("4tSb9"),c=a("7SQp7"),i=a("i7mVp"),s=a("4tSb9"),c=a("7SQp7"),l=document.querySelector(".books-gallery"),u=new c.APIService;function d(){return(d=(0,i._)(function(e){var n,t;return(0,s.__generator)(this,function(o){switch(o.label){case 0:return[4,u.fetchBooksByCategory(e)];case 1:return console.log(n=o.sent()),[4,n.data];case 2:var r,a;return console.log(t=o.sent()),l.innerHTML='<h1 class="collection-title">'.concat(((r=e.split(" ")).pop(),r.join(" "))," <span>").concat((a=e.trim().split(" "))[a.length-1],'</span></h1>\n    <ul class="top-books rendering-gap js-list-rendering">\n\n    ').concat(t.map(function(e){var n=e.title,t=e.book_image,o=e.author,r=e._id;return'<li class="book-card" id="'.concat(r,'">\n        <div class="book-thumb">\n      <img class="book-cover" src="').concat(t,'" alt="').concat(n,'">\n      <div class="quick-view">\n                <p class="quick-view-text">QUICK VIEW</p>\n                </div>\n                </div>\n                <div class="book-descr">\n      <h2 class="book-name">').concat(n,'</h2>\n      <h3 class="book-author">').concat(o,"</h3>\n      </div>\n  </li>")}).join(""),"\n    </ul>\n    \n    "),[2]}})})).apply(this,arguments)}var i=a("i7mVp"),s=a("4tSb9"),c=a("7SQp7"),p=a("bFijQ"),g=a("6JpON"),f=new c.APIService,h=document.querySelector(".books-gallery");function b(){return(b=(0,i._)(function(){var e;return(0,s.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),(0,g.Loading).standard("Loading..."),[4,f.fetchBestSellersBooks()];case 1:return e=n.sent(),(0,g.Loading).remove("Loading..."),[4,e.data];case 2:return[2,n.sent()];case 3:return console.log(n.sent()),(0,g.Loading).remove("Loading..."),(0,p.reportsFailure)("Sorry, no books were found. Please try again."),[3,4];case 4:return[2]}})})).apply(this,arguments)}function m(){return v.apply(this,arguments)}function v(){return(v=(0,i._)(function(){var e,n,t,o,r,a,i,c,l;return(0,s.__generator)(this,function(s){switch(s.label){case 0:e='<ul class="top-books rendering-gap js-list-rendering">',s.label=1;case 1:return s.trys.push([1,3,,4]),[4,function(){return b.apply(this,arguments)}()];case 2:n=s.sent(),t=!0,o=!1,r=void 0;try{for(a=n[Symbol.iterator]();!(t=(i=a.next()).done);t=!0)c=i.value,e+='\n  \n    <li class="book-category-item">\n      <p class="book-category">'.concat(c.list_name,'</p>\n      <ul class="top-books bestsel-books js-list-rendering">\n        ').concat(c.books.map(function(e){return'\n              <li class="book-card flex-element" id='.concat(e._id,'>\n              <div class="book-thumb">\n                <img class="book-cover" src="').concat(e.book_image,'" alt="').concat(e.title,'" />\n                <div class="quick-view">\n                <p class="quick-view-text">QUICK VIEW</p>\n                </div>\n                </div>\n                <div class="book-descr">\n                <h2 class="book-name">').concat(e.title,'</h2>\n                <h3 class="book-author">').concat(e.author,"</h3>\n                </div>\n              </li>\n            ")}).join(""),'\n      </ul>\n      <button class="book-card-btn" type="button" data-category="').concat(c.list_name,'">see more</button>\n    </li>\n  ')}catch(e){o=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(o)throw r}}return e+="</ul>",h.innerHTML='<h1 class="collection-title">Best Sellers <span>Books</span></h1>',(l=document.createElement("div")).className="books-collection",l.innerHTML=e,l.addEventListener("click",y),h.appendChild(l),[3,4];case 3:return console.log(s.sent()),[3,4];case 4:return[2]}})})).apply(this,arguments)}if(h)try{m()}catch(e){console.log(e)}function y(e){return k.apply(this,arguments)}function k(){return(k=(0,i._)(function(e){var n,t;return(0,s.__generator)(this,function(o){switch(o.label){case 0:if("BUTTON"!==e.target.nodeName)return[2];n=e.target,o.label=1;case 1:var r,a;if(o.trys.push([1,4,,5]),!n.matches("button[data-category]"))return[3,3];return t=n.dataset.category,h.querySelector(".collection-title").innerHTML="".concat(((r=t.split(" ")).pop(),r.join(" "))," <span>").concat((a=t.trim().split(" "))[a.length-1],"</span>"),H(t),[4,function(e){return _.apply(this,arguments)}(t)];case 2:o.sent(),o.label=3;case 3:return[3,5];case 4:return console.log(o.sent()),[3,5];case 5:return[2]}})})).apply(this,arguments)}function _(){return(_=(0,i._)(function(e){var n;return(0,s.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),(0,g.Loading).standard("Loading..."),[4,f.fetchBooksByCategory(e)];case 1:return[4,t.sent().data];case 2:return n=t.sent(),(0,g.Loading).remove("Loading..."),h.querySelector(".books-collection").innerHTML='\n    <ul class="top-books rendering-gap js-list-rendering">\n    '.concat(n.map(function(e){var n=e.title,t=e.book_image,o=e.author,r=e._id;return'\n        <li class="book-card" id='.concat(r,'>\n        <div class="book-thumb">\n         <img class="book-cover" src="').concat(t,'" alt="').concat(n,'">\n         <div class="quick-view">\n          <p class="quick-view-text">QUICK VIEW</p>\n         </div>\n        </div>\n        <div class="book-descr">\n      <h2 class="book-name">').concat(n,'</h2>\n      <h3 class="book-author">').concat(o,"</h3>\n      </div>\n  </li>\n  ")}).join(""),"\n    </ul>"),[3,4];case 3:return console.log(t.sent()),(0,g.Loading).remove("Loading..."),(0,p.reportsFailure)("Sorry, no books  were found. Please try again."),[3,4];case 4:return[2]}})})).apply(this,arguments)}var p=a("bFijQ"),g=a("6JpON"),L=new c.APIService,S=document.querySelector(".book-category__list");function w(){return(w=(0,i._)(function(){var e;return(0,s.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),(0,g.Loading).standard("Loading..."),[4,L.fetchBooksCategoryList()];case 1:return e=n.sent(),(0,g.Loading).remove("Loading..."),[4,e.data];case 2:return[2,n.sent()];case 3:return console.log(n.sent()),(0,p.reportsFailure)("Sorry, no books 555 were found. Please try again."),[3,4];case 4:return[2]}})})).apply(this,arguments)}function E(){return(E=(0,i._)(function(){var e;return(0,s.__generator)(this,function(n){switch(n.label){case 0:return[4,function(){return w.apply(this,arguments)}()];case 1:return e=n.sent().map(function(e){return'<li class="book-category__list-item">'.concat(e.list_name,"</li>")}).join(""),S.insertAdjacentHTML("beforeend",e),[2]}})})).apply(this,arguments)}function q(){return(q=(0,i._)(function(e){var n;return(0,s.__generator)(this,function(t){switch(t.label){case 0:if("LI"!==e.target.nodeName)return[2];if(H(n=e.target.textContent),!("All categories"!==n))return[3,2];return[4,function(e){return d.apply(this,arguments)}(n)];case 1:return t.sent(),[3,4];case 2:return[4,m()];case 3:t.sent(),t.label=4;case 4:return[2]}})})).apply(this,arguments)}function H(e){var n=document.querySelectorAll(".book-category__list-item"),t=!0,o=!1,r=void 0;try{for(var a,i=n[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var s=a.value;s.textContent===e?s.classList.add("active"):s.classList.remove("active")}}catch(e){o=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(o)throw r}}}S&&(!function(){E.apply(this,arguments)}(),S.addEventListener("click",function(e){return q.apply(this,arguments)}));var i=a("i7mVp"),s=a("4tSb9"),p=a("bFijQ"),g=a("6JpON"),x={btn:document.querySelector(".scrollBtn"),show:function(){this.btn.classList.remove("scrollBtn-hide")},hide:function(){this.btn.classList.add("scrollBtn-hide")},addEventListener:function(){var e=this;this.btn&&(window.addEventListener("scroll",function(){(window.scrollY||document.documentElement.scrollTop)>100?e.show():e.hide()}),this.btn.onclick=function(){window.scrollTo({top:0,behavior:"smooth"})})}};x.addEventListener();var c=a("7SQp7"),B={};B=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("iz5nZ");var N={};N=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("etq4A");var O={};O=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("mCCOp");var A={};A=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("iZ8qR");var C={};C=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("gmnG0");var I={};I=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("95GBg");var R=document.querySelector("#allModal"),j=document.querySelector(".books-gallery"),F=document.querySelector(".add-storage-button"),T=document.querySelector(".remove-storage-btn"),U=document.querySelector(".storage-info"),J=new c.APIService,V="storage-data",Q=[],M={};j&&(null==F||F.addEventListener("click",function(){var e=JSON.parse(localStorage.getItem(V));M.description||(M.description="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates.");var n=M;e&&0!==e.length?(e.push(n),localStorage.setItem(V,JSON.stringify(e))):(Q=[n],localStorage.setItem(V,JSON.stringify(Q))),U.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",D()}),null==T||T.addEventListener("click",function(){U.textContent="";var e=M.id,n=JSON.parse(localStorage.getItem(V)),t=n.findIndex(function(n){return n.id===e});n.splice(t,1),localStorage.setItem(V,JSON.stringify(n)),D()}),j.addEventListener("click",function(e){if("BUTTON"!==e.target.nodeName&&"UL"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"H3"!==e.target.nodeName){var n=e.target.closest("li").id;null==z||z.classList.remove("is-hidden"),null==P||P.classList.remove("is-hidden"),document.body.style.overflow="hidden",x.hide(),function(e){G.apply(this,arguments)}(n)}}));var z=document.querySelector(".about-book-modal"),P=document.querySelector(".card-backdrop-modal");function G(){return(G=(0,i._)(function(e){var t,o;return(0,s.__generator)(this,function(r){switch(r.label){case 0:R&&(R.innerHTML=""),r.label=1;case 1:return r.trys.push([1,3,,4]),(0,g.Loading).standard("Loading..."),[4,function(e){return Z.apply(this,arguments)}(e)];case 2:var a,i,s,c,l,u,d,f,h;return t=r.sent(),D(),(0,g.Loading).remove("Loading..."),a=t.book_image,i=t.title,s=t.author,c=t.buy_links[0].url,l=t.buy_links[1].url,u=t.buy_links[4].url,f=d=t.description,""===d&&(f="Unfortunately, a brief description of this book is currently unavailable. But let that not hinder you from opening its pages and immersing yourself in the unforgettable world it creates."),h='  \n  <img src="'.concat(a,'" alt="Book Image" class="image-about-book-modal">\n  <div class="info-modal">\n  <h2 class="title-about-book-modal">').concat(i,'</h2>\n  <p class="author-about-book-modal"> ').concat(s,'</p>\n  <p class="text-about-book-modal">').concat(f,'</p>\n  <ul class="shop-modal-list"> <li class="shop-modal-item"><a href="').concat(c,'" target="_blank"\n    > <img class="amazon"\n     width="62"\n    height="19"\n    srcset="\n    ').concat(n(B)," 1x,\n    ").concat(n(N),' 2x\n  "\n   src="').concat(n(B),'"\n    alt="Amazon"\n  /></a></li>\n  <li class="shop-modal-item"><a href="').concat(l,'" target="_blank"\n    > <img class="marketApple"\n    width="33"\n    height="32"\n    srcset="\n    ').concat(n(O)," 1x,\n    ").concat(n(A),' 2x\n  "\n   src="').concat(n(O),'"\n    alt="AppleBooks"\n  /></a></li>\n  <li class="shop-modal-item"><a href="').concat(u,'" target="_blank"\n    > <img\n    width="38"\n    height="36"\n    srcset="\n    ').concat(n(C)," 1x,\n    ").concat(n(I),' 2x\n  "\n   src="').concat(n(C),'"\n    alt="Book-Shop"\n  /></a></li>\n</ul>\n</div>\n  '),R.innerHTML=h,[2,t];case 3:return o=r.sent(),(0,g.Loading).remove("Loading..."),console.log("Error",o),(0,p.reportsFailure)("Sorry, no books were found. Please try again."),[3,4];case 4:return[2]}})})).apply(this,arguments)}function Z(){return(Z=(0,i._)(function(e){var n;return(0,s.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),M={},[4,J.fetchBookInfo(e)];case 1:return M={book_image:(n=t.sent().data).book_image,title:n.title,author:n.author,marketAmazon:n.buy_links[0].url,marketAppleBooks:n.buy_links[1].url,marketBookshop:n.buy_links[4].url,list_name:n.list_name,id:n._id,description:n.description},[2,n];case 2:return console.log("Error",t.sent()),[3,3];case 3:return[2]}})})).apply(this,arguments)}function D(){var e=JSON.parse(localStorage.getItem(V)),n=M.id;if(e&&0!==e.length)e.find(function(e){return e.id===n})?(F.style.display="none",T.style.display="block"):(F.style.display="block",null==T||(T.style.display="none"));else{F.style.display="block",T.style.display="none";return}}var K=document.querySelector(".card-backdrop-modal"),W=document.querySelector(".modal"),Y=document.getElementById("modal-close");function $(){var e;null==K||K.classList.add("is-hidden"),null==W||W.classList.add("is-hidden"),null===(e=document.body)||void 0===e||e.classList.remove("modal-open"),document.removeEventListener("keydown",X),document.body.style.overflow="",x.show()}function X(e){"Escape"===e.code&&$()}W&&(null==K||K.addEventListener("click",function(e){e.target===K&&$()}),null==Y||Y.addEventListener("click",function(){$()}),window.addEventListener("keydown",X)),a("aIhu9"),a("2ayrj"),a("50Y4H"),a("eUyG2"),a("bFijQ"),a("euqRf"),a("023A6")}();
//# sourceMappingURL=group.e0aedd8f.js.map
