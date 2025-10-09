const logo=document.querySelector('#imgLogo');
const img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaS9dW15PMOAWf9oneAPmq-Fys0W8w3nPXC7wZ36CROlJ3tkNFb0_9uz5CI7h98cHIzOUupljRsENdsXzDLtFfJ-mMB_KHcl7TjZGD8qoXg'
const setLogo=()=>{
    logo.setAttribute('src',img)
}
window.addEventListener('load',setLogo)
const boton = document.querySelector('.cambioModo');
const body = document.querySelector('.body');
const head = document.querySelector('.menu');

let bandera = true;

function cambio() {
  if (bandera) {
    body.style.background = "#000000ff";
    body.style.color = "#ece9e9ff";
    head.style.background = "rgb(43, 87, 87)";
    head.style.color = "#1b1a1aff";
    bandera = false;
  } else {
    body.style.background = "#ece9e9ff";
    body.style.color = "#000000ff";
    head.style.background = "rgb(43, 87, 87)";
    head.style.color = "#000000ff";
    bandera = true;
  }
}
boton.addEventListener('click', cambio);
