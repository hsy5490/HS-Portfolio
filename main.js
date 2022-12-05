'use strict';

//Make Nvabr transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(window.scrollY)
    // console.log(`navbarHeight:${navbarHeight}`)
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark')
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// 탑 스크롤 효과;
document.querySelector(".top").addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});



//   Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
    const target=event.target;
    const link=target.dataset.link;
    if(link===null){
        return;
    }

    // console.log(event.target.dataset.link);
    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({behavior: "smooth" });
    scrollIntoView(link);

})

const button=document.querySelector(".home__contact");
button.addEventListener("click", ()=>{
    scrollIntoView('#contact')
});

function scrollIntoView(selector){
    const scrollTo=document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}