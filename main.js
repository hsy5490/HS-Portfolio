'use strict';

//Make Nvabr transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}

//   Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link === null) {
        return;
    }

    navbarMenu.classList.remove('open')
    scrollIntoView(link);

})

// Navbar toggle button
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})

const button = document.querySelector(".home__contact");
button.addEventListener("click", () => {
    scrollIntoView('#contact')
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
    // console.log(1 - window.scrollY / homeHeight)
});

// 탑 스크롤 효과1;
document.querySelector(".top").addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

// work tap menu
const category = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
category.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter === null) {
        return;
    }

    // Remove selection from the previous item and
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    e.target.classList.add('selected');

    projects.forEach((project) => {
        if (filter === '*' || filter === project.dataset.type) {
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible')
        }
    })
})

// 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다
// IntersectionObserver를 이용해서 모든 섹션들을 관찰한다
// 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다

const selectionIds = ['#home', '#about', '#skills', '#work', '#testmonials', "#contact"];
const sections = selectionIds.map(id => document.querySelector(id));
const navitems = selectionIds.map(id => document.querySelector(`[data-link="${id}"]`));
console.log(sections)

const observerOptions={
    root:null,
    rootMargin:'0px',
    threshold:0.3,
}

const observerCallback=(entires,observer)=>{
    entires.forEach(entry=>{
        
    });
}
const observer=new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section=>observer.observe(section));
