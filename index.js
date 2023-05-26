const menu = [...window.document.getElementsByClassName('menu')]
const nav = window.document.getElementById('nav')

/* Abrir e fechar menu   */

for(let i = 0; i< menu.length; i++){

   menu[i].addEventListener("click", function(){

      if (menu[i] == menu[0]){
         menu[0].style.display = "none"
         menu[1].style.display = "inline-block"
         nav.style.display = "block"
      } else{
         menu[1].style.display = "none"
         menu[0].style.display = "inline-block"
         nav.style.display = "none"
      }
      

   })

}