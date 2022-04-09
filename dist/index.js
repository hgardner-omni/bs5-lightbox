/*! For license information please see index.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("bootstrap")):"function"==typeof define&&define.amd?define("Lightbox",["bootstrap"],e):"object"==typeof exports?exports.Lightbox=e(require("bootstrap")):t.Lightbox=e(t.bootstrap)}(self,(function(t){return function(){"use strict";var e={988:function(e){e.exports=t}},s={};function a(t){var o=s[t];if(void 0!==o)return o.exports;var i=s[t]={exports:{}};return e[t](i,i.exports,a),i.exports}a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,{a:e}),e},a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var o={};return function(){var t=a(988);const e={Modal:t.Modal,Carousel:t.Carousel};class s{constructor(t,s={}){this.hash=this.randomHash(),this.settings=Object.assign(Object.assign(Object.assign({},e.Modal.Default),e.Carousel.Default),{interval:!1,target:'[data-toggle="lightbox"]',gallery:"",size:"xl",constrain:!0}),this.modalOptions=(()=>this.setOptionsFromSettings(e.Modal.Default))(),this.carouselOptions=(()=>this.setOptionsFromSettings(e.Carousel.Default))(),"string"==typeof t&&(this.settings.target=t,t=document.querySelector(this.settings.target)),this.settings=Object.assign(Object.assign({},this.settings),s),this.el=t,this.type=t.dataset.type||"",this.src=this.getSrc(t),this.sources=this.getGalleryItems(),this.createCarousel(),this.createModal()}show(){document.body.appendChild(this.modalElement),this.modal.show()}hide(){this.modal.hide()}setOptionsFromSettings(t){return Object.keys(t).reduce(((t,e)=>Object.assign(t,{[e]:this.settings[e]})),{})}getSrc(t){let e=t.dataset.src||t.dataset.remote||t.href||"http://via.placeholder.com/1600x900";if("html"===t.dataset.type)return e;/\:\/\//.test(e)||(e=window.location.origin+e);const s=new URL(e);return(t.dataset.footer||t.dataset.caption)&&s.searchParams.set("caption",t.dataset.footer||t.dataset.caption),s.toString()}getGalleryItems(){let t;if(this.settings.gallery){if(Array.isArray(this.settings.gallery))return this.settings.gallery;t=this.settings.gallery}else this.el.dataset.gallery&&(t=this.el.dataset.gallery);return t?[...new Set(Array.from(document.querySelectorAll(`[data-gallery="${t}"]`),(t=>`${t.dataset.type?t.dataset.type:""}${this.getSrc(t)}`)))]:[`${this.type?this.type:""}${this.src}`]}getYoutubeId(t){if(!t)return!1;const e=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return!(!e||11!==e[2].length)&&e[2]}getInstagramEmbed(t){if(/instagram/.test(t))return`<iframe src="${t+=/\/embed$/.test(t)?"":"/embed"}" class="start-50 translate-middle-x" style="max-width: 500px" frameborder="0" scrolling="no" allowtransparency="true"></iframe>`}isEmbed(t){const e=new RegExp("("+s.allowedEmbedTypes.join("|")+")").test(t),a=/\.(png|jpe?g|gif|svg|webp)/i.test(t)||"image"===this.el.dataset.type;return e||!a}createCarousel(){const t=document.createElement("template"),a=s.allowedMediaTypes.join("|"),o=this.sources.map(((t,e)=>{t=t.replace(/\/$/,"");const s=new RegExp(`^(${a})`,"i"),o=/^html/.test(t),i=/^image/.test(t);s.test(t)&&(t=t.replace(s,""));let n=`<img src="${t}" class="d-block ${this.settings.constrain?"mw-100 mh-100 h-auto w-auto m-auto top-0 end-0 bottom-0 start-0":"h-100 w-100"} img-fluid" style="z-index: 1; object-fit: contain;" />`,r="";const l=this.getInstagramEmbed(t),d=this.getYoutubeId(t);this.isEmbed(t)&&!i&&(d&&(t=`https://www.youtube.com/embed/${d}`,r='title="YouTube video player" frameborder="0" allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture"'),n=l||`<iframe src="${t}" ${r} allowfullscreen></iframe>`),o&&(n=t);const c=new URLSearchParams(t.split("?")[1]);let h="";return c.get("caption")&&(h=`<p class="lightbox-caption m-0 p-2 text-center text-white small"><em>${c.get("caption")}</em></p>`),`\n\t\t\t\t<div class="carousel-item ${e?"":"active"}" style="min-height: 100px">\n\t\t\t\t\t<div class="position-absolute top-50 start-50 translate-middle text-white"><div class="spinner-border" style="width: 3rem height: 3rem" role="status"></div></div>\n\t\t\t\t\t<div class="ratio ratio-16x9" style="background-color: #000;">${n}</div>\n\t\t\t\t\t${h}\n\t\t\t\t</div>`})).join(""),i=this.sources.length<2?"":`\n\t\t\t<button id="#lightboxCarousel-${this.hash}-prev" class="carousel-control carousel-control-prev h-75 m-auto" type="button" data-bs-target="#lightboxCarousel-${this.hash}" data-bs-slide="prev">\n\t\t\t\t<span class="carousel-control-prev-icon" aria-hidden="true"></span>\n\t\t\t\t<span class="visually-hidden">Previous</span>\n\t\t\t</button>\n\t\t\t<button id="#lightboxCarousel-${this.hash}-next" class="carousel-control carousel-control-next h-75 m-auto" type="button" data-bs-target="#lightboxCarousel-${this.hash}" data-bs-slide="next">\n\t\t\t\t<span class="carousel-control-next-icon" aria-hidden="true"></span>\n\t\t\t\t<span class="visually-hidden">Next</span>\n\t\t\t</button>`;let n="lightbox-carousel carousel";"fullscreen"===this.settings.size&&(n+=" position-absolute w-100 translate-middle top-50 start-50");const r=`\n\t\t\t<div id="lightboxCarousel-${this.hash}" class="${n}" data-bs-ride="carousel" data-bs-interval="${this.carouselOptions.interval}">\n\t\t\t\t<div class="carousel-inner">\n\t\t\t\t\t${o}\n\t\t\t\t</div>\n\t\t\t\t${i}\n\t\t\t</div>`;t.innerHTML=r.trim(),this.carouselElement=t.content.firstChild;const l=Object.assign(Object.assign({},this.carouselOptions),{keyboard:!1});this.carousel=new e.Carousel(this.carouselElement,l);const d=this.type&&"image"!==this.type?this.type+this.src:this.src;return this.carousel.to(this.findGalleryItemIndex(this.sources,d)),!0===this.carouselOptions.keyboard&&document.addEventListener("keydown",(t=>{if("ArrowLeft"===t.code){const t=document.getElementById(`#lightboxCarousel-${this.hash}-prev`);return t&&t.click(),!1}if("ArrowRight"===t.code){const t=document.getElementById(`#lightboxCarousel-${this.hash}-next`);return t&&t.click(),!1}})),this.carousel}findGalleryItemIndex(t,e){let s=0;for(const a of t){if(a.includes(e))return s;s++}return 0}createModal(){const t=document.createElement("template"),s=`\n\t\t\t<div class="modal lightbox fade" id="lightboxModal-${this.hash}" tabindex="-1" aria-hidden="true">\n\t\t\t\t<div class="modal-dialog modal-dialog-centered modal-${this.settings.size}">\n\t\t\t\t\t<div class="modal-content border-0 bg-transparent">\n\t\t\t\t\t\t<div class="modal-body p-0">\n\t\t\t\t\t\t\t<button type="button" class="btn-close position-absolute top-0 end-0 p-3" data-bs-dismiss="modal" aria-label="Close" style="z-index: 2; background: none;"><svg xmlns="http://www.w3.org/2000/svg" style="position: relative; top: -5px;" viewBox="0 0 16 16" fill="#fff"><path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"/></svg></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>`;return t.innerHTML=s.trim(),this.modalElement=t.content.firstChild,this.modalElement.querySelector(".modal-body").appendChild(this.carouselElement),this.modalElement.addEventListener("hidden.bs.modal",(()=>this.modalElement.remove())),this.modalElement.querySelector("[data-bs-dismiss]").addEventListener("click",(()=>this.modal.hide())),this.modal=new e.Modal(this.modalElement,this.modalOptions),this.modal}randomHash(t=8){return Array.from({length:t},(()=>Math.floor(36*Math.random()).toString(36))).join("")}}s.allowedEmbedTypes=["embed","youtube","vimeo","instagram","url"],s.allowedMediaTypes=[...s.allowedEmbedTypes,"image","html"],s.defaultSelector='[data-toggle="lightbox"]',s.initialize=function(t){t.preventDefault(),new s(this).show()},document.querySelectorAll(s.defaultSelector).forEach((t=>t.addEventListener("click",s.initialize))),"undefined"!=typeof window&&window.bootstrap&&(window.bootstrap.Lightbox=s),o.default=s}(),o.default}()}));
//# sourceMappingURL=index.js.map