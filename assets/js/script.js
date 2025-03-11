// swiper 
var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// menu in mobail
const menuIcon = document.querySelector('.menuIcon')
const closeIcon = document.querySelector('.aside-menu>i')
const menu = document.querySelector('.aside-menu')
const menuLi = document.querySelectorAll('.aside-menu>ul>li')
const backDrop = document.querySelector('.backdrop')
const menuBotton = document.querySelector('.menu-bottom')

menuIcon.addEventListener('click', () => {
  menu.style.width = "400px"
  menu.style.display = 'flex'
  menu.style.overflow = 'visible'
  backDrop.classList.remove('hidden')
  menuBotton.style.display = 'none'
  menuLi.forEach(li => {
    li.style.opacity = '1'
  })
})
closeIcon.addEventListener('click', () => {
  menu.style.width = "0"
  menu.style.overflow = "hidden"
  backDrop.classList.add('hidden')
  menuBotton.style.display = 'flex'
  menuLi.forEach(li => {
    li.style.opacity = '0'
  })
})



// click li in menu bar
menuLi.forEach(li => {
  li.addEventListener('click', () => {
    menu.style.width = '0'
    menu.style.overflow = 'hidden'
    menuBotton.style.display = 'flex'
    backDrop.classList.add('hidden')
  })
})





// hide nav bar//
const navHeader = document.querySelector('.header-nav')
let scrollCount = 0
window.addEventListener('scroll', () => {
  let st = window.scrollY
  // if (st < 110) {
  //   navHeader.style.opacity='1'
  // }
  if (st > scrollCount) {
    setTimeout(() => {
      if (!st == 0) {
        navHeader.style.opacity = '0'
      }
    }, 2000);
  } else {
    navHeader.style.opacity = '1'
  }
  scrollCount = st
})



// progress

const percentage = document.querySelectorAll('.percentage')
const percentS = document.querySelectorAll('.percentage>span')

percentageF()
function percentageF() {
  percentage[0].style.width = '100%'
  percentage[1].style.width = '90%'
  percentage[2].style.width = '96%'
}
let inerSI = setInterval(() => {
  percentS[0].innerHTML++
  if (percentS[0].innerHTML > 99) clearInterval(inerSI)
}, 8);

let inerSII = setInterval(() => {
  percentS[1].innerHTML++
  if (percentS[1].innerHTML > 89) clearInterval(inerSII)
}, 8);

let inerSIV = setInterval(() => {
  percentS[2].innerHTML++
  if (percentS[2].innerHTML > 95) clearInterval(inerSIV)
}, 8);


const fullImgM = document.querySelectorAll('.full-imgM')
console.log(fullImgM)
fullImgM.forEach((item)=>{
  item.addEventListener('click', ()=>{
    if (!document.fullscreenElement) {
      item.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  })
})




// form
 const form= document.querySelector('form')
 const nameCustomer =document.querySelector('#name')
 const emailA =document.querySelector('#email')
 const errorText = document.querySelector('.error-text')

form.addEventListener('submit',(event)=>{
  if (emailA.value =='' || nameCustomer.value=='') {
    event.preventDefault()
    emailA.style.outline = "1px solid rgba(181, 0, 0, 0.86)"
    nameCustomer.style.outline = "1px solid rgba(181, 0, 0, 0.86)"
    errorText.classList.remove('hidden')

  }
})



