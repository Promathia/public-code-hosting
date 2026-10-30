const e=document.querySelector("video#external");e&&(e.pause(),new IntersectionObserver(r=>{r.forEach(async r=>{r.isIntersecting?await e.play():e.pause()})},{threshold:0}).observe(e));
