let x = 10
let y = 20

console.log('1- Esto va antes que la promesa')

let tiempo = new Promise((resolve, reject) => {
    setTimeout(() => {
        let resultado = x + y
        console.log('2- Estamos ejecutando la promesa')
        resolve(resultado)
    }, 5000);
})

.then((result) => {
    console.log('3- Devolvemos el valor al terminar de ejecutar la funcion:',result)
})