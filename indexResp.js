burger = document.querySelector('.burger')
navbar= document.querySelector('.navbar')
navList= document.querySelector('.nav-list')
rightnav= document.querySelector('.rtNav')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-navResp')
    navList.classList.toggle('v-classResp')
    rightnav.classList.toggle('v-classResp')



})