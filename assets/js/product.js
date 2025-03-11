
const dec = document.querySelector('#dec')
const inc = document.querySelector('.inc')
const counterP = document.querySelector('.counter')

console.log(dec)

dec.addEventListener('click', ()=>{
  counterP.innerHTML--
  if ( counterP.innerHTML < 1 ) {
    counterP.innerHTML = 1
  }
})

inc.addEventListener('click', ()=>{
  counterP.innerHTML++
  if ( counterP.innerHTML > 5 ) {
    counterP.innerHTML = 5
  }
})




const buyP = document.getElementById('buy-p')
const buyOk = document.querySelector('.buy-ok')

buyP.addEventListener('click', ()=>{
  buyOk.classList.remove('hidden')
  buyP.style.backgroundColor="white"
  buyP.style.color = "#b50000"
  
})
