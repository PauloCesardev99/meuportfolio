const menu = window.document.getElementById('menu')
const menu2 = window.document.getElementById('menu2')
const nav = window.document.getElementById('nav')



menu.addEventListener ('click', function AbrirMenu() {

   menu.style.display = 'none'
   menu2.style.display = 'inline-block'
   nav.style.display = 'inline-block'
})

menu2.addEventListener ('click', function FecharMenu() {
    menu2.style.display = 'none'
    menu.style.display = 'inline-block'
    nav.style.display = 'none'
 })