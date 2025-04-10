

const menuBtn=document.querySelector('.menu-btn')
const navlinks=document.querySelector('.navlink')
menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('active')
})