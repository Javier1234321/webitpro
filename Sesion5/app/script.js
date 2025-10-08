let num = 1 ;
let num2 = 5;
const nombre = 'X'
const arreglo = [1,2,3,4,5,'Hola',55,'1']
if(!num){
    nombre = 'Diego'
    console.log(`Hola soy ${nombre}`)
}else if(num){
    console.log(`Hola soy ${nombre}`)
}else{
    console.log('Soy lo que queda')
}

console.log(num > 2 ? 'Soy mayor que dos' : 'Soy menor que dos' )

while (num < 5) {

    console.log(num)
    num = num + 1;
    
}

for (let index = 0; index < num2; index++) {
    
    console.log(index)
    
}

arreglo.forEach(element => {
    console.log(element + 1)
});

const switchS = {
    0 : 'Hola soy Diego',
    1 : 'Hola soy Javi',
    2 : 'Hola soy Johan'
}

console.log(switchS[2])