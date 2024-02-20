import{S as d,i as m}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function f(t){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"42263617-81d7156b9f7b88cd7b1016c2a",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),n=`${o}?${s}`;return fetch(n).then(e=>e.json())}function g(t){const{largeImageURL:o,webformatURL:s,tags:n,likes:e,views:r,comments:a,downloads:u}=t;return`<li class="gallery-item" >
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${s}"
        alt="${n}"
      />
    </a>
    <div class="item-text">
    <p><strong>Likes:</strong> ${e}</p>
    <p><strong>Views:</strong> ${r}</p>
    <p><strong>Comments:</strong> ${a}</p>
    <p><strong>Downloads:</strong> ${u}</p>
    </div>
  </li>`}function p(t){return t.map(g).join("")}const i={formEl:document.querySelector(".form"),loadEl:document.querySelector(".loader"),GalleryEl:document.querySelector(".gallery")};i.formEl.addEventListener("submit",h);function h(t){t.preventDefault(),b();const o=t.target.elements.query.value.trim();if(!o){c(),l();return}f(o).then(s=>{l(),s.hits.length===0?L():(i.GalleryEl.innerHTML="",y(s.hits))}).catch(s=>{c(s),l(),i.GalleryEl.innerHTML=""}).finally(()=>{t.target.reset()})}function y(t){const o=p(t);i.GalleryEl.insertAdjacentHTML("beforeend",o),new d(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250,widthRatio:.8,scaleImageToRatio:!0}).refresh()}function c(t){m.error({message:t?t.message:"Please enter a search query.",position:"topRight"})}function L(){m.error({backgroundColor:"#EF4040",position:"topRight",maxWidth:500,message:"Sorry, there are no images matching your search query. Please try again!"})}const b=()=>{i.loadEl.classList.remove("hidden")},l=()=>{i.loadEl.classList.add("hidden")};
//# sourceMappingURL=commonHelpers.js.map
