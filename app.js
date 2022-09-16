let frutas = ['kiwi','frutilla','uva','pera','sandia','mango']
let frutas2 = ['kiwi','frutilla','uva','pera','sandia']
let verduras = ['lechuga','zanahoria','remolacha','cebolla','brocoli']

let mostrarConsola = function(array) {
    return array
}

let resultado1 = mostrarConsola(verduras)
let resultado2 = mostrarConsola(frutas)

Promise.all([resultado1,resultado2])
.then(([resultado1,resultado2]) => {
    console.log(resultado1);
    console.log(resultado2);
})
.catch(err => console.log(err))

console.log(frutas2);