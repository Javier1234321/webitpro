const boton=document.getElementById('cambio_tema')
const body=document.getElementById('body')
const head=document.getElementById('head')
let bandera=true
function cambio(){
    if(bandera){
        body.style.background="#000000ff"
        body.style.color="#ece9e9ff"
        head.style.background="#000000ff"
        head.style.color="#ece9e9ff"
        bandera=false
    }else{
        body.style.background="#ece9e9ff"
        body.style.color="#000000ff"
        head.style.background="#ece9e9ff"
        head.style.color="#000000ff"
        bandera=true
    }
}
boton.addEventListener('click',cambio)