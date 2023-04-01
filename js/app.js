const language = document.querySelector('.language'),
dropdown  = document.querySelector('.dropdown'),
dropdownContent = document.querySelector('.dropdownContent'),
menuBtn = document.querySelector('.menuBar'),
closeBtn = document.querySelector('.closeBar'),
nav__list = document.querySelector('.nav__list'),
body = document.querySelector('body'),
overlay = document.querySelector('.overlay'),
nav__link = document.querySelectorAll('.nav__link')




function navbarShow(){
     nav__list.classList.add('showNavbar')
     overlay.classList.add('showOverlay')
}
function navbarClose(){
     nav__list.classList.remove('showNavbar')
     overlay.classList.remove('showOverlay')
}
nav__link.forEach((e)=>{
     e.addEventListener('click', navbarClose)
})

menuBtn.addEventListener('click',navbarShow)
closeBtn.addEventListener('click',navbarClose)
overlay.addEventListener('click',navbarClose)

function Copyright() {
     const copyright = document.querySelector('.copyright')
     const year = new Date().getFullYear()
     copyright.innerHTML = `
     <p>©${year} IRA.COIN. All right reserved</p>
     `
   }Copyright()