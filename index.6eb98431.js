!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n,o,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},s=r.parcelRequire9432;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},r.parcelRequire9432=s),s.register("iE7OH",function(t,n){"use strict";e(t.exports,"register",function(){return o},function(e){return o=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var o,r,i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s.register("aNJCr",function(t,n){e(t.exports,"getBundleURL",function(){return o},function(e){return o=e});"use strict";var o,r={};o=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),s("iE7OH").register(JSON.parse('{"EVgbq":"index.6eb98431.js","avQsH":"action_against.24d1194a.png","3uFcM":"imc.7f989190.png","7ajv2":"medecins_sans.9660594f.png","2BaWP":"progecthope.344d3f3b.png","9Rv9N":"razom.9dcf6eb8.png","j7CFL":"save_the_children.0eb91883.png","e0eu9":"sergiy_prytula.938abd5f.png","27K2X":"united24.de007a75.png","3pRxa":"world_vision.52302304.png","iz5nZ":"amazon-icon1x.985b1de5.png","etq4A":"amazon-icon2x.b774c146.png","mCCOp":"applebook-icon1x.a9f158e0.png","iZ8qR":"applebook-icon2x.7ba433f7.png","gmnG0":"bookshop-icon1x.95f5821d.png","95GBg":"bookshop-icon2x.2b4b4a60.png","jWvt5":"index.1e268b08.js"}')),s("7SQp7");var l=s("i7mVp"),c=s("4tSb9"),u=s("7SQp7");new u.APIService,document.querySelector(".js-shop-list");var d={},g={};g=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("avQsH");var p={};p=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("3uFcM");var m={};m=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("7ajv2");var h={};h=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("2BaWP");var f={};f=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("9Rv9N");var b={};b=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("j7CFL");var v={};v=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("e0eu9");var _={};_=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("27K2X");d={action_against:g,imc:p,medecins_sans:m,progecthope:h,razom:f,save_the_children:b,sergiy_prytula:v,united24:_,world_vision:s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("3pRxa")};var y=document.querySelector(".js-sponsors-list"),S=5,E=0,w=window.matchMedia("(min-width: 767px)"),k=window.matchMedia("(min-width: 375px)"),H=window.matchMedia("(min-width: 1440px)");w&&(S=7,console.log(7)),H&&console.log(S=8),k&&console.log(S=5),n=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"save_the_children"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"progecthope"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"united24"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"imc"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"medecins_sans"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"razom"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"action_against"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"world_vision"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"sergiy_prytula"}].map(function(e){var n=e.url,o=e.title,r=e.img,i=t(d)[r];return'<li class="sponsor-item"><span class="sup_number">'.concat(String(E+=1).padStart(2,"0"),"</span><a href=").concat(n,' target="_blank"><img class="sponsor-img" src="').concat(i,'" alt=').concat(o,"></a></li>")}).join(""),y.insertAdjacentHTML("beforeend",n);var q=document.querySelector(".sponsors-slideDown__btn"),R=document.querySelector(".sponsors-slideUp__btn");R.classList.add("hide");var L=0,x=0;q.addEventListener("click",function(){x<S&&(++x,L+=52,y.style.transform="translateY(-".concat(L,"px)"),console.log(x)),x===S&&(R.classList.remove("hide"),q.classList.add("hide"))}),R.addEventListener("click",function(){x>0&&(--x,L-=52,y.style.transform="translateY(-".concat(L,"px)")),0===x&&(L=0,q.classList.remove("hide"),R.classList.add("hide"))});var l=s("i7mVp"),c=s("4tSb9"),u=s("7SQp7"),l=s("i7mVp"),c=s("4tSb9"),u=s("7SQp7");document.querySelector(".books-gallery"),new u.APIService,new u.APIService,document.querySelector(".book-category__list");var l=s("i7mVp"),c=s("4tSb9"),u=s("7SQp7");new u.APIService,document.querySelector(".books-collection");var l=s("i7mVp"),c=s("4tSb9"),u=s("7SQp7"),A={};A=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("iz5nZ");var O={};O=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("etq4A");var N={};N=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("mCCOp");var B={};B=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("iZ8qR");var C={};C=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("gmnG0");var F={};F=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("95GBg");var J=document.querySelector("#allModal"),V=document.querySelector(".books-gallery"),U=document.querySelector(".add-storage-button"),I=document.querySelector(".remove-storage-btn"),j=document.querySelector(".storage-info"),M=new u.APIService,T="storage-data",z=[],P={};U.addEventListener("click",function(){var e=JSON.parse(localStorage.getItem(T)),t=P;e&&0!==e.length?(e.push(t),localStorage.setItem(T,JSON.stringify(e))):(z.push(t),localStorage.setItem(T,JSON.stringify(z))),j.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",K()}),I.addEventListener("click",function(){j.textContent="";var e=P.id,t=JSON.parse(localStorage.getItem(T)),n=t.findIndex(function(t){return t.id===e});t.splice(n,1),localStorage.setItem(T,JSON.stringify(t)),K()}),V.addEventListener("click",function(e){if("BUTTON"!==e.target.nodeName&&"UL"!==e.target.nodeName&&"DIV"!==e.target.nodeName&&"H3"!==e.target.nodeName){var t=e.target.closest("li").id;Q.classList.remove("is-hidden"),D.classList.remove("is-hidden"),function(e){G.apply(this,arguments)}(t)}});var Q=document.querySelector(".about-book-modal"),D=document.querySelector(".card-backdrop-modal");function G(){return(G=(0,l._)(function(e){var n,o;return(0,c.__generator)(this,function(r){switch(r.label){case 0:J.innerHTML="",r.label=1;case 1:return r.trys.push([1,3,,4]),[4,function(e){return Z.apply(this,arguments)}(e)];case 2:var i,a,s,l,c,u,d;return n=r.sent(),K(),i=n.book_image,a=n.title,s=n.author,l=n.buy_links[0].url,c=n.buy_links[1].url,u=n.buy_links[4].url,d='  \n  <img src="'.concat(i,'" alt="Book Image" class="image-about-book-modal">\n  <div class="info-modal">\n  <h2 class="title-about-book-modal">').concat(a,'</h2>\n  <p class="author-about-book-modal"> ').concat(s,'</p>\n  <p class="text-about-book-modal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, iure nam facere exercitationem quibusdam cum in quasi impedit perferendis porro. Vero quos minima doloribus magni corporis beatae ducimus officiis! Rerum?</p>\n  <ul class="shop-modal-list"> <li class="shop-modal-item"><a href="').concat(l,'" target="_blank"\n    > <img\n     width="62"\n    height="19"\n    srcset="\n    ').concat(t(A)," 1x,\n    ").concat(t(O),' 2x\n  "\n   src="').concat(t(A),'"\n    alt="Amazon"\n  /></a></li>\n  <li class="shop-modal-item"><a href="').concat(c,'" target="_blank"\n    > <img\n    width="33"\n    height="32"\n    srcset="\n    ').concat(t(N)," 1x,\n    ").concat(t(B),' 2x\n  "\n   src="').concat(t(N),'"\n    alt="AppleBooks"\n  /></a></li>\n  <li class="shop-modal-item"><a href="').concat(u,'" target="_blank"\n    > <img\n    width="38"\n    height="36"\n    srcset="\n    ').concat(t(C)," 1x,\n    ").concat(t(F),' 2x\n  "\n   src="').concat(t(C),'"\n    alt="Book-Shop"\n  /></a></li>\n</ul>\n</div>\n  '),J.innerHTML=d,[2,n];case 3:throw console.error("Error",o=r.sent()),o;case 4:return[2]}})})).apply(this,arguments)}function Z(){return(Z=(0,l._)(function(e){var t,n;return(0,c.__generator)(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),P={},[4,M.fetchBookInfo(e)];case 1:return P={book_image:(t=o.sent().data).book_image,title:t.title,author:t.author,marketAmazon:t.buy_links[0].url,marketAppleBooks:t.buy_links[1].url,marketBookshop:t.buy_links[4].url,list_name:t.list_name,id:t._id},[2,t];case 2:throw console.error("Error",n=o.sent()),n;case 3:return[2]}})})).apply(this,arguments)}function K(){var e=JSON.parse(localStorage.getItem(T)),t=P.id;if(e&&0!==e.length)e.find(function(e){return e.id===t})?(U.style.display="none",I.style.display="block"):(U.style.display="block",I.style.display="none");else{U.style.display="block",I.style.display="none";return}}var W=document.querySelector(".authorisation-btn"),Y=document.querySelector(".modal-login-form"),X=document.querySelector(".modal-login-form-close-btn");W.onclick=function(){Y.style.display="block"},X.onclick=function(){Y.style.display="none"},window.onclick=function(e){e.target==Y&&(Y.style.display="none")};var $=document.querySelector("#theme-switch-toggle"),ee=document.querySelector("body"),et={LIGHT:"light-theme",DARK:"dark-theme"};(o=localStorage.getItem("theme"))?ee.classList.add(o):ee.classList.add(et.LIGHT),o===et.DARK&&$.setAttribute("checked",!0),({btn:document.querySelector(".scrollBtn"),show:function(){this.btn.classList.remove("scrollBtn-hide")},hide:function(){this.btn.classList.add("scrollBtn-hide")},addEventListener:function(){var e=this;window.addEventListener("scroll",function(){(window.scrollY||document.documentElement.scrollTop)>100?e.show():e.hide()}),document.querySelector(".scrollBtn").onclick=function(){window.scrollTo({top:0,behavior:"smooth"})}}}).addEventListener()}();
//# sourceMappingURL=index.6eb98431.js.map
