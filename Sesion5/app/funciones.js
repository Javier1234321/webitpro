function suma(num1, num2){
    console.log(num1 + num2)
}
suma(49,51)
const resta=(num1,num2)=>{
    console.log(num1-num2)
}
resta(60,43)
const titulo= document.getElementById('titulo')
console.log(titulo.style.color)
const boton= document.getElementById('btn')
console.log(boton)

const cuadros= document.getElementsByClassName("class")

function cambio(){
    titulo.style.color='green'
    for (let index = 0; index < cuadros.length; index++) {
        cuadros[index].style.background='red';
        
    }
}
boton.addEventListener('click',cambio)
