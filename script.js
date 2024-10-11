const menuList = document.querySelector('.menu_list');
const menuBtn = document.querySelector('#menu');
const closeIcon = document.querySelector('.close_icon');
const activeClass = document.querySelector('.active');

menuBtn.addEventListener("click", ()=> {
    menuList.classList.add('active');
});

closeIcon.addEventListener("click", ()=> {
    menuList.classList.remove('active');
});