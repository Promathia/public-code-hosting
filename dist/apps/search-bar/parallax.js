import{_ as t}from"./index.js";import"./vendor1.js";import"./vendor2.js";let e=!1;async function o(){if(e)return;if(e=!0,!document.body.querySelector(".cmp-parallax"))return;const{bootParallax:o}=await t(()=>import("./parallax.impl.js"),__vite__mapDeps([0,1]),import.meta.url);await o()}"loading"===document.readyState?(document.addEventListener("DOMContentLoaded",o,{once:!0}),window.addEventListener("load",o,{once:!0})):o();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./parallax.impl.js","./vendor1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
