const menu=document.querySelector('.menu-btn');
const close=document.querySelector('.close-btn');
const header=document.querySelector('.header');
const btnNav=document.querySelector('.btn-mobile-nav')

btnNav.addEventListener('click',(e)=>{
    header.classList.toggle('nav-open');
});


// scrolling smooth animatiion

const allLinks=document.querySelectorAll('a:link');
allLinks.forEach(function(link){
    link.addEventListener('click',function(e){
          e.preventDefault();
        const href=link.getAttribute("href");
        
        //scroll back to top
        if(href==="#" ){
            window.scrollTo({
                top:0,
                behavior:"smooth",
            })
        }
        //scrolling on links
        if(href!=="#" && href.startsWith("#")){
            const sectionEl=document.querySelector(href);
            sectionEl.scrollIntoView({behavior:"smooth"});           
        }

//closing nav mobile
        if(link.classList.contains('main-nav-link')){
            header.classList.toggle("nav-open");
        }
    });
});


// ///////sticky navigation
const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }  
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

